import { PastEvents } from "@/components/events/past-events";
import { UpcomingEvent } from "@/components/events/upcoming-event";
import { PageContainer } from "@/components/shared/page-container";

export default function Page() {
    return (
        <PageContainer className="pt-32">
            <UpcomingEvent />

            <PastEvents />
        </PageContainer>
    );
}
