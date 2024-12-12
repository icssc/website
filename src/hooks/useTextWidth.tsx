import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useTextWidth() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);

    const [screenFitTextPx, setScreenFitTextPx] = useState(0);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        console.log(container);
        console.log(text);

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

        text.style.fontSize = max + "px";

        setScreenFitTextPx(max);
    };

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    const text = (
        <div
            className="flex h-screen w-full items-end overflow-hidden"
            ref={containerRef}
        >
            <span
                className={cn(
                    "absolute mx-auto whitespace-nowrap text-center",
                    "font-semibold leading-[0.85] tracking-tighter text-ic-pink"
                )}
                ref={textRef}
            >
                <div className="flex flex-col p-2 text-left">
                    <div>ICS</div>
                    <div className="flex flex-col md:flex-row">
                        <span>Student</span>
                        <span className="hidden h-0 md:flex">&nbsp;</span>
                        <span>Council</span>
                    </div>
                </div>
            </span>
        </div>
    );

    return { text, screenFitTextPx };
}
