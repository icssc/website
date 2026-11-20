"use client";

import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export const ALL_QUARTERS = "All";

/** How many of the most recent quarters show before "+ more". */
const COLLAPSED_COUNT = 3;

const chipBase =
	"inline-flex min-h-11 items-center gap-1.5 rounded-pill border px-[18px] text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ev-accent";
const chipIdle =
	"border-ev-border-dark bg-transparent text-[#e6e6e6] hover:border-[#888]";

interface QuarterChipsProps {
	/** Newest first */
	quarters: string[];
	selected: string;
	onSelect: (quarter: string) => void;
}

export function QuarterChips({
	quarters,
	selected,
	onSelect,
}: QuarterChipsProps) {
	const [expanded, setExpanded] = useState(false);

	// Collapsed: the newest quarters, plus the selected one if it's older
	// (e.g. from a ?q=fall-2022 link) so the active filter is never hidden.
	const visible = expanded
		? quarters
		: quarters.filter((q, i) => i < COLLAPSED_COUNT || q === selected);
	const hiddenCount = quarters.length - visible.length;
	const canToggle = quarters.length > COLLAPSED_COUNT;

	return (
		<fieldset className="flex flex-wrap gap-2.5">
			<legend className="sr-only">Filter by quarter</legend>
			{[ALL_QUARTERS, ...visible].map((quarter) => {
				const isSelected = quarter === selected;
				return (
					<button
						key={quarter}
						type="button"
						aria-pressed={isSelected}
						onClick={() => onSelect(quarter)}
						className={cn(
							chipBase,
							isSelected
								? "border-ev-accent bg-ev-accent text-ev-bg-dark"
								: chipIdle,
						)}
					>
						{quarter}
					</button>
				);
			})}

			{canToggle && (expanded || hiddenCount > 0) && (
				<button
					type="button"
					aria-expanded={expanded}
					onClick={() => setExpanded((e) => !e)}
					className={cn(chipBase, chipIdle, "border-dashed")}
				>
					{expanded ? (
						<>
							<MinusIcon className="size-4" aria-hidden />
							Fewer
						</>
					) : (
						<>
							<PlusIcon className="size-4" aria-hidden />
							{hiddenCount} more
							<span className="sr-only"> quarters</span>
						</>
					)}
				</button>
			)}
		</fieldset>
	);
}
