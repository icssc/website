"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScreenFitTextProps {
    children: React.ReactNode;
}

export const ScreenFitText = ({ children }: ScreenFitTextProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + "px";
    };

    if (!window) {
        return null;
    }

    return (
        <div
            className="flex overflow-hidden"
            ref={containerRef}
        >
            <span
                className={cn(
                    "absolute mx-auto whitespace-nowrap text-center",
                    "font-semibold leading-[0.85] tracking-[-0.075em] text-ic-pink"
                )}
                ref={textRef}
            >
                {children}
            </span>
        </div>
    );
};
