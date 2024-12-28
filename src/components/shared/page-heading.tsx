import React from "react";
import { cn } from "@/lib/utils";

interface PageHeadingProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    containerClassName?: string;
}

export function PageHeading({
    title,
    subtitle,
    containerClassName,
}: PageHeadingProps) {
    return (
        <div className={cn("space-y-2", containerClassName)}>
            <h2 className="text-5xl font-semibold leading-none lg:text-6xl">
                {title}
            </h2>

            <p className="text-pretty text-lg leading-tight text-ic-muted lg:text-xl">
                {subtitle}
            </p>
        </div>
    );
}
