"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "motion/react";

export function Header() {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);
    // const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            const direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "fixed inset-x-0 z-[5000] mx-auto flex h-16 w-full items-center justify-between border border-transparent bg-ic-black px-4 py-4",
                    "shadow-xl"
                )}
            >
                <Link href={"/"}>
                    <Image
                        src={"/brand/logo.svg"}
                        alt="logo"
                        width={40}
                        height={40}
                        className="aspect-square object-cover"
                    />
                </Link>

                <div className="flex flex-row space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            className={cn(
                                "relative flex items-center space-x-2 no-underline",
                                pathname === item.link
                                    ? "font-medium text-ic-pink"
                                    : "text-ic-white",
                                "transition-all hover:text-ic-pink"
                            )}
                        >
                            <span className="text-lg">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

const NAV_ITEMS = [
    {
        link: "/about",
        name: "About",
    },
    {
        link: "/board",
        name: "Board",
    },
    {
        link: "/events",
        name: "Events",
    },
    {
        link: "/projects",
        name: "Projects",
    },
    {
        link: "/contact",
        name: "Contact",
    },
];
