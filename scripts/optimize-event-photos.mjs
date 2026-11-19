#!/usr/bin/env node
/**
 * Resize a folder of event photos for the website.
 *
 *   pnpm photos:optimize <input-folder> <event-slug>
 *
 * For every image in <input-folder> (sorted by filename) this writes, into
 * public/assets/events/<event-slug>/:
 *   01.jpg        max 1600px on the long edge, ~80% quality
 *   01-thumb.jpg  max 480px on the long edge
 * and prints a `photos: [...]` snippet to paste into events-data.ts.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const FULL_PX = 1600;
const THUMB_PX = 480;
const QUALITY = 80;
const IMAGE_EXT = /\.(jpe?g|png|webp|tiff?|avif)$/i;
const OUTPUT_FILE = /^\d+(-thumb)?\.jpg$/;

const [inputDir, slug] = process.argv.slice(2);
if (!inputDir || !slug) {
	console.error(
		"Usage: pnpm photos:optimize <input-folder> <event-slug>\n" +
			'  e.g. pnpm photos:optimize ~/Downloads/brain-games "brain-games-fall-2026"',
	);
	process.exit(1);
}

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public/assets/events", slug);
const publicBase = `/assets/events/${slug}`;

// Look up the event title for default alt text.
const data = await fs.readFile(
	path.join(root, "src/components/events/events-data.ts"),
	"utf8",
);
const match = data.match(
	new RegExp(`slug: "${slug.replace(/[-]/g, "\\-")}",\\s*title: "([^"]*)"`),
);
if (!match) {
	console.warn(
		`⚠️  No event with slug "${slug}" in events-data.ts — check the spelling.`,
	);
}
const title = match?.[1] ?? "the event";

const files = (await fs.readdir(inputDir))
	.filter((f) => IMAGE_EXT.test(f))
	.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (files.length === 0) {
	console.error(`No images found in ${inputDir}`);
	process.exit(1);
}

await fs.mkdir(outDir, { recursive: true });
// Remove output from a previous run so removed photos don't linger.
for (const f of await fs.readdir(outDir)) {
	if (OUTPUT_FILE.test(f)) await fs.rm(path.join(outDir, f));
}

const photos = [];
for (const [i, file] of files.entries()) {
	const n = String(i + 1).padStart(2, "0");
	// .rotate() applies EXIF orientation so phone photos aren't sideways.
	const image = sharp(path.join(inputDir, file)).rotate();
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
		.toFile(path.join(outDir, `${n}.jpg`));
	await image
		.clone()
		.resize(fit(THUMB_PX))
		.jpeg({ quality: QUALITY, mozjpeg: true })
		.toFile(path.join(outDir, `${n}-thumb.jpg`));

	photos.push({
		src: `${publicBase}/${n}.jpg`,
		thumb: `${publicBase}/${n}-thumb.jpg`,
		alt: `Photo from ${title}`,
		width: full.width,
		height: full.height,
	});
	console.log(`✓ ${file} → ${n}.jpg (${full.width}×${full.height})`);
}

console.log(
	`\nWrote ${photos.length} photos to ${path.relative(root, outDir)}/`,
);
console.log(
	"Paste this into the event in src/components/events/events-data.ts",
);
console.log("(and replace the alt text with real descriptions if you can):\n");
console.log(`photos: ${JSON.stringify(photos, null, "\t")},`);
