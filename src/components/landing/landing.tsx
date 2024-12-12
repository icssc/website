"use client";

import { useRef, useState } from "react";
import { AnimatedName } from "@/components/hero/animated-name";
import { ScreenFitText } from "@/components/playground/screen-fit-text";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

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

    const borderRadius = useTransform(
        scrollYProgress,
        [0, PERCENTAGE],
        [0, 12]
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
                        className="relative box-border flex h-full flex-col justify-end bg-ic-black"
                        style={{
                            borderRadius: borderRadius,
                            padding: inversePadding,
                        }}
                    >
                        <ScreenFitText>
                            <div className="flex flex-col p-2 text-left">
                                <div className="hidden flex-col md:flex">
                                    <AnimatedName
                                        text="ICS"
                                        animated={animated}
                                    />

                                    <AnimatedName
                                        text="Student&nbsp;Council"
                                        animated={animated}
                                        setAnimated={setAnimated}
                                    />
                                </div>

                                <div className="flex flex-col md:hidden">
                                    <AnimatedName
                                        text="ICS"
                                        animated={animated}
                                    />
                                    <div className="flex flex-col">
                                        <AnimatedName
                                            text="Student "
                                            animated={animated}
                                            setAnimated={setAnimated}
                                        />
                                        <AnimatedName
                                            text="Council"
                                            animated={animated}
                                            setAnimated={setAnimated}
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScreenFitText>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
