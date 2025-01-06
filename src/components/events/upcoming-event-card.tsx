import Image from "next/image";
import { EVENTS_DATA } from "@/components/events/events-data";
import { Separator } from "@/components/ui/separator";
import { ClockIcon, DotIcon, MapPinIcon } from "lucide-react";

export function UpcomingEventCard() {
    const upcomingEvent = EVENTS_DATA.filter(
        (item) => Date.now() < new Date(item.time).getTime()
    )
        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
        .at(0);

    if (!upcomingEvent) {
        return null;
    }

    return (
        <div className="md mx-auto flex max-w-[1200px] flex-col">
            <div className="flex flex-col items-center justify-center gap-x-8 gap-y-4 p-8 text-center lg:flex-row lg:items-start lg:text-start">
                <Image
                    src={`/events/${upcomingEvent.src}`}
                    alt={upcomingEvent.title}
                    width={500}
                    height={500}
                    className={
                        "aspect-square w-[80%] max-w-[300px] shrink-0 rounded-md object-contain shadow-md lg:w-[300px]"
                    }
                />
                <div className="space-y-1">
                    <p className="text-2xl font-semibold lg:text-start lg:text-3xl">
                        {upcomingEvent.title}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-1 text-lg lg:justify-start">
                        <span className="flex flex-row items-center gap-x-1">
                            <ClockIcon className="aspect-square size-4" />
                            {new Date(upcomingEvent.time).toLocaleDateString(
                                undefined,
                                {
                                    month: "long",
                                    day: "numeric",
                                    weekday: "long",
                                    hour: "numeric",
                                    minute: "2-digit",
                                }
                            )}
                        </span>

                        <DotIcon />

                        <span className="flex flex-row items-center gap-x-1">
                            <MapPinIcon className="aspect-square size-4" />
                            {upcomingEvent?.location}
                        </span>
                    </div>
                    <p className="max-w-fit text-balance text-lg leading-tight text-ic-muted">
                        {upcomingEvent.description}
                    </p>
                </div>
            </div>

            <Separator className="bg-ic-muted/20" />
        </div>
    );
}
