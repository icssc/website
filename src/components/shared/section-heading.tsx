import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    containerClassName?: string;
}

export function SectionHeading({
    title,
    subtitle,
    containerClassName,
}: SectionHeadingProps) {
    return (
        <div className={cn("space-y-2", containerClassName)}>
            <h2 className="text-4xl font-semibold leading-none lg:text-5xl">
                {title}
            </h2>

            <p className="text-pretty text-lg leading-tight text-ic-muted lg:text-xl">
                {subtitle}
            </p>
        </div>
    );
}
