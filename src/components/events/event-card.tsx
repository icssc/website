import { EventPoster } from "@/components/events/event-poster";
import type { ClubEvent } from "@/components/events/events-types";
import { getDateBadge, hasRecap } from "@/components/events/events-utils";
import { ImageIcon } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
	event: ClubEvent;
	/** Used for events without a recap: opens the quick-view modal. */
	onOpen: (event: ClubEvent) => void;
	/** Builds the detail-page link for events with a recap. */
	recapHref: (event: ClubEvent) => string;
	priority?: boolean;
}

const cardClassName =
	"ev-motion group flex h-full w-full flex-col overflow-hidden rounded-card bg-ev-surface-dark text-left text-ev-text-on-dark no-underline transition [transition-duration:180ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,.45)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ev-accent";

/**
 * Events with an album navigate to their detail page (a real link);
 * the rest open the quick-view modal (a button).
 */
export function EventCard({
	event,
	onOpen,
	recapHref,
	priority,
}: EventCardProps) {
	const content = <CardContent event={event} priority={priority} />;

	if (hasRecap(event)) {
		return (
			<Link
				href={recapHref(event)}
				data-event-card={event.slug}
				className={cardClassName}
			>
				{content}
			</Link>
		);
	}

	return (
		<button
			type="button"
			data-event-card={event.slug}
			onClick={() => onOpen(event)}
			className={cardClassName}
		>
			{content}
		</button>
	);
}

function CardContent({
	event,
	priority,
}: {
	event: ClubEvent;
	priority?: boolean;
}) {
	const badge = getDateBadge(event);

	return (
		<>
			<span className="relative block aspect-[4/5] w-full bg-ev-surface-dark-2">
				<EventPoster event={event} priority={priority} />

				<span className="absolute left-3 top-3 flex min-w-[48px] flex-col items-center rounded-pill bg-ev-bg-light px-3 py-2 text-[13px] font-bold uppercase leading-tight text-ev-text shadow-sm">
					<span>{badge.month}</span>
					<span>{badge.day}</span>
				</span>

				{hasRecap(event) && (
					<span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-pill bg-[rgba(20,20,20,.82)] px-3 py-1.5 text-[13px] font-semibold text-ev-text-on-dark">
						<ImageIcon className="size-4" aria-hidden />
						Photos
					</span>
				)}
			</span>

			<span className="block px-[18px] pb-5 pt-4">
				<span className="line-clamp-2 text-xl font-bold leading-tight">
					{event.title}
				</span>
				<span className="mt-1.5 block truncate text-sm text-ev-muted-on-dark">
					{event.location}
				</span>
			</span>
		</>
	);
}
