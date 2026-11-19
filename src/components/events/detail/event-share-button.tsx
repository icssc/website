"use client";

import { buttonStyles } from "@/components/events/events-styles";
import { Share2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function EventShareButton({ title }: { title: string }) {
	const [message, setMessage] = useState("");
	const timer = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => () => clearTimeout(timer.current), []);

	const flash = (text: string) => {
		setMessage(text);
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setMessage(""), 2500);
	};

	const handleShare = async () => {
		const url = `${window.location.origin}${window.location.pathname}`;

		if (typeof navigator.share === "function") {
			try {
				await navigator.share({ title, url });
			} catch {
				// User dismissed the share sheet — nothing to do.
			}
			return;
		}

		try {
			await navigator.clipboard.writeText(url);
			flash("Link copied");
		} catch {
			flash("Couldn't copy the link");
		}
	};

	return (
		<>
			<button
				type="button"
				onClick={handleShare}
				className={buttonStyles.outlineDark}
			>
				<Share2Icon className="size-4" aria-hidden />
				Share event
			</button>

			{/* Live region is always mounted so screen readers announce changes */}
			<output
				aria-live="polite"
				className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
			>
				{message && (
					<span className="block rounded-pill bg-ev-text-on-dark px-4 py-2 text-sm font-semibold text-ev-bg-dark shadow-lg">
						{message}
					</span>
				)}
			</output>
		</>
	);
}
