import type { ClubEvent } from "@/components/events/events-types";
import { cn } from "@/lib/utils";

interface EventPosterProps {
	event: ClubEvent;
	/** Eager-load posters that are above the fold. */
	priority?: boolean;
	className?: string;
}

/**
 * Fills its (relatively positioned, sized) parent with the event poster,
 * or with the event title when there is no poster.
 */
export function EventPoster({ event, priority, className }: EventPosterProps) {
	if (!event.poster) {
		return (
			<div
				className={cn(
					"absolute inset-0 flex items-center justify-center bg-ev-surface-dark-2 p-6 text-center text-2xl font-bold text-ev-text-on-dark",
					className,
				)}
			>
				{event.title}
			</div>
		);
	}

	return (
		// biome-ignore lint/nursery/noImgElement: site uses static export with unoptimized images
		<img
			src={event.poster.src}
			alt={event.poster.alt}
			loading={priority ? "eager" : "lazy"}
			decoding="async"
			className={cn(
				"absolute inset-0 h-full w-full bg-ev-surface-dark-2 object-cover object-top",
				className,
			)}
		/>
	);
}
