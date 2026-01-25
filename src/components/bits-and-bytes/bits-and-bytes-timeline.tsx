"use client";

import { SectionHeading } from "../shared/section-heading";
import {
	BIT_AND_BYTES_EVENTS,
	type BitsAndBytesEvent,
} from "./bits-and-bytes-event-data";
import { ClockIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";

const itemVariants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function formatEventDate(dateIsoString: string): string {
	const eventDate = new Date(dateIsoString);
	return eventDate.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		weekday: "long",
	});
}

function formatEventTime(dateIsoString: string): string {
	const eventDate = new Date(dateIsoString);
	return eventDate.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});
}

type TimelineListProps = {
	events: BitsAndBytesEvent[];
};

function TimelineList({ events }: TimelineListProps) {
	return (
		<div className="relative w-full">
			<ul className="grid [&>li]:grid-cols-[0_min-content_1fr] w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_3rem,black_calc(100%-3rem),transparent_100%)]">
				{events.map((event) => (
					<TimelineItem key={event.title + event.time} event={event} />
				))}
			</ul>
		</div>
	);
}

type TimelineItemProps = {
	event: BitsAndBytesEvent;
};

function TimelineItem({ event }: TimelineItemProps) {
	return (
		<motion.li
			className="grid items-start gap-x-3 md:gap-x-6 pb-12"
			variants={itemVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			<div className="col-start-2 col-end-3 row-start-1 row-end-1 flex size-4 items-center justify-center rounded-full bg-ic-pink border-2 border-white shadow-lg z-10 mt-10" />
			<div
				className="col-start-2 col-end-3 row-start-1 row-end-2 mx-auto w-0.5 bg-ic-pink -z-10"
				style={{ height: "calc(100% + 3rem)" }}
			/>
			<div className="col-start-3 col-end-4 row-start-1 row-end-1">
				<div className="grid grid-cols-1 gap-8 border-t-2 py-4 pt-8 md:grid-cols-3 w-full">
					<EventMeta timeIso={event.time} location={event.location} />
					<EventContent title={event.title} description={event.description} />
				</div>
			</div>
		</motion.li>
	);
}

type EventMetaProps = {
	timeIso: string;
	location: string;
};

function EventMeta({ timeIso, location }: EventMetaProps) {
	return (
		<div className="flex flex-col items-start space-y-4 md:col-span-1 text-left">
			<p className="text-nowrap text-xl font-bold">
				{formatEventDate(timeIso)}
			</p>
			<div className="flex flex-wrap items-center gap-3 text-sm">
				<span className="flex items-center gap-1">
					<ClockIcon className="size-5" />
					{formatEventTime(timeIso)}
				</span>
				<span className="flex items-center gap-1">
					<MapPinIcon className="size-5" />
					{location}
				</span>
			</div>
		</div>
	);
}

type EventContentProps = {
	title: string;
	description?: string;
};

function EventContent({ title, description }: EventContentProps) {
	return (
		<div className="col-span-1 flex flex-col items-start space-y-3 md:col-span-2">
			<h3 className="text-pretty text-left text-3xl font-semibold">{title}</h3>
			{description && (
				<p className="text-pretty text-left text-gray-700 line-clamp-6">
					{description}
				</p>
			)}
		</div>
	);
}

export function BitsAndBytesTimeline() {
	return (
		<div className="flex flex-col items-start gap-y-12">
			<SectionHeading title="Program Events" />
			<TimelineList events={BIT_AND_BYTES_EVENTS} />
		</div>
	);
}
