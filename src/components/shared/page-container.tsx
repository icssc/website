import { cn } from "@/lib/utils";

interface PageContainerProps {
    className?: string;
    children: React.ReactNode;
}

export function PageContainer({ className, children }: PageContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto max-w-screen-3xl space-y-16 px-8 py-8 lg:px-16",
                className
            )}
        >
            {children}
        </div>
    );
}
