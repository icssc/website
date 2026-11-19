#!/usr/bin/env node
/**
 * One-off migration: rewrites src/components/events/events-data.ts from the
 * legacy { src, title, time, location, description, aspectRatio } shape into
 * the ClubEvent model (see events-types.ts). Nothing is hand-retyped: the
 * legacy file is compiled and imported, then serialized back out.
 *
 *   node scripts/migrate-events.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = path.resolve(import.meta.dirname, "..");
const DATA_FILE = path.join(root, "src/components/events/events-data.ts");
const TZ = "America/Los_Angeles";

// --- Load the legacy data by transpiling the TS module in memory ----------
const source = await fs.readFile(DATA_FILE, "utf8");
if (!source.includes("time:")) {
	console.error("events-data.ts already looks migrated; nothing to do.");
	process.exit(1);
}
const { outputText } = ts.transpileModule(source, {
	compilerOptions: {
		module: ts.ModuleKind.ESNext,
		target: ts.ScriptTarget.ES2022,
	},
});
const { EVENTS_DATA: legacy } = await import(
	`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

// --- Helpers ---------------------------------------------------------------

/**
 * Which UCI academic quarter an event date falls in, e.g. "Fall 2026".
 *
 * @param {number} year   e.g. 2026
 * @param {number} month  1–12
 * @param {number} day    1–31
 * @returns {string}      "<Fall|Winter|Spring|Summer> <year>"
 */
function quarterFor(year, month, day) {
	// Approximate UCI calendar: Winter Jan–spring break, Spring through
	// mid-June, Summer until fall week 0 (~Sep 20), Fall through December.
	const md = month * 100 + day; // e.g. Mar 21 -> 321
	if (md < 321) return `Winter ${year}`;
	if (md < 616) return `Spring ${year}`;
	if (md < 920) return `Summer ${year}`;
	return `Fall ${year}`;
}

/** Offset of America/Los_Angeles at a wall-clock time, e.g. "-07:00". */
function laOffset(localIso) {
	const guess = new Date(`${localIso}Z`);
	const name = new Intl.DateTimeFormat("en-US", {
		timeZone: TZ,
		timeZoneName: "longOffset",
	})
		.formatToParts(guess)
		.find((p) => p.type === "timeZoneName").value; // "GMT-07:00"
	return name.replace("GMT", "") || "+00:00";
}

const slugify = (s) =>
	s
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

/** Undo the `\`-line-continuation indentation in older descriptions. */
const tidy = (s) => s.replace(/[ \t]{2,}/g, " ").trim();

// --- Migrate ---------------------------------------------------------------
const seen = new Set();
const events = legacy
	.map((old) => {
		const local = old.time.trim(); // "2026-10-28T19:00"
		if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(local)) {
			throw new Error(`Unexpected time format for "${old.title}": ${local}`);
		}
		const [y, m, d] = local.slice(0, 10).split("-").map(Number);
		const quarter = quarterFor(y, m, d);
		if (!/^(Fall|Winter|Spring|Summer) \d{4}$/.test(quarter ?? "")) {
			throw new Error(`quarterFor(${y}, ${m}, ${d}) returned "${quarter}"`);
		}

		const title = tidy(old.title);
		let slug = slugify(`${title} ${quarter}`);
		for (let n = 2; seen.has(slug); n++) {
			slug = slugify(`${title} ${quarter} ${n}`);
		}
		seen.add(slug);

		return {
			slug,
			title,
			start: `${local}:00${laOffset(local)}`,
			location: tidy(old.location),
			quarter,
			description: tidy(old.description),
			...(old.src && {
				poster: { src: `/assets/events/${old.src}`, alt: `${title} poster` },
			}),
		};
	})
	.sort((a, b) => new Date(b.start) - new Date(a.start));

// --- Write -----------------------------------------------------------------
const serialize = (value, indent) => {
	if (typeof value !== "object") return JSON.stringify(value);
	const pad = "\t".repeat(indent + 1);
	const body = Object.entries(value)
		.map(([k, v]) => `${pad}${k}: ${serialize(v, indent + 1)},`)
		.join("\n");
	return `{\n${body}\n${"\t".repeat(indent)}}`;
};

const output = `import type { ClubEvent } from "@/components/events/events-types";

/**
 * Every ICSSC event, newest first. See the README ("Webmaster notes: events")
 * for how to add events and photos.
 */
export const EVENTS_DATA: ClubEvent[] = [
${events.map((e) => `\t${serialize(e, 1)},`).join("\n")}
];
`;

await fs.writeFile(DATA_FILE, output);

const counts = Object.groupBy(events, (e) => e.quarter);
console.log(
	`Migrated ${events.length} events (${legacy.length} in legacy file)`,
);
for (const [q, list] of Object.entries(counts)) {
	console.log(`  ${q.padEnd(12)} ${list.length}`);
}
