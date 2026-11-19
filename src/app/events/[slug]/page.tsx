import { EventDetail } from "@/components/events/detail/event-detail";
import { EVENTS_DATA } from "@/components/events/events-data";
import {
	getAdjacentEvents,
	getEventBySlug,
	getSummary,
} from "@/components/events/events-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

// One static page per event. With `output: "export"` unknown slugs have no
// HTML file, so the host serves the 404 page. (Don't add `dynamicParams =
// false`: Next 14.2's dev server rejects it alongside static export.)
export function generateStaticParams() {
	return EVENTS_DATA.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
	const event = getEventBySlug(params.slug);
	if (!event) return {};

	const title = `${event.title} · ICS Student Council`;
	const description = getSummary(event);
	const images = event.poster
		? [{ url: encodeURI(event.poster.src), alt: event.poster.alt }]
		: undefined;

	return {
		title,
		description,
		openGraph: { title, description, type: "article", images },
		twitter: {
			card: images ? "summary_large_image" : "summary",
			title,
			description,
			images,
		},
	};
}

export default function Page({ params }: Props) {
	const event = getEventBySlug(params.slug);
	if (!event) notFound();

	const { prev, next } = getAdjacentEvents(event.slug);
	return <EventDetail event={event} prev={prev} next={next} />;
}
