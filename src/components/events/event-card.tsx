"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ClockIcon, MapPinIcon } from "lucide-react";

interface EventCardProps {
    title: string;
    description: string;
    time: string;
    location: string;
    src: string;
    aspectRatio?: string;
    timeFormat?: (date: Date) => string;
}

export function EventCard({
    title,
    description,
    time,
    location,
    src,
    aspectRatio = "4/5",
    timeFormat,
}: EventCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const formattedDate = new Date(time).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    const formattedTime = timeFormat
        ? timeFormat(new Date(time))
        : new Date(time).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
          });

    return (
        <>
            <div className="grid grid-cols-1 gap-8 border-t-2 py-4 md:grid-cols-5 lg:grid-cols-3">
                <div className="flex flex-col items-start space-y-2 md:col-span-2 lg:col-span-1">
                    <p className="text-nowrap text-xl font-bold">
                        {formattedDate}
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <ClockIcon className="size-5" />
                            {formattedTime}
                        </span>

                        <span className="flex items-center gap-1">
                            <MapPinIcon className="size-5" />
                            {location}
                        </span>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col items-start space-y-2 md:col-span-3 lg:col-span-1">
                    <h3
                        className="text-3xl font-semibold transition-opacity hover:opacity-80 md:cursor-pointer md:underline lg:pointer-events-none lg:cursor-default lg:no-underline"
                        onClick={() => setIsOpen(true)}
                    >
                        {title}
                    </h3>

                    <p className="line-clamp-6 text-pretty text-left text-ic-muted">
                        {description}
                    </p>
                </div>

                <div className="hidden justify-end lg:flex">
                    <div className="w-full max-w-xs">
                        <Image
                            src={`/events/${src}`}
                            alt={title}
                            className="h-auto max-h-80 w-full object-cover"
                            style={{ aspectRatio }}
                            width={320}
                            height={400}
                        />
                    </div>
                </div>
            </div>

            <Dialog
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <DialogContent className="max-w-md rounded-lg p-5">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{title}</DialogTitle>
                    </DialogHeader>

                    <div
                        className="relative w-full"
                        style={{ aspectRatio }}
                    >
                        <Image
                            src={`/events/${src}`}
                            alt={title}
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
