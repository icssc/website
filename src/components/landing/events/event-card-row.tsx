"use client";

import { EventCard } from "@/components/landing/events/event-card";
import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const DURATION = 40;

interface EventCardRowProps {
    images: string[];
    direction: "left" | "right";
}

export function EventCardRow({ images, direction }: EventCardRowProps) {
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
            className={cn("flex space-x-4")}
            style={{ x: xTranslation }}
            ref={ref}
        >
            {[...images, ...images].map((item, idx) => (
                <EventCard
                    image={item}
                    key={idx}
                />
            ))}
        </motion.div>
    );
}
