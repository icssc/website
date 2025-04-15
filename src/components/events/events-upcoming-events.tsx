"use client";

import Link from "next/link";
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
                    // subtitle="Check out our social medias for updates on upcoming events!"
                    // subtitleClassName="pt-8"
                />

                {/* This is stolen from SectionHeading */}
                <p className="text-pretty pt-2 text-lg leading-tight text-ic-muted lg:text-xl">
                    <Link
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
                    </Link>{" "}
                    for updates on upcoming events!
                </p>
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
