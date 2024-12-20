import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function EventTimeline() {
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

            <div className="w-full space-y-4">
                <div className="text-2xl">Upcoming Events</div>
                <div className="h-48 w-full rounded-md bg-blue-500"></div>
            </div>

            <Separator className="mx-auto w-3/4 bg-neutral-300" />

            <div></div>
        </div>
    );
}
