import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/components/projects/projects-data";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";

export function ProjectsGrid() {
    return (
        <motion.div
            className={cn(
                "grid gap-x-6 gap-y-12",
                "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
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
                                    "text-pretty text-base leading-tight text-ic-muted"
                                )}
                            >
                                {project.description}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
