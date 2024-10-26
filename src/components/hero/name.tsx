"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    const [triggered, setTriggered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleMouseEnter = useCallback(() => {
        setTriggered(true);
    }, []);

    const icsVariants = {
        initial: {
            y: 0,
            transition: { ...transition, duration: 1 },
        },
        hover: {
            y: windowWidth >= 768 ? "-100%" : "-50%",
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

    return (
        <motion.h1
            className={cn(
                "text-ic-pink flex w-full font-semibold leading-[1] tracking-[-0.075em]",
                "text-[25vw] leading-[0.85] md:[font-size:_clamp(14vw,14vw,225px)]"
            )}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            animate={triggered ? "hover" : undefined}
            onMouseEnter={handleMouseEnter}
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
                    <motion.span variants={wordVariants}>ouncil</motion.span>
                </div>
            </motion.div>
        </motion.h1>
    );
}
