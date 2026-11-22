import {
	EventBackLink,
	EventBackLinkFallback,
} from "@/components/events/detail/event-back-link";
// import { EventGallery } from "@/components/events/detail/event-gallery";
import { EventShareButton } from "@/components/events/detail/event-share-button";
import { EventStatusPill } from "@/components/events/detail/event-status-pill";
import { EventPoster } from "@/components/events/event-poster";
// import { buttonStyles } from "@/components/events/events-styles";
import type { ClubEvent } from "@/components/events/events-types";
import { formatEventWhen } from "@/components/events/events-utils";
// import { hasRecap } from "@/components/events/events-utils";
import Link from "next/link";
import { Suspense } from "react";

interface EventDetailProps {
	event: ClubEvent;
	prev?: ClubEvent;
	next?: ClubEvent;
}

export function EventDetail({ event, prev, next }: EventDetailProps) {
	return (
		<>
			<section className="bg-ev-bg-dark pb-14 pt-8 text-ev-text-on-dark">
				<div className="ev-container">
					<Suspense fallback={<EventBackLinkFallback />}>
						<EventBackLink />
					</Suspense>

					<div className="mt-6 flex flex-wrap items-start gap-10">
						<div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-card bg-ev-surface-dark-2 sm:w-[340px]">
							<EventPoster event={event} priority />
						</div>

						<div className="min-w-[min(100%,360px)] flex-1">
							<EventStatusPill event={event} />

							<h1 className="mt-4 text-balance text-[40px] font-extrabold leading-none sm:text-[60px]">
								{event.title}
							</h1>

							<dl className="mt-8 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
								<InfoTile label="When" value={formatEventWhen(event)} />
								<InfoTile label="Where" value={event.location} />
							</dl>

							<p className="mt-8 max-w-[640px] whitespace-pre-line text-[17px]">
								{event.description}
							</p>

							<div className="mt-8 flex flex-wrap gap-3">
								{/* Photos temporarily hidden — restore with <EventGallery> below.
								{hasRecap(event) && (
									<a href="#gallery" className={buttonStyles.accentFilled}>
										See photos
									</a>
								)}
								*/}
								<EventShareButton title={event.title} />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Photo grid + "Open full album" link temporarily hidden.
			<EventGallery event={event} />
			*/}

			<nav
				aria-label="More events"
				className="border-t border-ev-placeholder-light bg-ev-bg-light"
			>
				<div className="ev-container flex flex-wrap justify-between gap-6 py-10">
					{prev ? <AdjacentLink event={prev} direction="prev" /> : <span />}
					{next && <AdjacentLink event={next} direction="next" />}
				</div>
			</nav>
		</>
	);
}

function InfoTile({ label, value }: { label: string; value: string }) {
	return (
		<div className="rounded-card bg-ev-surface-dark px-5 py-4">
			<dt className="text-xs font-bold uppercase tracking-[0.08em] text-ev-muted-on-dark">
				{label}
			</dt>
			<dd className="mt-1.5 text-[17px] font-semibold">{value}</dd>
		</div>
	);
}

function AdjacentLink({
	event,
	direction,
}: {
	event: ClubEvent;
	direction: "prev" | "next";
}) {
	const isPrev = direction === "prev";
	return (
		<Link
			href={`/events/${event.slug}`}
			className={`group flex min-h-11 max-w-[45ch] flex-col no-underline ${isPrev ? "items-start" : "ml-auto items-end text-right"}`}
		>
			<span className="text-xs font-bold uppercase tracking-[0.08em] text-ev-muted">
				{isPrev ? "Previous event" : "Next event"}
			</span>
			<span className="mt-1 font-semibold text-ev-accent-strong group-hover:underline">
				{isPrev ? `← ${event.title}` : `${event.title} →`}
			</span>
		</Link>
	);
}
