"use client";

import { useRef } from "react";
import Image from "next/image";
import { AnimatedText } from "@/components/landing/animated-text";
import { ScreenFitText } from "@/components/landing/screen-fit-text";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";

const PERCENTAGE = 0.75;
const PADDING = 16;

export function Landing() {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const padding = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [0, PADDING]
    );
    const inversePadding = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [PADDING, 0]
    );
    const borderRadius = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [0, 12]
    );

    return (
        <section
            ref={targetRef}
            className={cn("relative h-[200vh]")}
        >
            <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
                <motion.div
                    className="relative h-full w-full overflow-hidden"
                    style={{
                        padding: padding,
                    }}
                >
                    <motion.div
                        className="relative flex h-full min-h-full flex-col justify-end bg-ic-black"
                        style={{
                            borderRadius: borderRadius,
                            padding: inversePadding,
                        }}
                    >
                        <motion.div
                            className="relative flex h-full min-h-full max-w-full"
                            style={{
                                borderRadius: borderRadius,
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
                            />
                            <div
                                className={cn(
                                    "absolute inset-0 w-full rounded-md border-ic-black bg-neutral-800 bg-opacity-60"
                                )}
                            />
                        </motion.div>

                        <ScreenFitText className="flex items-end justify-center">
                            <div className="flex flex-col justify-center p-2 pb-4 text-left">
                                <div className="hidden flex-col md:flex">
                                    <AnimatedText text="ICS" />

                                    <AnimatedText text="Student&nbsp;Council" />
                                </div>

                                <div className="md:hidden">
                                    <AnimatedText text="ICSSC" />
                                </div>
                            </div>
                        </ScreenFitText>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
