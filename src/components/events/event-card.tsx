import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface EventCardProps {
    image: string;
}

export function EventCard({ image }: EventCardProps) {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <motion.div
            className="relative flex h-[200px] min-w-[200px] items-center justify-center overflow-hidden rounded-xl bg-slate-400"
            key={image}
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="pointer-events-none absolute h-full w-full bg-black opacity-50" />
                        <motion.h1
                            className="z-10 flex items-center gap-[0.5ch] rounded-full bg-white px-3 py-2 text-sm font-semibold hover:opacity-75"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                        >
                            <span>Explore Now</span>
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <Image
                src={image}
                alt={image}
                fill
                className="object-cover"
            />
        </motion.div>
    );
}
