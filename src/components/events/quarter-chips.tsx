import { cn } from "@/lib/utils";

export const ALL_QUARTERS = "All";

interface QuarterChipsProps {
	quarters: string[];
	selected: string;
	onSelect: (quarter: string) => void;
}

export function QuarterChips({
	quarters,
	selected,
	onSelect,
}: QuarterChipsProps) {
	return (
		<fieldset className="flex flex-wrap gap-2.5">
			<legend className="sr-only">Filter by quarter</legend>
			{[ALL_QUARTERS, ...quarters].map((quarter) => {
				const isSelected = quarter === selected;
				return (
					<button
						key={quarter}
						type="button"
						aria-pressed={isSelected}
						onClick={() => onSelect(quarter)}
						className={cn(
							"inline-flex min-h-11 items-center rounded-pill border px-[18px] text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ev-accent",
							isSelected
								? "border-ev-accent bg-ev-accent text-ev-bg-dark"
								: "border-ev-border-dark bg-transparent text-[#e6e6e6] hover:border-[#888]",
						)}
					>
						{quarter}
					</button>
				);
			})}
		</fieldset>
	);
}
