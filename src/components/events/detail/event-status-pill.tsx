"use client";

import type { ClubEvent } from "@/components/events/events-types";
import { isUpcoming } from "@/components/events/events-utils";
import { useEffect, useState } from "react";

/** "Past event · Fall 2026" / "Upcoming · Fall 2026", decided on the viewer's clock. */
export function EventStatusPill({ event }: { event: ClubEvent }) {
	const [status, setStatus] = useState<string | null>(null);

	useEffect(() => {
		setStatus(isUpcoming(event, Date.now()) ? "Upcoming" : "Past event");
	}, [event]);

	return (
		<span className="inline-flex min-h-8 items-center rounded-pill bg-ev-surface-dark-2 px-3.5 text-sm font-semibold text-ev-text-on-dark">
			{status ? `${status} · ${event.quarter}` : event.quarter}
		</span>
	);
}
