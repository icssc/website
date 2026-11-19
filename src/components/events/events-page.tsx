"use client";

import { EventCard } from "@/components/events/event-card";
import { EventQuickView } from "@/components/events/event-quick-view";
import type { ClubEvent } from "@/components/events/events-types";
import { EventsUpcoming } from "@/components/events/events-upcoming";
import {
	getEventBySlug,
	getPastEvents,
	getQuarters,
	getUpcomingEvents,
	quarterToParam,
} from "@/components/events/events-utils";
import { ALL_QUARTERS, QuarterChips } from "@/components/events/quarter-chips";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/** `?q=all` shows every quarter; no `?q` means "most recent quarter". */
const ALL_PARAM = "all";

/**
 * Shallow URL update. Next 14.1+ syncs native history calls with
 * useSearchParams, so this re-renders without a navigation or fetch.
 */
function setSearchParams(
	pathname: string,
	updates: Record<string, string | null>,
	mode: "push" | "replace",
) {
	const params = new URLSearchParams(window.location.search);
	for (const [key, value] of Object.entries(updates)) {
		if (value === null) params.delete(key);
		else params.set(key, value);
	}
	const qs = params.toString();
	const url = `${pathname}${qs ? `?${qs}` : ""}`;
	if (mode === "push") window.history.pushState(null, "", url);
	else window.history.replaceState(null, "", url);
}

export function EventsPage() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const qParam = searchParams.get("q");
	const eventParam = searchParams.get("event");

	// Upcoming/past depends on the viewer's clock, not build time.
	const [now, setNow] = useState<number | null>(null);
	useEffect(() => setNow(Date.now()), []);

	// Whether the open modal was pushed onto history by a click here (vs. a
	// deep link), so closing can pop that entry instead of adding another.
	const openedHere = useRef(false);

	if (now === null) {
		return <div className="min-h-[100svh]" aria-busy="true" />;
	}

	const upcoming = getUpcomingEvents(now);
	const past = getPastEvents(now);
	const quarters = getQuarters(past);

	const selected =
		qParam === ALL_PARAM
			? ALL_QUARTERS
			: (quarters.find((q) => quarterToParam(q) === qParam) ??
				quarters[0] ??
				ALL_QUARTERS);
	const filtered =
		selected === ALL_QUARTERS
			? past
			: past.filter((e) => e.quarter === selected);

	const openEvent = eventParam ? getEventBySlug(eventParam) : undefined;

	const handleSelectQuarter = (quarter: string) => {
		setSearchParams(
			pathname,
			{ q: quarter === ALL_QUARTERS ? ALL_PARAM : quarterToParam(quarter) },
			"replace",
		);
	};

	const handleOpen = (event: ClubEvent) => {
		openedHere.current = true;
		setSearchParams(pathname, { event: event.slug }, "push");
	};

	const handleClose = () => {
		if (openedHere.current) {
			openedHere.current = false;
			window.history.back();
		} else {
			setSearchParams(pathname, { event: null }, "replace");
		}
	};

	const recapHref = (event: ClubEvent) =>
		`/events/${event.slug}${qParam ? `?q=${encodeURIComponent(qParam)}` : ""}`;

	return (
		<>
			<EventsUpcoming events={upcoming} onOpen={handleOpen} />

			<section
				aria-labelledby="past-events-heading"
				className="bg-ev-bg-dark pb-20 pt-14 text-ev-text-on-dark"
			>
				<div className="ev-container">
					<div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
						<h2
							id="past-events-heading"
							className="text-[36px] font-bold leading-none sm:text-[44px]"
						>
							Past events
						</h2>
						<QuarterChips
							quarters={quarters}
							selected={selected}
							onSelect={handleSelectQuarter}
						/>
					</div>

					{filtered.length > 0 ? (
						<ul className="grid gap-[var(--space-grid-gap)] [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
							{filtered.map((event, i) => (
								<li key={event.slug}>
									<EventCard
										event={event}
										onOpen={handleOpen}
										priority={i < 4}
									/>
								</li>
							))}
						</ul>
					) : (
						<p className="py-16 text-center text-ev-muted-on-dark">
							No events this quarter.
						</p>
					)}
				</div>
			</section>

			<EventQuickView
				event={openEvent}
				onClose={handleClose}
				recapHref={recapHref}
			/>
		</>
	);
}
