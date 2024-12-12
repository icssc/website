"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const transition = { transition: { duration: 0.5, ease: "easeInOut" } };

const letterVariants = {
    initial: {
        transition: transition,
    },
    hover: {
        transition: transition,
    },
};

const wordVariants = {
    initial: {
        x: 0,
        maxWidth: 0,
        width: 0,
        opacity: 0,
        transition: transition,
    },
    hover: {
        x: 0,
        marginLeft: "0.0375em",
        marginRight: "0.0375em",
        width: "fit-content",
        maxWidth: "1000px",
        opacity: 1,
        transition: { duration: 0.75, delay: 0.5, ease: "easeInOut" },
    },
};

export function Name() {
    const [animated, setAnimated] = useState(false);
    const [triggered, setTriggered] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>();

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", () => {
        if (animated) {
            setTriggered(true);
        }
    });

    useEffect(() => {
        setTimeout(() => {
            setAnimated(true);
        }, 3500);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setTriggered(true);
    }, []);

    const icsVariants = {
        initial: {
            y: 0,
            transition: { ...transition, duration: 1 },
        },
        hover: {
            y: !windowWidth || windowWidth >= 768 ? "-100%" : "-50%",
            width: 0,
            transition: { ...transition },
        },
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

        console.log(container);
        console.log(text);

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        console.log(container.offsetWidth, text.offsetWidth);
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
        text.style.fontSize = max + "px";
    };

    if (!window) {
        return null;
    }

    return (
        <div
            className="absolute bottom-0 flex overflow-hidden"
            ref={containerRef}
        >
            {/* <motion.h1
                className={cn(
                    "absolute mx-auto w-full font-semibold leading-[1] tracking-tighter text-ic-pink"
                )}
                // initial="initial"
                // animate={triggered ? "hover" : undefined}
                // onHoverStart={handleMouseEnter}
                ref={textRef}
            > */}
            <span
                className={cn(
                    "absolute mx-auto whitespace-nowrap text-center",
                    "font-semibold leading-[0.85] tracking-[-0.075em] text-ic-pink"
                )}
                ref={textRef}
            >
                <motion.span
                    variants={icsVariants}
                    className="w-fit max-w-fit"
                >
                    ICS
                </motion.span>
                <motion.div
                    className={cn(
                        "flex whitespace-nowrap md:flex-row",
                        triggered ? "flex-col" : "flex-row"
                    )}
                >
                    <div className="flex w-fit max-w-fit whitespace-nowrap">
                        <motion.span variants={letterVariants}>S</motion.span>
                        <motion.span variants={wordVariants}>
                            tudent&nbsp;
                        </motion.span>
                    </div>
                    <div className="flex w-fit max-w-fit whitespace-nowrap">
                        <motion.span variants={letterVariants}>C</motion.span>
                        <motion.span variants={wordVariants}>
                            ouncil
                        </motion.span>
                    </div>
                </motion.div>
            </span>
            {/* </motion.h1> */}
        </div>
    );
}
