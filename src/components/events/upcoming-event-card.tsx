import Image from "next/image";
import { EVENTS_DATA } from "@/components/events/events-data";
import { DotIcon } from "lucide-react";

export function UpcomingEventCard() {
    const upcomingEvent = EVENTS_DATA.find(
        (item) => Date.now() < new Date(item.time).getTime()
    );

    if (!upcomingEvent) {
        return null;
    }

    return (
        <div className="mx-auto flex w-[75%] flex-col items-center gap-x-8 gap-y-4 text-center md:flex-row md:items-start md:text-start">
            <Image
                src={`/events/${upcomingEvent.src}`}
                alt={upcomingEvent.title}
                width={500}
                height={500}
                className={
                    "aspect-square w-[80%] shrink-0 rounded-md object-contain shadow-md md:w-[300px]"
                }
            />

            <div className="space-y-1">
                <p className="text-3xl font-semibold">{upcomingEvent.title}</p>

                <div className="flex flex-wrap justify-center space-x-1 md:justify-start">
                    <p>{upcomingEvent?.location}</p>

                    <DotIcon />

                    <p>
                        {new Date(upcomingEvent.time).toLocaleTimeString(
                            undefined,
                            {
                                hour: "numeric",
                                minute: "2-digit",
                            }
                        )}
                    </p>

                    <DotIcon />

                    <p>{upcomingEvent.duration ?? "60"} minutes</p>
                </div>

                <p className="text-pretty text-base leading-tight text-ic-muted">
                    {upcomingEvent.description}
                </p>
            </div>
        </div>
    );
}
