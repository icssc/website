import { cn } from "@/lib/utils";
import type React from "react";

interface PageHeadingProps {
	title: string | React.ReactNode;
	subtitle?: string | React.ReactNode;
	containerClassName?: string;
}

export function PageHeading({
	title,
	subtitle,
	containerClassName,
}: PageHeadingProps) {
	return (
		<div className={cn("space-y-2", containerClassName)}>
			<h2 className="text-5xl font-semibold leading-none lg:text-6xl">
				{title}
			</h2>

			<p className="text-pretty text-lg text-ic-muted lg:text-xl">{subtitle}</p>
		</div>
	);
}
