import { EventPoster } from "@/components/events/event-poster";
import type { ClubEvent } from "@/components/events/events-types";
import { getDateBadge, hasPhotos } from "@/components/events/events-utils";
import { ImageIcon } from "lucide-react";

interface EventCardProps {
	event: ClubEvent;
	onOpen: (event: ClubEvent) => void;
	priority?: boolean;
}

export function EventCard({ event, onOpen, priority }: EventCardProps) {
	const badge = getDateBadge(event);
	const showPhotos = hasPhotos(event) || Boolean(event.albumUrl);

	return (
		<button
			type="button"
			data-event-card={event.slug}
			onClick={() => onOpen(event)}
			className="ev-motion group flex h-full w-full flex-col overflow-hidden rounded-card bg-ev-surface-dark text-left text-ev-text-on-dark transition [transition-duration:180ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,.45)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ev-accent"
		>
			<span className="relative block aspect-[4/5] w-full bg-ev-surface-dark-2">
				<EventPoster event={event} priority={priority} />

				<span className="absolute left-3 top-3 flex min-w-[48px] flex-col items-center rounded-pill bg-ev-bg-light px-3 py-2 text-[13px] font-bold uppercase leading-tight text-ev-text shadow-sm">
					<span>{badge.month}</span>
					<span>{badge.day}</span>
				</span>

				{showPhotos && (
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
		</button>
	);
}
