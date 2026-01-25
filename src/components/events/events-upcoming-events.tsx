"use client";

import { EventCard } from "@/components/events/event-card";
import { EVENTS_DATA } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function EventsUpcomingEvents() {
	const upcomingEvents = EVENTS_DATA.filter(
		(item) => Date.now() < new Date(item.time).getTime(),
	).sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

	if (!upcomingEvents.length) {
		return (
			<SectionContainer className="flex flex-col justify-center md:items-center md:text-center">
				<SectionHeading
					title="No Upcoming Events"
					// subtitle="Check out our social medias for updates on upcoming events!"
					// subtitleClassName="pt-8"
				/>

				{/* This is stolen from SectionHeading */}
				<p className="text-pretty pt-2 text-lg leading-tight text-ic-muted lg:text-xl">
					<a
						href="#social-media"
						className="scroll-smooth text-ic-muted underline hover:opacity-80"
						// this is probably jank
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("social-media")
								?.scrollIntoView({ behavior: "smooth" });
						}}
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
				{upcomingEvents.map((event) => (
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
