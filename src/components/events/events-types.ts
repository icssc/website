export type EventPhoto = {
	src: string;
	thumb?: string;
	alt: string;
	width: number;
	height: number;
};

export type ClubEvent = {
	/** URL-safe, unique, e.g. "brain-games-fall-2026" */
	slug: string;
	title: string;
	/** ISO with offset, e.g. "2026-11-14T11:00:00-08:00" */
	start: string;
	end?: string;
	location: string;
	/** e.g. "Fall 2026" — drives the filter chips */
	quarter: string;
	description: string;
	/** ≤160 chars for card/modal/meta; falls back to a truncated description */
	summary?: string;
	poster?: { src: string; alt: string };
	/** Public Google Photos share link */
	albumUrl?: string;
	/** Curated, ordered; the first 3 show in the quick-view modal */
	photos?: EventPhoto[];
};
