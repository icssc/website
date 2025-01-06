import Image from "next/image";
import { EVENTS_DATA } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function PastEvents() {
    return (
        <SectionContainer className="space-y-8 px-0 lg:px-0">
            <SectionHeading
                title="Past Events"
                containerClassName="text-center"
            />

            <div
                className={cn(
                    "grid gap-6",
                    "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                )}
            >
                {EVENTS_DATA.filter(
                    (item) => Date.now() > new Date(item.time).getTime()
                ).map((item) => {
                    return (
                        <Dialog>
                            <DialogTrigger asChild>
                                <div
                                    key={item.title + item.time}
                                    className="mb-auto cursor-pointer space-y-2 rounded-md border p-4 text-start shadow-md"
                                >
                                    <div className="space-y-1">
                                        <p className="text-xl font-semibold">
                                            {item.title}
                                        </p>

                                        <div
                                            className={cn(
                                                "text-pretty text-base leading-tight text-ic-muted"
                                            )}
                                        >
                                            {item.description}
                                        </div>
                                    </div>

                                    <p className="font-medium text-ic-muted">
                                        {formatRelativeTime(
                                            new Date(item.time)
                                        )}
                                    </p>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader className="hidden">
                                    <DialogTitle>
                                        Graphics Image for {item.title}
                                    </DialogTitle>
                                    <DialogDescription>
                                        Graphics Image for {item.title}
                                    </DialogDescription>
                                </DialogHeader>

                                <Image
                                    src={`/events/${item.src}`}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className={
                                        "aspect-square w-[500px] rounded-md object-contain shadow-md"
                                    }
                                />
                            </DialogContent>
                        </Dialog>
                    );
                })}
            </div>
        </SectionContainer>
    );
}

function formatRelativeTime(date: Date) {
    const now = Date.now();
    const diffMs = now - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0)
        return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    if (diffMonths > 0)
        return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    if (diffHours > 0)
        return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffMinutes > 0)
        return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    return `${diffSeconds} second${diffSeconds > 1 ? "s" : ""} ago`;
}
