"use client";

import { buttonStyles } from "@/components/events/events-styles";
import type { ClubEvent } from "@/components/events/events-types";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ExternalLinkIcon,
	XIcon,
} from "lucide-react";
import { useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 50;

const iconButton =
	"flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ev-accent";

export function EventGallery({ event }: { event: ClubEvent }) {
	const photos = event.photos ?? [];
	const [index, setIndex] = useState<number | null>(null);
	const lastIndex = useRef(0);
	const triggers = useRef<(HTMLButtonElement | null)[]>([]);
	const touchStartX = useRef<number | null>(null);

	if (photos.length === 0 && !event.albumUrl) return null;

	if (index !== null) lastIndex.current = index;
	const current = photos[lastIndex.current];

	const step = (delta: number) =>
		setIndex((i) =>
			i === null ? i : (i + delta + photos.length) % photos.length,
		);

	const albumButton = event.albumUrl && (
		<a
			href={event.albumUrl}
			target="_blank"
			rel="noopener noreferrer"
			className={buttonStyles.outlineLight}
		>
			Open full album
			<ExternalLinkIcon className="size-4" aria-hidden />
		</a>
	);

	return (
		<section
			id="gallery"
			aria-labelledby="gallery-heading"
			className="scroll-mt-6 bg-ev-bg-light pb-24 pt-14 text-ev-text"
		>
			<div className="ev-container">
				<div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
					<div>
						<h2
							id="gallery-heading"
							className="text-[36px] font-bold leading-none sm:text-[44px]"
						>
							Photos
						</h2>
						<p className="mt-2 text-ev-muted">
							{photos.length > 0
								? "Pulled from the event's Google Photos album."
								: "Photos are in our Google Photos album."}
						</p>
					</div>
					{albumButton}
				</div>

				{photos.length > 0 && (
					<ul className="[column-gap:14px] [columns:3_260px]">
						{photos.map((photo, i) => (
							<li key={photo.src} className="mb-3.5 break-inside-avoid">
								<button
									type="button"
									ref={(el) => {
										triggers.current[i] = el;
									}}
									onClick={() => setIndex(i)}
									className="block w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ev-accent-strong"
								>
									<span className="sr-only">
										Open photo {i + 1} of {photos.length}
									</span>
									{/* biome-ignore lint/nursery/noImgElement: static export */}
									<img
										src={photo.thumb ?? photo.src}
										alt={photo.alt}
										width={photo.width}
										height={photo.height}
										loading={i < 3 ? "eager" : "lazy"}
										decoding="async"
										className="block h-auto w-full bg-ev-placeholder-light"
									/>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>

			{photos.length > 0 && current && (
				<DialogPrimitive.Root
					open={index !== null}
					onOpenChange={(open) => {
						if (!open) setIndex(null);
					}}
				>
					<DialogPrimitive.Portal>
						<DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 [animation-duration:160ms] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
						<DialogPrimitive.Content
							onKeyDown={(e) => {
								if (e.key === "ArrowLeft") step(-1);
								if (e.key === "ArrowRight") step(1);
							}}
							onTouchStart={(e) => {
								touchStartX.current = e.touches[0]?.clientX ?? null;
							}}
							onTouchEnd={(e) => {
								const start = touchStartX.current;
								const end = e.changedTouches[0]?.clientX;
								touchStartX.current = null;
								if (start == null || end == null) return;
								if (end - start > SWIPE_THRESHOLD_PX) step(-1);
								if (start - end > SWIPE_THRESHOLD_PX) step(1);
							}}
							onClick={(e) => {
								// The content fills the screen, so treat clicks on its
								// empty backdrop area like an overlay click.
								if (e.target === e.currentTarget) setIndex(null);
							}}
							onCloseAutoFocus={(e) => {
								e.preventDefault();
								triggers.current[lastIndex.current]?.focus();
							}}
							className="ev-motion fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 outline-none [animation-duration:160ms] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-[.96] data-[state=open]:zoom-in-[.96] sm:px-20"
						>
							<DialogPrimitive.Title className="sr-only">
								{event.title} photos
							</DialogPrimitive.Title>
							<DialogPrimitive.Description className="sr-only">
								Use the left and right arrow keys to move between photos.
							</DialogPrimitive.Description>

							{/* biome-ignore lint/nursery/noImgElement: static export */}
							<img
								key={current.src}
								src={current.src}
								alt={current.alt}
								width={current.width}
								height={current.height}
								className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
							/>

							<p
								aria-live="polite"
								className="text-sm font-semibold text-white"
							>
								{lastIndex.current + 1} / {photos.length}
							</p>

							{photos.length > 1 && (
								<>
									<button
										type="button"
										aria-label="Previous photo"
										onClick={() => step(-1)}
										className={`${iconButton} absolute left-3 top-1/2 -translate-y-1/2 sm:left-6`}
									>
										<ChevronLeftIcon className="size-6" aria-hidden />
									</button>
									<button
										type="button"
										aria-label="Next photo"
										onClick={() => step(1)}
										className={`${iconButton} absolute right-3 top-1/2 -translate-y-1/2 sm:right-6`}
									>
										<ChevronRightIcon className="size-6" aria-hidden />
									</button>
								</>
							)}

							<DialogPrimitive.Close
								aria-label="Close"
								className={`${iconButton} absolute right-3 top-3 sm:right-6 sm:top-6`}
							>
								<XIcon className="size-6" aria-hidden />
							</DialogPrimitive.Close>
						</DialogPrimitive.Content>
					</DialogPrimitive.Portal>
				</DialogPrimitive.Root>
			)}
		</section>
	);
}
