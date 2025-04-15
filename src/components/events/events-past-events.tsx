"use client";

import { useState } from "react";
import { EVENTS_DATA } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

import { EventCard } from "./event-card";

function formatRelativeTime(date: Date) {
    const now = Date.now();
    const diffMs = now - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0)
        return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    if (diffMonths > 0)
        return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    if (diffHours > 0)
        return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffMinutes > 0)
        return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    return `${diffSeconds} second${diffSeconds > 1 ? "s" : ""} ago`;
}

export function EventsPastEvents() {
    const [displayCount, setDisplayCount] = useState(3);

    const pastEvents = EVENTS_DATA.filter(
        (item) => Date.now() > new Date(item.time).getTime()
    );

    const displayEvents = pastEvents.slice(0, displayCount);

    const handleShowMore = () => {
        setDisplayCount(Math.min(displayCount + 5, pastEvents.length));
    };

    return (
        <SectionContainer
            className="flex flex-col py-16 text-ic-white md:items-center md:text-center"
            containerClassName="bg-ic-black"
        >
            <SectionHeading title="Past Events" />

            <div className="flex flex-col items-start gap-y-12">
                {displayEvents.map((event) => (
                    <EventCard
                        key={event.title + event.time}
                        {...event}
                        aspectRatio={event.aspectRatio}
                        timeFormat={formatRelativeTime}
                        isDarkMode={true}
                    />
                ))}
            </div>

            {displayCount < pastEvents.length && (
                <div className="mt-8 flex items-center justify-center gap-4 text-xl text-ic-white">
                    <Button
                        variant="link"
                        className="text-xl text-ic-white underline"
                        onClick={handleShowMore}
                    >
                        Show More
                    </Button>
                    <Button
                        variant="link"
                        className="text-xl text-ic-white underline"
                        onClick={() => setDisplayCount(pastEvents.length)}
                    >
                        Show All
                    </Button>
                </div>
            )}
        </SectionContainer>
    );
}
