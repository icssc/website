import { PROJECTS_DATA } from "@/components/projects/projects-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function LandingProjectsGrid() {
	return (
		<SectionContainer>
			<SectionHeading
				title="Open Source Projects"
				subtitle="Proudly open source. Used by tens of thousands. Designed and
                    developed by students."
			/>

			<div
				className={cn(
					"grid gap-x-6 gap-y-12",
					"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
				)}
			>
				{PROJECTS_DATA.filter(
					(p) =>
						p.name === "AntAlmanac" ||
						p.name === "Anteater API" ||
						p.name === "PeterPortal",
				).map((project) => {
					return (
						<div key={project.name} className="space-y-4">
							<div className="group aspect-video overflow-hidden rounded-t-sm bg-neutral-800">
								<a href="/projects" className="flex h-full">
									<Image
										src={`/assets${project.image}`}
										alt={project.name}
										width={800}
										height={800}
										className={"h-full w-full object-cover object-top"}
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
								</div>

								<div
									className={cn(
										"text-pretty text-base leading-tight text-ic-muted",
									)}
								>
									{project.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="text-center">
				<a href="/projects">
					<p className="text-xl font-medium">See all of our projects &rarr;</p>
				</a>
			</div>
		</SectionContainer>
	);
}
