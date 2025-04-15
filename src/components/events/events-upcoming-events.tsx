"use client";

import { EVENTS_DATA } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

import { EventCard } from "./event-card";

export function EventsUpcomingEvents() {
    const upcomingEvent = EVENTS_DATA.filter(
        (item) => Date.now() < new Date(item.time).getTime()
    )
        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
        .at(0);

    if (!upcomingEvent) {
        return (
            <SectionContainer className="flex flex-col justify-center md:items-center md:text-center">
                <SectionHeading
                    title="No Upcoming Events"
                    subtitle="Check out our social medias for updates on upcoming events!"
                    subtitleClassName="pt-8"
                />
            </SectionContainer>
        );
    }

    return (
        <SectionContainer className="flex flex-col">
            <SectionHeading title="Upcoming Events" />
            <EventCard
                {...upcomingEvent}
                aspectRatio={upcomingEvent.aspectRatio}
            />
        </SectionContainer>
    );
}
