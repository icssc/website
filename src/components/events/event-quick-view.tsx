"use client";

import { EventPoster } from "@/components/events/event-poster";
import { buttonStyles } from "@/components/events/events-styles";
import type { ClubEvent } from "@/components/events/events-types";
import { formatEventWhen, hasPhotos } from "@/components/events/events-utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ExternalLinkIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface EventQuickViewProps {
	/** The open event, or undefined when closed. */
	event: ClubEvent | undefined;
	onClose: () => void;
	/** Builds the detail-page link (so it can carry the current ?q=). */
	recapHref: (event: ClubEvent) => string;
}

export function EventQuickView({
	event,
	onClose,
	recapHref,
}: EventQuickViewProps) {
	// Keep rendering the last event while the close animation plays.
	const lastEvent = useRef(event);
	if (event) lastEvent.current = event;
	const shown = event ?? lastEvent.current;

	return (
		<DialogPrimitive.Root
			open={Boolean(event)}
			onOpenChange={(open) => {
				if (!open) onClose();
			}}
		>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/[.72] p-3 [animation-duration:160ms] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:p-6">
					{shown && (
						<DialogPrimitive.Content
							onCloseAutoFocus={(e) => {
								// Return focus to the card that opened the dialog (also
								// works when the dialog was opened from a ?event= link).
								e.preventDefault();
								document
									.querySelector<HTMLElement>(
										`[data-event-card="${CSS.escape(shown.slug)}"]`,
									)
									?.focus();
							}}
							className="ev-motion relative flex max-h-[90vh] w-full max-w-[920px] flex-wrap overflow-y-auto rounded-2xl bg-ev-bg-light text-ev-text shadow-2xl [animation-duration:160ms] ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-[.96] data-[state=open]:zoom-in-[.96]"
						>
							<QuickViewBody event={shown} recapHref={recapHref(shown)} />

							<DialogPrimitive.Close
								aria-label="Close"
								className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/90 text-ev-text shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ev-accent-strong"
							>
								<XIcon className="size-5" aria-hidden />
							</DialogPrimitive.Close>
						</DialogPrimitive.Content>
					)}
				</DialogPrimitive.Overlay>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
}

function QuickViewBody({
	event,
	recapHref,
}: {
	event: ClubEvent;
	recapHref: string;
}) {
	const thumbs = event.photos?.slice(0, 3) ?? [];
	const moreHref =
		event.albumUrl ?? (hasPhotos(event) ? `${recapHref}#gallery` : undefined);

	return (
		<>
			<div className="relative max-h-[50vh] min-h-[min(320px,50vh)] flex-[1_1_280px] overflow-hidden bg-ev-surface-dark-2 sm:max-h-none">
				<EventPoster event={event} priority />
			</div>

			<div className="flex flex-[1_1_360px] flex-col p-6 sm:p-8">
				<p className="pr-12 text-sm font-semibold text-ev-accent-strong">
					{formatEventWhen(event)}
				</p>
				<DialogPrimitive.Title className="mt-2 pr-12 text-[30px] font-bold leading-tight">
					{event.title}
				</DialogPrimitive.Title>
				<p className="mt-1 text-[15px] text-ev-muted">{event.location}</p>

				<DialogPrimitive.Description className="mt-4 line-clamp-6 whitespace-pre-line text-base leading-[1.55]">
					{event.description}
				</DialogPrimitive.Description>

				{(thumbs.length > 0 || event.albumUrl) && (
					<div className="mt-6">
						<p className="text-xs font-bold uppercase tracking-[0.08em] text-ev-muted">
							From the album
						</p>
						<ul className="mt-2 grid grid-cols-4 gap-2">
							{thumbs.map((photo) => (
								<li key={photo.src}>
									{/* biome-ignore lint/nursery/noImgElement: static export */}
									<img
										src={photo.thumb ?? photo.src}
										alt={photo.alt}
										width={photo.width}
										height={photo.height}
										loading="lazy"
										className="aspect-square w-full rounded-lg bg-ev-placeholder-light object-cover"
									/>
								</li>
							))}
							{moreHref && (
								<li>
									<a
										href={moreHref}
										{...(event.albumUrl
											? { target: "_blank", rel: "noopener noreferrer" }
											: {})}
										className="flex aspect-square items-center justify-center rounded-lg bg-ev-text text-sm font-semibold text-ev-bg-light no-underline transition-colors hover:bg-black focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ev-accent-strong"
									>
										+ more
										<span className="sr-only">
											{event.albumUrl
												? " photos (opens Google Photos)"
												: " photos"}
										</span>
									</a>
								</li>
							)}
						</ul>
					</div>
				)}

				<div className="mt-auto flex flex-wrap gap-3 pt-6">
					<Link href={recapHref} className={buttonStyles.darkFilled}>
						Full recap
					</Link>
					{event.albumUrl && (
						<a
							href={event.albumUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={buttonStyles.outlineLight}
						>
							<ExternalLinkIcon className="size-4" aria-hidden />
							Open Google Photos album
						</a>
					)}
				</div>
			</div>
		</>
	);
}
