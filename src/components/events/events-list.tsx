"use client";

import {
	getPastEvents,
	getUpcomingEvents,
} from "@/components/events/events-data";
import { EventsPastEvents } from "@/components/events/events-past-events";
import { EventsUpcomingEvents } from "@/components/events/events-upcoming-events";
import { useEffect, useState } from "react";

export function EventsList() {
	const [now, setNow] = useState<number | null>(null);

	useEffect(() => {
		setNow(Date.now());
	}, []);

	if (now === null) {
		return <div className="min-h-[100svh]" aria-busy="true" />;
	}

	return (
		<>
			<EventsUpcomingEvents events={getUpcomingEvents(now)} />
			<EventsPastEvents events={getPastEvents(now)} />
		</>
	);
}
