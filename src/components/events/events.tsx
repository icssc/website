import { EventCardRow } from "@/components/events/event-card-row";

export function Events() {
    return (
        <div className="flex flex-col space-y-2">
            <EventCardRow direction="left" />
            <EventCardRow direction="right" />
        </div>
    );
}
