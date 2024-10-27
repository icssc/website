import { EventCardRow } from "@/components/events/event-card-row";

const IMAGES = [
    "/events/event_bits-and-bytes-reveal.png",
    "/events/event_braingames.jpg",
    "/events/event_discordbot.jpg",
    "/events/event_egghunt.jpg",
    "/events/event_famreveal.jpg",
    "/events/event_first-general-meeting.jpg",
    "/events/event_gamenight.jpg",
    "/events/event_gingerbread.jpg",
    "/events/event_hike.jpg",
    "/events/event_icsscfair.jpg",
    "/events/event_internship-panel.png",
    "/events/event_karaoke.jpg",
    "/events/event_meet-the-bytes.jpg",
];

export function Events() {
    return (
        <div>
            <div className="text-9xl text-black">Our Events</div>

            <div className="flex flex-col space-y-4">
                <EventCardRow
                    images={IMAGES.slice(0, IMAGES.length / 2)}
                    direction="left"
                />
                <EventCardRow
                    images={IMAGES.slice(IMAGES.length / 2, IMAGES.length)}
                    direction="right"
                />
            </div>
        </div>
    );
}
