"use client";

import { useState } from "react";
import { AnimatedName } from "@/components/hero/animated-name";
import { Name } from "@/components/hero/name";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

const NAV_ITEMS = ["About", "Events", "Projects"];

export function Hero() {
    const { scrollY } = useScroll();

    const [triggered, setTriggered] = useState(false);
    const [yVal, setYVal] = useState(0);

    useMotionValueEvent(scrollY, "change", (currentY) => {
        if (triggered) {
            return;
        }

        setYVal(currentY);

        if (currentY >= 300) {
            setTriggered(true);
        }
    });

    // Define transformations with conditional logic
    const padding = useTransform(scrollY, [0, 300], [0, 12]);
    const backgroundColor = useTransform(scrollY, [0, 300], ["black", "white"]);
    const borderRadius = useTransform(scrollY, [0, 300], [0, 12]);

    // Derived values to handle the triggered state
    const finalPadding = triggered ? 12 : padding;
    const finalBackgroundColor = triggered ? "white" : backgroundColor;
    const finalBorderRadius = triggered ? 12 : borderRadius;

    console.log(yVal);

    return (
        <motion.div
            className="relative w-full overflow-hidden"
            style={{
                height: "200vh",
                padding: finalPadding,
                backgroundColor: finalBackgroundColor,
            }}
            // initial={{ padding: 0, backgroundColor: "black" }}
            // animate={{ padding: 12, backgroundColor: "white" }}
            // transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
            <motion.div
                className="h absolute flex h-full flex-col justify-end bg-ic-black p-4"
                style={{
                    borderRadius: finalBorderRadius,
                    top: yVal + padding.get(),
                    height: `calc(100vh - ${finalPadding}px)`,
                }}
                // initial={{
                //     borderRadius: 0,
                //     opacity: 0,
                // }}
                // animate={{
                //     borderRadius: 12,
                //     opacity: 1,
                // }}
                // transition={{ delay: 0.5, duration: 0 }}
            >
                <div className="absolute left-1/2 top-12 flex translate-x-[-50%] space-x-12">
                    {NAV_ITEMS.map((item) => (
                        <div
                            className="flex-center cursor-pointer flex-col"
                            key={item}
                        >
                            <p className="peer">{item}</p>
                            <div
                                className={cn(
                                    "size-1 rounded-full bg-ic-white",
                                    "opacity-0 transition-all duration-500 peer-hover:opacity-100"
                                )}
                            />
                        </div>
                    ))}
                </div>
                <motion.div
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
