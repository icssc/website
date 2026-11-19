import { EventCard } from "@/components/events/event-card";
import type { ClubEvent } from "@/components/events/events-types";

interface EventsUpcomingProps {
	events: ClubEvent[];
	onOpen: (event: ClubEvent) => void;
}

export function EventsUpcoming({ events, onOpen }: EventsUpcomingProps) {
	return (
		<section className="border-b border-ev-placeholder-light bg-ev-bg-light pb-12 pt-10">
			<div className="ev-container">
				{events.length > 0 ? (
					<>
						<h1 className="ev-eyebrow">Upcoming</h1>
						{/* Up to 3 per row; extra events scroll horizontally */}
						<ul className="mt-5 grid auto-cols-[minmax(260px,calc((100%_-_56px)_/_3))] grid-flow-col gap-[var(--space-grid-gap)] overflow-x-auto pb-3 pt-1">
							{events.map((event) => (
								<li key={event.slug}>
									<EventCard event={event} onOpen={onOpen} priority />
								</li>
							))}
						</ul>
					</>
				) : (
					<>
						<p className="ev-eyebrow">Upcoming</p>
						<h1 className="mt-2 text-[36px] font-bold leading-tight text-ev-text">
							No upcoming events right now
						</h1>
						<p className="mt-3 text-[17px] text-ev-muted">
							<a
								href="#social-media"
								className="font-semibold text-ev-accent-strong hover:opacity-80"
							>
								Follow our socials
							</a>{" "}
							to hear about the next one first.
						</p>
					</>
				)}
			</div>
		</section>
	);
}
