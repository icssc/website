import { UpcomingEventCard } from "@/components/events/upcoming-event-card";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function UpcomingEvent() {
    return (
        <SectionContainer className="space-y-8 px-0">
            <SectionHeading
                title="Upcoming Events"
                containerClassName="text-center"
            />

            <UpcomingEventCard />
        </SectionContainer>
    );
}
