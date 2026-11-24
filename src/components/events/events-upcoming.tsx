import { EventCard } from "@/components/events/event-card";
import type { ClubEvent } from "@/components/events/events-types";
import { formatEventWhen } from "@/components/events/events-utils";
import { CalendarIcon, MapPinIcon } from "lucide-react";

interface EventsUpcomingProps {
	events: ClubEvent[];
	onOpen: (event: ClubEvent) => void;
	recapHref: (event: ClubEvent) => string;
}

export function EventsUpcoming({
	events,
	onOpen,
	recapHref,
}: EventsUpcomingProps) {
	return (
		<section className="border-b border-ev-placeholder-light bg-ev-bg-light pb-12 pt-10">
			<div className="ev-container">
				{events.length > 0 ? (
					<>
						<h1 className="ev-eyebrow">Upcoming</h1>
						{/* Poster on the left, details on the right; stacks on mobile */}
						<ul className="mt-5 flex flex-col gap-10">
							{events.map((event) => (
								<li
									key={event.slug}
									className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
								>
									<div className="w-full max-w-[320px] shrink-0">
										<EventCard
											event={event}
											onOpen={onOpen}
											recapHref={recapHref}
											priority
										/>
									</div>
									<div className="space-y-4">
										<h2 className="text-[32px] font-bold leading-tight text-ev-text md:text-[40px]">
											{event.title}
										</h2>
										<div className="flex flex-col gap-2 text-[17px] text-ev-muted">
											<span className="flex items-center gap-2">
												<CalendarIcon className="size-5" aria-hidden />
												{formatEventWhen(event)}
											</span>
											<span className="flex items-center gap-2">
												<MapPinIcon className="size-5" aria-hidden />
												{event.location}
											</span>
										</div>
										<p className="max-w-prose text-pretty text-[17px] text-ev-text">
											{event.description}
										</p>
									</div>
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
