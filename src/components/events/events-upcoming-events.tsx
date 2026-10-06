import { EventCard } from "@/components/events/event-card";
import type { Event } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function EventsUpcomingEvents({ events }: { events: Event[] }) {
	if (!events.length) {
		return (
			<SectionContainer className="flex flex-col justify-center md:items-center md:text-center">
				<SectionHeading title="No Upcoming Events" />

				{/* This is stolen from SectionHeading */}
				<p className="text-pretty pt-2 text-lg text-ic-muted lg:text-xl">
					<a
						href="#social-media"
						className="text-ic-muted underline hover:opacity-80"
					>
						Check out our social medias
					</a>{" "}
					for updates on upcoming events!
				</p>
			</SectionContainer>
		);
	}

	return (
		<SectionContainer className="flex flex-col">
			<SectionHeading title="Upcoming Events" />

			<div className="flex flex-col items-start gap-y-12">
				{events.map((event) => (
					<EventCard
						key={event.title + event.time}
						{...event}
						aspectRatio={event.aspectRatio}
					/>
				))}
			</div>
		</SectionContainer>
	);
}
