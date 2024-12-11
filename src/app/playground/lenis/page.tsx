"use client";

import { useRef } from "react";
import { About } from "@/components/about/about";
import { AnimatedName } from "@/components/hero/animated-name";
import { Name } from "@/components/hero/name";
import { motion, useScroll, useTransform } from "framer-motion";

const Example = () => {
    return (
        <div className="bg-neutral-800">
            {/* <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll down
                </span>
            </div> */}
            <HorizontalScrollCarousel />
            <About />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const padding = useTransform(scrollYProgress, [0, 1], [0, 12]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 1],
        ["black", "white"]
    );
    const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 12]);

    return (
        <section
            ref={targetRef}
            className="relative h-[125vh] bg-neutral-900"
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

                {/* <motion.div
                    style={{ x }}
                    className="flex gap-4"
                >
                    {cards.map((card) => {
                        return (
                            <Card
                                card={card}
                                key={card.id}
                            />
                        );
                    })}
                </motion.div> */}
            </div>
        </section>
    );
};

export default Example;
