import { EVENTS_DATA } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ClockIcon, MapPinIcon } from "lucide-react";

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
                    subtitle="Check out out social medias for updates on upcoming events!"
                    subtitleClassName="pt-8"
                />
            </SectionContainer>
        );
    }

    return (
        <SectionContainer className="flex flex-col justify-center md:items-center">
            <SectionHeading title="Upcoming Events" />

            <div className="w-[1200px] max-w-full space-y-4 rounded-md border p-8 py-12 text-start shadow-md md:py-8">
                <div className="space-y-4">
                    <p className="text-3xl font-semibold leading-none md:text-4xl">
                        {upcomingEvent.title}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-16 md:text-lg">
                        <span className="flex flex-row items-center justify-start gap-x-1">
                            <ClockIcon className="size-4" />

                            {new Date(upcomingEvent.time).toLocaleDateString(
                                undefined,
                                {
                                    month: "long",
                                    day: "numeric",
                                    weekday: "long",
                                    hour: "numeric",
                                    minute: "2-digit",
                                }
                            )}
                        </span>

                        <span className="flex flex-row items-center justify-start gap-x-1">
                            <MapPinIcon className="size-4" />
                            {upcomingEvent?.location}
                        </span>
                    </div>
                </div>

                <p className="max-w-fit text-pretty leading-snug text-ic-muted md:text-lg md:leading-snug">
                    {upcomingEvent.description}
                </p>
            </div>
        </SectionContainer>
    );
}
