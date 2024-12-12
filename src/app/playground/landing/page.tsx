"use client";

import { useEffect, useRef, useState } from "react";
// import { AnimatedName } from "@/components/hero/animated-name";
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

    const imageMovement = useTransform(
        scrollYProgress,
        [0, 0.2, PERCENTAGE],
        ["100%", "100%", "0%"]
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
            className={cn("relative h-[250vh]")}
        >
            <div className="sticky top-0 flex h-screen flex-col items-center overflow-hidden">
                <motion.div
                    className="relative box-border flex h-full w-full flex-col overflow-hidden"
                    style={{
                        padding: padding,
                        // backgroundColor: backgroundColor,
                    }}
                >
                    <motion.div
                        className="relative box-border flex h-full w-full flex-col justify-end bg-ic-black"
                        style={{
                            borderRadius: borderRadius,
                            // padding: inversePadding,
                        }}
                    >
                        <motion.div
                            className="box-border max-h-full w-full rounded-md bg-red-200"
                            style={{
                                padding: padding,
                                borderRadius: borderRadius,
                                y: imageMovement,
                            }}
                        >
                            <ScreenFitText
                                textRef={textRef}
                                setFoo={setFoo}
                            >
                                <div className="flex flex-col p-2 text-left">
                                    <div>ICS</div>
                                    <div className="flex flex-col md:flex-row">
                                        <span>Student</span>
                                        <span className="hidden h-0 md:flex">
                                            &nbsp;
                                        </span>
                                        <span>Council</span>
                                    </div>
                                </div>
                            </ScreenFitText>
                        </motion.div>

                        {/* <div className="h-0">
                            <ScreenFitText
                                textRef={textRef}
                                setFoo={setFoo}
                            >
                                <div className="flex flex-col p-2 text-left">
                                    <div>ICS</div>
                                    <div className="flex flex-col md:flex-row">
                                        <span>Student</span>
                                        <span className="hidden h-0 md:flex">
                                            &nbsp;
                                        </span>
                                        <span>Council</span>
                                    </div>
                                </div>
                            </ScreenFitText>
                        </div>

                        <motion.div
                            style={{ display: animate ? "none" : display }}
                            initial="initial"
                            animate={animate}
                        >
                            <AnimatedName
                                text="ICSSC"
                                fontSize={foo}
                            />
                        </motion.div>

                        <motion.div
                            className="font-semibold leading-[0.85] tracking-tighter text-ic-pink"
                            style={{ height: animate ? "" : 0 }}
                        >
                            <motion.span
                                variants={icsVariants}
                                initial="initial"
                                animate={animate ? "animate" : undefined}
                                className="w-fit max-w-fit"
                                style={{
                                    fontSize: fontSize,
                                }}
                            >
                                ICS
                            </motion.span>
                            <motion.div
                                className={cn(
                                    "flex whitespace-nowrap tracking-tighter md:flex-row"
                                )}
                                style={{
                                    fontSize: fontSize,
                                }}
                                initial="initial"
                                animate={animate ? "animate" : undefined}
                            >
                                <div className="flex w-fit max-w-fit whitespace-nowrap">
                                    <motion.span variants={letterVariants}>
                                        S
                                    </motion.span>
                                    <motion.span variants={wordVariants}>
                                        tudent&nbsp;
                                    </motion.span>
                                </div>
                                <div className="flex w-fit max-w-fit whitespace-nowrap">
                                    <motion.span variants={letterVariants}>
                                        C
                                    </motion.span>
                                    <motion.span variants={wordVariants}>
                                        ouncil
                                    </motion.span>
                                </div>
                            </motion.div>
                        </motion.div> */}
                    </motion.div>
                </motion.div>

                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-semibold tracking-tighter text-ic-pink">
                    ICSSC
                </h1>
            </div>
        </section>
    );
}
