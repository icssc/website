"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScreenFitTextProps {
    className?: string;
    children: React.ReactNode;
}

export const ScreenFitText = ({ className, children }: ScreenFitTextProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);

    const resizeText = useCallback(() => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth - 24; // Padding adjustment
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = `${mid}px`;

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = `${max}px`;
    }, []);

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);
        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, [resizeText]);

    return (
        <div
            className={cn("h-full w-full overflow-hidden", className)}
            ref={containerRef}
        >
            <span
                className={cn(
                    "absolute mx-auto whitespace-nowrap text-center",
                    "font-semibold leading-[0.85] tracking-tighter text-ic-pink"
                )}
                ref={textRef}
            >
                {children}
            </span>
        </div>
    );
};
