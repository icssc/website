"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNameProps {
    text: string;
}

export function AnimatedName({ text }: AnimatedNameProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: "25%",
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <div
            aria-label={text}
            role="heading"
            className={cn(
                "text-ic-pink flex w-full font-semibold leading-[1] tracking-[-0.075em]",
                "text-[25vw] leading-[0.85] md:[font-size:_clamp(1500%,1500%,225px)]"
            )}
        >
            {text.split(" ").map((word, index) => {
                return (
                    <motion.div
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.5 + 1,
                            staggerChildren: 0.1,
                        }}
                        className="inline-block whitespace-nowrap"
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <motion.div
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                    className="inline-block"
                                >
                                    {character}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                );
            })}
        </div>
    );
}
