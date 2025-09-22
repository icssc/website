"use client";

import React, { useCallback, useEffect, useState } from "react";
import { LANDING_EVENTS_DATA } from "@/components/landing/events/landing-events-data";
import { cn } from "@/lib/utils";

export const LandingEventsCards = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow" | "sluggish";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    const getDirection = useCallback(() => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "20s"
                );
            } else if (speed === "normal") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "40s"
                );
            } else if (speed === "slow") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "80s"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "160s"
                );
            }
        }
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            for (const item of scrollerContent) {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            }

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {LANDING_EVENTS_DATA.map((item) => (
                    <div key={item.title} className="relative">
                        <img
                            src={`/assets/landing/${item.src}`}
                            alt=""
                            width={450}
                            height={300}
                            className="aspect-video w-[350px] rounded-md object-cover lg:w-[450px]"
                        />

                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-ic-black/50 opacity-0 transition-opacity hover:opacity-100">
                            <p className="text-xl font-medium">
                                {item.title}
                            </p>
							<p className="text-sm">
								{item.year}
							</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
