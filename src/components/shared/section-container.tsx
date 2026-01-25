import { cn } from "@/lib/utils";

interface SectionContainerProps {
	id?: string;
	className?: string;
	containerClassName?: string;
	children: React.ReactNode;
}

export function SectionContainer({
	id,
	className,
	containerClassName,
	children,
}: SectionContainerProps) {
	return (
		<section id={id} className={cn("", containerClassName)}>
			<div
				className={cn(
					"mx-auto max-w-screen-3xl space-y-16 px-8 lg:px-16",
					className,
				)}
			>
				{children}
			</div>
		</section>
	);
}
