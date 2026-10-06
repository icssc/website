import { EventsList } from "@/components/events/events-list";
import { EventsStayConnected } from "@/components/events/events-stay-connected";
import { PageContainer } from "@/components/shared/page-container";

export default function Page() {
	return (
		<PageContainer className="max-w-none px-0 py-16 lg:px-0">
			<EventsList />
			<EventsStayConnected />
		</PageContainer>
	);
}
