#!/usr/bin/env node
/**
 * Pull a curated set of photos from each event's public Google Photos album
 * into the repo, so the event page gallery can show them.
 *
 *   pnpm photos:fetch                      # every event with an albumUrl and no photos yet
 *   pnpm photos:fetch brain-games-fall-2026 # just these slugs (replaces existing photos)
 *   pnpm photos:fetch --count 9 ...        # how many photos to take (default 12)
 *
 * How it works: the album's public share page lists every photo's URL and
 * size. We pick `count` photos spread evenly across the album, download them,
 * resize them (1600px + 480px thumbnail, like photos:optimize), save them to
 * public/assets/events/<slug>/, and write the `photos` list into
 * events-data.ts. This reads the public page, not the Google Photos API, so if
 * Google changes that page the script may stop finding photos; in that case,
 * download photos by hand and use `pnpm photos:optimize`.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const FULL_PX = 1600;
const THUMB_PX = 480;
const QUALITY = 80;
const OUTPUT_FILE = /^\d+(-thumb)?\.jpg$/;
// A plain UA gets the server-rendered album page; full browser UAs get a
// JavaScript redirect with no photo data in it.
const USER_AGENT = "Mozilla/5.0";

const root = path.resolve(import.meta.dirname, "..");
const DATA_FILE = path.join(root, "src/components/events/events-data.ts");

// --- Args -------------------------------------------------------------------
const args = process.argv.slice(2);
let count = 12;
const countAt = args.indexOf("--count");
if (countAt !== -1) {
	count = Number(args[countAt + 1]);
	args.splice(countAt, 2);
}
const requestedSlugs = args;

// --- Find events -------------------------------------------------------------
let data = await fs.readFile(DATA_FILE, "utf8");
const entries = [...data.matchAll(/\t\{\n([\s\S]*?)\n\t\},?\n/g)].map((m) => {
	const body = m[1];
	const field = (name) => body.match(new RegExp(`\\t\\t${name}: "([^"]*)"`))?.[1];
	return {
		slug: field("slug"),
		title: field("title"),
		albumUrl: field("albumUrl"),
		hasPhotos: /\n\t\tphotos: /.test(`\n${body}`),
	};
});

const targets = entries.filter((e) =>
	requestedSlugs.length
		? requestedSlugs.includes(e.slug)
		: e.albumUrl && !e.hasPhotos,
);
for (const slug of requestedSlugs) {
	const e = entries.find((x) => x.slug === slug);
	if (!e) console.warn(`⚠️  No event with slug "${slug}"`);
	else if (!e.albumUrl) console.warn(`⚠️  "${slug}" has no albumUrl`);
}

// --- Process -----------------------------------------------------------------
for (const event of targets.filter((e) => e.albumUrl)) {
	console.log(`\n${event.title} (${event.slug})`);
	try {
		const photos = await fetchEventPhotos(event);
		data = writePhotos(data, event.slug, photos);
		await fs.writeFile(DATA_FILE, data);
		console.log(`  ✓ saved ${photos.length} photos`);
	} catch (err) {
		console.error(`  ✗ ${err.message}`);
		process.exitCode = 1;
	}
}

async function fetchEventPhotos(event) {
	const res = await fetch(event.albumUrl, {
		headers: { "User-Agent": USER_AGENT },
	});
	if (!res.ok) throw new Error(`album page returned ${res.status}`);
	const html = await res.text();

	// Each photo appears as ["https://lh3.googleusercontent.com/pw/…",width,height
	const seen = new Set();
	const all = [];
	for (const m of html.matchAll(
		/\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[\w-]+)",(\d+),(\d+)/g,
	)) {
		if (seen.has(m[1])) continue;
		seen.add(m[1]);
		all.push(m[1]);
	}
	if (all.length === 0) throw new Error("no photos found on the album page");

	// Spread picks evenly so the gallery covers the whole event.
	const n = Math.min(count, all.length);
	const picks = Array.from(
		{ length: n },
		(_, i) => all[Math.floor((i * all.length) / n)],
	);
	console.log(`  album has ${all.length} photos, taking ${n}`);

	const outDir = path.join(root, "public/assets/events", event.slug);
	await fs.mkdir(outDir, { recursive: true });
	for (const f of await fs.readdir(outDir)) {
		if (OUTPUT_FILE.test(f)) await fs.rm(path.join(outDir, f));
	}

	const publicBase = `/assets/events/${event.slug}`;
	const photos = [];
	for (const [i, url] of picks.entries()) {
		const num = String(i + 1).padStart(2, "0");
		// "=w…-h…" asks Google for a version that fits in that box.
		const img = await fetch(`${url}=w${FULL_PX}-h${FULL_PX}`, {
			headers: { "User-Agent": USER_AGENT },
		});
		if (!img.ok) throw new Error(`photo ${num} returned ${img.status}`);
		const image = sharp(Buffer.from(await img.arrayBuffer())).rotate();
		const fit = (px) => ({
			width: px,
			height: px,
			fit: "inside",
			withoutEnlargement: true,
		});
		const full = await image
			.clone()
			.resize(fit(FULL_PX))
			.jpeg({ quality: QUALITY, mozjpeg: true })
			.toFile(path.join(outDir, `${num}.jpg`));
		await image
			.clone()
			.resize(fit(THUMB_PX))
			.jpeg({ quality: QUALITY, mozjpeg: true })
			.toFile(path.join(outDir, `${num}-thumb.jpg`));
		photos.push({
			src: `${publicBase}/${num}.jpg`,
			thumb: `${publicBase}/${num}-thumb.jpg`,
			alt: `Photo from ${event.title}`,
			width: full.width,
			height: full.height,
		});
	}
	return photos;
}

/** Insert or replace the event's `photos: [...]` in events-data.ts. */
function writePhotos(source, slug, photos) {
	const start = source.indexOf(`\t\tslug: "${slug}",`);
	const end = source.indexOf("\n\t},", start);
	let body = source.slice(start, end);

	body = body.replace(/\n\t\tphotos: \[[\s\S]*?\n\t\t\],/, "");
	const list = photos
		.map(
			(p) =>
				`\t\t\t{\n${Object.entries(p)
					.map(([k, v]) => `\t\t\t\t${k}: ${JSON.stringify(v)},`)
					.join("\n")}\n\t\t\t},`,
		)
		.join("\n");
	body = body.replace(
		/(\t\talbumUrl: .*\n)/,
		`$1\t\tphotos: [\n${list}\n\t\t],\n`,
	);
	return source.slice(0, start) + body + source.slice(end);
}
