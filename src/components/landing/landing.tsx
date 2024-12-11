"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";

const PERCENTAGE = 0.8;

export function Landing() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const padding = useTransform(scrollYProgress, [0, PERCENTAGE], [0, 12]);
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
                        className="box-border flex h-full grow flex-col justify-end bg-ic-black p-4"
                        style={{
                            borderRadius: borderRadius,
                        }}
                    >
                        {/* <motion.div
                            animate={{ display: "none" }}
                            transition={{ delay: 3.5, duration: 0 }}
                        >
                            <AnimatedName text="ICSSC" />
                        </motion.div>
                        <motion.div
                            initial={{ display: "none" }}
                            animate={{ display: "flex" }}
                            transition={{ delay: 3.5 }}
                        >
                            <Name />
                        </motion.div> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
