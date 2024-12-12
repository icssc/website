"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedName } from "@/components/hero/animated-name";
// import { Name } from "@/components/hero/name";
import { ScreenFitText } from "@/components/playground/screen-fit-text";
// import { useTextWidth } from "@/hooks/useTextWidth";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

const PERCENTAGE = 0.8;

const transition = { transition: { duration: 0.5, ease: "easeInOut" } };

const letterVariants = {
    initial: {
        opacity: 0,
        x: -10,
        transition: transition,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: transition,
    },
};

const wordVariants = {
    initial: {
        x: -10,
        opacity: 0,
        width: 0,
        transition: { ...transition, duration: 0.75 },
    },
    animate: {
        x: 0,
        opacity: 1,
        width: "fit-content",
        transition: { duration: 0.75, ease: "easeInOut" },
    },
};

const icsVariants = {
    initial: {
        opacity: 0,
        y: -20,
        transition: { ...transition, duration: 1 },
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { ...transition, duration: 1 },
    },
};

export default function Page() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const padding = useTransform(scrollYProgress, [0, PERCENTAGE], [0, 12]);
    const inversePadding = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [12, 0]
    );
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        ["black", "white"]
    );
    const borderRadius = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [0, 12]
    );
    const display = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        ["flex", "none"]
    );

    const animationProgress = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        ["", 0]
    );

    const [animate, setAnimate] = useState(false);
    useMotionValueEvent(padding, "change", (p) => {
        if (animate) {
            return;
        }

        if (p === 12) {
            setAnimate(true);
        }
    });

    const textRef = useRef<HTMLDivElement | null>(null);
    const fontSize = textRef.current?.style.fontSize;

    console.log(fontSize);

    const [foo, setFoo] = useState(0);
    console.log("foo", foo);

    return (
        <section
            ref={targetRef}
            className={cn("relative h-[200vh]")}
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    className="relative box-border h-full w-full overflow-hidden"
                    style={{
                        padding: padding,
                        backgroundColor: backgroundColor,
                    }}
                >
                    <motion.div
                        className="relative box-border flex h-full flex-col justify-end bg-ic-black"
                        style={{
                            borderRadius: borderRadius,
                            padding: inversePadding,
                        }}
                    >
                        <div className="">
                            <ScreenFitText
                                textRef={textRef}
                                setFoo={setFoo}
                            >
                                <div className="flex flex-col p-2 text-left">
                                    <AnimatedName text="ICS" />
                                    {/* <div>ICS</div> */}

                                    <div className="flex flex-col md:flex-row">
                                        <div className="hidden md:flex">
                                            <AnimatedName text="Student&nbsp;Council" />
                                        </div>

                                        <div className="flex flex-col md:hidden">
                                            <AnimatedName text="Student" />
                                            <AnimatedName text="Council" />
                                        </div>

                                        {/* <span>Student</span> */}
                                        {/* <span className="hidden h-0 md:flex">
                                            &nbsp;
                                        </span>
                                        <span>Council</span> */}
                                    </div>
                                </div>
                            </ScreenFitText>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
