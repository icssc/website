import { cn } from "@/lib/utils";

interface SectionContainerProps {
    className?: string;
    children: React.ReactNode;
}

export function SectionContainer({
    className,
    children,
}: SectionContainerProps) {
    return (
        <div className={cn("space-y-16 px-8 lg:px-16", className)}>
            {children}
        </div>
    );
}
