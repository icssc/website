import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNameProps {
    text: string;
    className?: string;
}

export function AnimatedText({ text, className }: AnimatedNameProps) {
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
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
        animated: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div
            aria-label={text}
            className={cn(
                "flex w-full font-semibold leading-[0.85] tracking-tighter text-ic-pink",
                className
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
                            delayChildren: index * 0.25 + 1,
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
