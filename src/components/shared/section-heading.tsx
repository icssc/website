// import { SectionApplicationDetails } from "@/components/shared/section-application-details";
import { cn } from "@/lib/utils";
import type React from "react";

interface SectionHeadingProps {
	title: string | React.ReactNode;
	subtitle?: string | React.ReactNode;
	details?: string | React.ReactNode;
	containerClassName?: string;
	subtitleClassName?: string;
	detailsClassName?: string;
}

export function SectionHeading({
	title,
	subtitle,
	details: _details,
	containerClassName,
	subtitleClassName,
	detailsClassName: _detailsClassName,
}: SectionHeadingProps) {
	return (
		<div className={cn("space-y-2", containerClassName)}>
			<h2 className="text-4xl font-semibold leading-none lg:text-5xl">
				{title}
			</h2>

			{subtitle ? (
				<p
					className={cn(
						"text-pretty text-lg text-ic-muted lg:text-xl",
						subtitleClassName,
					)}
				>
					{subtitle}
				</p>
			) : null}

			{/* <SectionApplicationDetails
                details={details}
                className={detailsClassName}
            /> */}
		</div>
	);
}
