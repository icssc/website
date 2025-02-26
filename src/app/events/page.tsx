import { EventsPastEvents } from "@/components/events/events-past-events";
import { EventsStayConnected } from "@/components/events/events-stay-connected";
import { EventsUpcomingEvents } from "@/components/events/events-upcoming-events";
import { PageContainer } from "@/components/shared/page-container";

export default function Page() {
	return (
		<PageContainer className="max-w-none px-0 py-16 lg:px-0">
			<EventsUpcomingEvents />
			<EventsPastEvents />
			<EventsStayConnected />
		</PageContainer>
	);
}
