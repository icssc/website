import { EventsPage } from "@/components/events/events-page";
import { EventsStayConnected } from "@/components/events/events-stay-connected";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Events · ICS Student Council",
	description:
		"Upcoming and past ICS Student Council events: socials, workshops, panels, and more.",
};

export default function Page() {
	return (
		<>
			{/* useSearchParams (?q=, ?event=) requires a Suspense boundary in static export */}
			<Suspense fallback={<div className="min-h-[100svh]" aria-busy="true" />}>
				<EventsPage />
			</Suspense>
			<div className="pt-24">
				<EventsStayConnected />
			</div>
		</>
	);
}
