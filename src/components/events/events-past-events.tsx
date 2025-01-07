import { EVENTS_DATA } from "@/components/events/events-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function EventsPastEvents() {
    return (
        <SectionContainer className="flex flex-col bg-ic-black py-16 text-ic-white md:items-center md:text-center">
            <SectionHeading title="Past Events" />

            {/* <div className="flex max-w-full flex-col items-start gap-y-8">
                {EVENTS_DATA.filter(
                    (item) => Date.now() > new Date(item.time).getTime()
                )
                    .slice(0, 4)
                    .map((item) => (
                        <div
                            key={item.title + item.time}
                            className="border-ic-muted-dark/20 w-[1000px] max-w-full space-y-4 border-l-2 px-4 text-start"
                        >
                            <div className="space-y-2">
                                <p className="text-2xl font-semibold">
                                    {item.title}
                                </p>

                                <p className="text-ic-muted-dark line-clamp-6 text-pretty text-base leading-tight">
                                    {item.description}
                                </p>
                            </div>

                            <p className="text-ic-muted-dark font-medium">
                                {formatRelativeTime(new Date(item.time))}
                            </p>
                        </div>
                    ))}
            </div> */}

            <div className="flex max-w-full flex-col items-start gap-y-8">
                {EVENTS_DATA.filter(
                    (item) => Date.now() > new Date(item.time).getTime()
                )
                    .slice(0, 4)
                    .map((item) => (
                        <div className="w-[1200px] max-w-full space-y-4 rounded-md border p-8 text-start shadow-md">
                            <div className="space-y-4">
                                <p className="text-3xl font-semibold leading-none">
                                    {item.title}
                                </p>
                            </div>

                            <p className="line-clamp-6 max-w-fit text-pretty leading-snug text-ic-muted md:text-lg md:leading-snug">
                                {item.description}
                            </p>

                            <p className="text-ic-muted-dark font-medium">
                                {formatRelativeTime(new Date(item.time))}
                            </p>
                        </div>
                    ))}
            </div>

            <p className="text-xl font-medium">...and many more events!</p>
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
