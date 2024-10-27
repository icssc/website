"use client";

import { EventCard } from "@/components/events/event-card";
import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const images = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
    "/image-4.jpg",
    "/image-5.jpg",
    "/image-6.jpg",
    "/image-7.jpg",
    "/image-8.jpg",
];
const DURATION = 25;

interface EventCardRowProps {
    direction: "left" | "right";
}

export function EventCardRow({ direction }: EventCardRowProps) {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    const finalPosition = -width / 2 - 8;
    animate(
        xTranslation,
        direction === "left" ? [0, finalPosition] : [finalPosition, 0],
        {
            ease: "linear",
            duration: DURATION,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        }
    );

    return (
        <motion.div
            className={cn("flex gap-4")}
            style={{ x: xTranslation }}
            ref={ref}
        >
            {[...images, ...images].map((item, idx) => (
                <EventCard
                    image={`${item}`}
                    key={idx}
                />
            ))}
        </motion.div>
    );
}
