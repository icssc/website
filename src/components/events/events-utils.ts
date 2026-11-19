import { EVENTS_DATA } from "@/components/events/events-data";
import type { ClubEvent } from "@/components/events/events-types";

/** All dates are shown in campus time, regardless of the viewer's timezone. */
const TZ = "America/Los_Angeles";

const ms = (iso: string) => new Date(iso).getTime();

const laDateFormat = new Intl.DateTimeFormat("en-CA", {
	timeZone: TZ,
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
});

/**
 * Events with no explicit `end` stay "upcoming" until the end of the day
 * they happen on (campus time), matching the previous site behaviour.
 */
function eventEndMs(event: ClubEvent) {
	if (event.end) return ms(event.end);
	const day = laDateFormat.format(new Date(event.start)); // YYYY-MM-DD
	const offset = event.start.slice(-6); // e.g. -08:00
	return ms(`${day}T23:59:59.999${offset}`);
}

export function isUpcoming(event: ClubEvent, now: number) {
	return now < eventEndMs(event);
}

export function getUpcomingEvents(now: number) {
	return EVENTS_DATA.filter((e) => isUpcoming(e, now)).sort(
		(a, b) => ms(a.start) - ms(b.start),
	);
}

export function getPastEvents(now: number) {
	return EVENTS_DATA.filter((e) => !isUpcoming(e, now)).sort(
		(a, b) => ms(b.start) - ms(a.start),
	);
}

export function getEventBySlug(slug: string) {
	return EVENTS_DATA.find((e) => e.slug === slug);
}

/** Older event (prev) and newer event (next) in chronological order. */
export function getAdjacentEvents(slug: string) {
	const sorted = [...EVENTS_DATA].sort((a, b) => ms(a.start) - ms(b.start));
	const i = sorted.findIndex((e) => e.slug === slug);
	return {
		prev: i > 0 ? sorted[i - 1] : undefined,
		next: i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : undefined,
	};
}

/** Unique quarters, newest first (expects events sorted newest first). */
export function getQuarters(eventsNewestFirst: ClubEvent[]) {
	return Array.from(new Set(eventsNewestFirst.map((e) => e.quarter)));
}

/** "Fall 2026" -> "fall-2026" (used for ?q=) */
export function quarterToParam(quarter: string) {
	return quarter.toLowerCase().replace(/\s+/g, "-");
}

export function hasPhotos(event: ClubEvent) {
	return (event.photos?.length ?? 0) > 0;
}

export function getSummary(event: ClubEvent, max = 160) {
	if (event.summary) return event.summary;
	const text = event.description.replace(/\s+/g, " ").trim();
	if (text.length <= max) return text;
	const cut = text.slice(0, max - 1);
	return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

const badgeMonth = new Intl.DateTimeFormat("en-US", {
	timeZone: TZ,
	month: "short",
});
const badgeDay = new Intl.DateTimeFormat("en-US", {
	timeZone: TZ,
	day: "numeric",
});

export function getDateBadge(event: ClubEvent) {
	const d = new Date(event.start);
	return { month: badgeMonth.format(d), day: badgeDay.format(d) };
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
	timeZone: TZ,
	weekday: "short",
	month: "short",
	day: "numeric",
	year: "numeric",
});
const timeParts = new Intl.DateTimeFormat("en-US", {
	timeZone: TZ,
	hour: "numeric",
	minute: "2-digit",
	hour12: true,
});

/** { label: "4:30", period: "PM" }, or null for midnight (legacy "time unknown"). */
function formatTime(iso: string) {
	const parts = timeParts.formatToParts(new Date(iso));
	const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
	const hour = get("hour");
	const minute = get("minute");
	const period = get("dayPeriod").toUpperCase();
	if (hour === "12" && minute === "00" && period === "AM") return null;
	return { label: minute === "00" ? hour : `${hour}:${minute}`, period };
}

/** "Sat, Nov 14, 2026 · 11 AM–4:30 PM" (campus time) */
export function formatEventWhen(event: ClubEvent) {
	const date = dateFormat.format(new Date(event.start));
	const start = formatTime(event.start);
	if (!start) return date;
	const end = event.end ? formatTime(event.end) : null;
	if (!end) return `${date} · ${start.label} ${start.period}`;
	const startText =
		start.period === end.period
			? start.label
			: `${start.label} ${start.period}`;
	return `${date} · ${startText}–${end.label} ${end.period}`;
}
