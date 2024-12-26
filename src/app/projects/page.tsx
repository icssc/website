"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/components/projects/projects-data";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";

export default function Page() {
    return (
        <div className="max-w-screen-3xl mx-auto space-y-16 px-8 py-16 lg:space-y-32 lg:px-16">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                        Projects
                    </h2>
                    <p className="text-ic-muted text-pretty text-lg leading-tight md:max-w-[90%] lg:text-xl">
                        ICSSC actively develops and maintains open-source
                        projects that benefit the UCI community. We encourage
                        open-source contributions to the projects via our{" "}
                        <Link
                            href={"https://www.github.com/icssc"}
                            target="_blank"
                            referrerPolicy="no-referrer"
                        >
                            Github
                        </Link>
                        .
                    </p>
                </div>

                <motion.div
                    className={cn(
                        "grid gap-6",
                        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                    )}
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                staggerDirection: 1,
                            },
                        },
                    }}
                >
                    {PROJECTS_DATA.map((project) => {
                        return (
                            <motion.div
                                key={project.name}
                                className="space-y-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="group aspect-video overflow-hidden rounded-t-sm bg-neutral-800">
                                    <Link
                                        href={project.projectLink ?? ""}
                                        className={cn(
                                            project.projectLink
                                                ? "cursor-pointer"
                                                : "pointer-events-none",
                                            "flex h-full"
                                        )}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={800}
                                            height={800}
                                            className={cn(
                                                "h-full w-full object-cover object-top",
                                                project.projectLink
                                                    ? "transition-all duration-300 ease-in-out group-hover:scale-[1.025]"
                                                    : null
                                            )}
                                        />
                                    </Link>
                                </div>

                                <div>
                                    <div
                                        className={cn(
                                            "flex items-center justify-between",
                                            "text-lg transition-colors duration-300 ease-in-out"
                                        )}
                                    >
                                        <p>{project.name}</p>

                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            referrerPolicy="no-referrer"
                                        >
                                            <SiGithub className="size-5" />
                                        </Link>
                                    </div>
                                    <div
                                        className={cn(
                                            "text-ic-muted text-pretty text-base leading-tight"
                                        )}
                                    >
                                        {project.description}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
