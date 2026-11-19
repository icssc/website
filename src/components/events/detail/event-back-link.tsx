"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const className =
	"inline-flex min-h-11 items-center font-semibold text-ev-accent no-underline hover:underline";

/** "← All events", carrying the quarter filter (?q=) back to /events. */
export function EventBackLink() {
	const q = useSearchParams().get("q");
	return (
		<Link
			href={q ? `/events?q=${encodeURIComponent(q)}` : "/events"}
			className={className}
		>
			← All events
		</Link>
	);
}

/** Server-rendered fallback while search params are unavailable. */
export function EventBackLinkFallback() {
	return (
		<Link href="/events" className={className}>
			← All events
		</Link>
	);
}
