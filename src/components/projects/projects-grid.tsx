import { PROJECTS_DATA } from "@/components/projects/projects-data";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";

export function ProjectsGrid() {
	return (
		<motion.div
			className={cn(
				"grid gap-x-6 gap-y-12",
				"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
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
						<div className="group aspect-video overflow-hidden rounded-t-md bg-neutral-800">
							<a
								href={project.projectLink ?? ""}
								className={cn(
									project.projectLink
										? "peer cursor-pointer"
										: "pointer-events-none",
									"flex h-full",
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={`/assets${project.image}`}
									alt={project.name}
									width={800}
									height={800}
									className={cn("h-full w-full object-cover object-top")}
								/>
							</a>
						</div>

						<div>
							<div
								className={cn(
									"flex items-center justify-between",
									"text-lg transition-colors duration-300 ease-in-out",
								)}
							>
								<p>{project.name}</p>

								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									referrerPolicy="no-referrer"
								>
									<SiGithub className="size-5" />
								</a>
							</div>
							<div
								className={cn(
									"text-pretty text-base leading-tight text-ic-muted",
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
