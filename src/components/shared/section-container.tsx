import { cn } from "@/lib/utils";

interface SectionContainerProps {
    className?: string;
    containerClassName?: string;
    children: React.ReactNode;
}

export function SectionContainer({
    className,
    containerClassName,
    children,
}: SectionContainerProps) {
    return (
        <div className={cn("", containerClassName)}>
            <div
                className={cn(
                    "mx-auto max-w-screen-3xl space-y-16 px-8 lg:px-16",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
