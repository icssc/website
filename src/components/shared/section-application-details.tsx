import { cn } from "@/lib/utils";
import type React from "react";

interface SectionApplicationDetailsProps {
	details: string | React.ReactNode;
	className?: string;
}

export function SectionApplicationDetails({
	details,
	className,
}: SectionApplicationDetailsProps) {
	if (!details) {
		return null;
	}

	return (
		<p
			className={cn(
				"text-pretty py-4 font-semibold leading-tight text-ic-muted lg:text-xl",
				className,
			)}
		>
			{details}
		</p>
	);
}
