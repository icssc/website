"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Committee({
    name,
    description,
    image,
    members,
    chairs,
    leads,
}: {
    name: string;
    description: string;
    image: string;
    members: string[];
    chairs: string[];
    leads?: string[];
}) {
    const [showMore, setShowMore] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkOverflow = () => {
            const el = contentRef.current;
            if (el) {
                // Compare scrollHeight to offsetHeight to detect overflow
                setIsOverflowing(el.scrollHeight > el.offsetHeight);
            }
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [members, showMore]);

    return (
        <div className="flex h-full flex-col justify-between space-y-4">
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-2xl font-semibold lg:text-3xl">{name}</p>
                    <p className="text-pretty leading-tight text-ic-muted">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <div>
                    <img
                        className="aspect-video max-h-96 w-full rounded-md bg-ic-black object-cover object-center shadow-md"
                        src={image}
                        width={800}
                        height={450}
                        alt={`Image of the ${name} committee`}
                    />
                </div>

                <div>
                    <div>
                        <span className="font-semibold">
                            {chairs.length > 1 ? "Chairs" : "Chair"}:{" "}
                        </span>
                        {chairs?.join(", ")}
                    </div>
                    {leads && leads.length > 0 && (
                        <div>
                            <span className="font-semibold">
                                {leads.length > 1 ? "Leads" : "Lead"}:{" "}
                            </span>
                            {leads.join(", ")}
                        </div>
                    )}
                    <div
                        ref={contentRef}
                        className={cn(
                            "transition-all",
                            showMore ? "" : "line-clamp-2"
                        )}
                    >
                        <span className="font-semibold">Members: </span>
                        {members.join(", ")}
                    </div>

                    {(isOverflowing || showMore) && (
                        <Button
                            variant="link"
                            className="m-0 p-0 py-0 leading-none underline underline-offset-2"
                            onClick={() => setShowMore((prev) => !prev)}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
