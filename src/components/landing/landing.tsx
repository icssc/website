"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatedText } from "@/components/landing/animated-text";
import { ScreenFitText } from "@/components/landing/screen-fit-text";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

const PERCENTAGE = 0.75;

export function Landing() {
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
    const borderRadius = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [0, 12]
    );
    const grayscale = useTransform(
        scrollYProgress,
        [0, 0.5, PERCENTAGE],
        [20, 20, 0]
    );

    const [animated, setAnimated] = useState(false);
    useMotionValueEvent(scrollYProgress, "change", (p) => {
        if (animated) {
            return;
        }

        if (p >= 0.8) {
            setAnimated(true);
        }
    });
    const [grayscaleValue, setGrayscaleValue] = useState<number>(20);
    useMotionValueEvent(grayscale, "change", (g) => {
        if (animated) {
            return;
        }

        setGrayscaleValue(g);
    });

    console.log(grayscaleValue);

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
                    }}
                >
                    <motion.div
                        className="relative box-border flex h-full min-h-full flex-col justify-end bg-ic-black"
                        style={{
                            borderRadius: borderRadius,
                            padding: inversePadding,
                        }}
                    >
                        <motion.div
                            className="relative box-border flex h-full min-h-full"
                            style={{
                                borderRadius: borderRadius,
                                padding: inversePadding,
                            }}
                        >
                            <Image
                                src={"/landing/bonfire.jpg"}
                                alt="bonfire"
                                width={2000}
                                height={1000}
                                className={cn(
                                    "h-full rounded-md bg-cover object-cover"
                                )}
                                style={{
                                    filter: `grayscale(${grayscaleValue})`,
                                }}
                            />
                            <div className="absolute h-full w-full bg-neutral-800 bg-opacity-50" />
                        </motion.div>

                        <ScreenFitText className="flex items-end justify-center">
                            <div className="flex flex-col justify-center p-2 text-left">
                                <div className="hidden flex-col md:flex">
                                    <AnimatedText
                                        text="ICS"
                                        className={cn(
                                            grayscaleValue
                                                ? "text-neutral-300"
                                                : "text-ic-pink"
                                        )}
                                    />

                                    <AnimatedText
                                        text="Student&nbsp;Council"
                                        className={cn(
                                            grayscaleValue
                                                ? "text-neutral-300"
                                                : "text-ic-pink"
                                        )}
                                    />
                                </div>

                                <div className="md:hidden">
                                    <AnimatedText
                                        text="ICSSC"
                                        className={cn(
                                            grayscaleValue
                                                ? "text-neutral-300"
                                                : "text-ic-pink"
                                        )}
                                    />
                                </div>
                            </div>
                        </ScreenFitText>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
