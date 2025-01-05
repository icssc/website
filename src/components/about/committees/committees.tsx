"use client";

import { useRef, useState } from "react";
import { COMMITTEE_DATA } from "@/components/about/committees/committee-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function Committees() {
    const [autoplay, setAutoplay] = useState(true);
    const [autoplayInterval, setAutoplayInterval] = useState(5000);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const handleClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setAutoplay(false);

        timeoutRef.current = setTimeout(() => {
            setAutoplay(true);
        }, 15000);
    };

    return (
        <SectionContainer>
            <SectionHeading title="Committees" />

            <Carousel
                opts={{
                    loop: true,
                }}
                autoplay={autoplay}
                autoplayInterval={autoplayInterval}
            >
                <CarouselContent>
                    {COMMITTEE_DATA.map(({ name, description, members }) => (
                        <CarouselItem
                            key={name}
                            className="max-w-full basis-1/2"
                        >
                            <div className="m-2 space-y-4 rounded-md p-4 shadow-md">
                                <div className="space-y-1 text-center">
                                    <p className="text-3xl font-semibold">
                                        {name} Committee
                                    </p>
                                    <p className="text-balance leading-tight text-ic-muted">
                                        {description}
                                    </p>
                                </div>

                                <div>{members}</div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious handleClick={handleClick} />
                <CarouselNext handleClick={handleClick} />
            </Carousel>
        </SectionContainer>
    );
}
