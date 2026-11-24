import { Info } from "lucide-react";

export function ApplicationsClosedBanner() {
	return (
		<aside
			aria-label="Application status"
			className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-100 p-5 md:items-center md:p-6"
		>
			<Info
				aria-hidden
				className="mt-0.5 size-7 shrink-0 text-ic-pink md:mt-0"
			/>
			<div className="space-y-1">
				<p className="text-xl font-semibold md:text-2xl">
					Applications for Bits &amp; Bytes are currently closed.
				</p>
				<p className="text-pretty md:text-lg">
					Applications open annually during fall quarter. Bits interested in
					joining the waitlist can email{" "}
					<a
						href="mailto:icssc@uci.edu"
						className="font-semibold underline underline-offset-4 transition-colors hover:text-ic-pink"
					>
						icssc@uci.edu
					</a>
					.
				</p>
			</div>
		</aside>
	);
}
