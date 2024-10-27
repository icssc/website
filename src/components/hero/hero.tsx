"use client";

import { AnimatedName } from "@/components/hero/animated-name";
import { Name } from "@/components/hero/name";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_ITEMS = ["About", "Events", "Projects"];

export function Hero() {
    return (
        <motion.div
            className="relative h-[100dvh] w-[100dvw] overflow-hidden"
            initial={{ padding: 0, backgroundColor: "black" }}
            animate={{ padding: 10, backgroundColor: "white" }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
            <motion.div
                className="bg-ic-black flex h-full flex-col justify-end p-4"
                initial={{
                    borderRadius: 0,
                    opacity: 0,
                }}
                animate={{
                    borderRadius: 12,
                    opacity: 1,
                }}
                transition={{ delay: 0.5, duration: 0 }}
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
                                    "bg-ic-white size-1 rounded-full",
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
