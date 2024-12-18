import { cn } from "@/lib/utils";

export function Events() {
    return (
        <div
            className={cn(
                "flex w-full flex-col items-start gap-y-8",
                "px-8 lg:px-16"
            )}
        >
            <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                Our Events
            </h2>
        </div>
    );
}
