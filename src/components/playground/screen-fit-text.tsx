"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScreenFitTextProps {
    textRef?: MutableRefObject<HTMLSpanElement | null>;
    setFoo?: any;
    children: React.ReactNode;
}

export const ScreenFitText = ({
    textRef,
    setFoo,
    children,
}: ScreenFitTextProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef?.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth - 24;
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

        console.log(max);
        setFoo(max);
        text.style.fontSize = max + "px";
    };

    if (!window) {
        return null;
    }

    return (
        <div
            className="flex h-full w-full items-end overflow-hidden"
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
