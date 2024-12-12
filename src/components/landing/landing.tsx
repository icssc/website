"use client";

import { useRef } from "react";
import { Name } from "@/components/hero/name";
import { ScreenFitText } from "@/components/playground/screen-fit-text";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";

const PERCENTAGE = 0.8;

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
                        <ScreenFitText>
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
                </motion.div>
            </div>
        </section>
    );
}
