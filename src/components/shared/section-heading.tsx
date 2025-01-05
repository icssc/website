import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    containerClassName?: string;
    subtitleClassName?: string;
}

export function SectionHeading({
    title,
    subtitle,
    containerClassName,
    subtitleClassName,
}: SectionHeadingProps) {
    return (
        <div className={cn("space-y-2", containerClassName)}>
            <h2 className="text-4xl font-semibold leading-none lg:text-5xl">
                {title}
            </h2>

            <p
                className={cn(
                    "text-pretty text-lg leading-tight text-ic-muted lg:text-xl",
                    subtitleClassName
                )}
            >
                {subtitle}
            </p>
        </div>
    );
}
