import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { PROJECT_DATA } from "@/components/projects/project-data";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
    return (
        <div
            className={cn(
                "flex w-full flex-col items-start gap-y-8",
                "px-8 lg:px-16"
            )}
        >
            <div className="flex flex-col gap-y-2">
                <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                    Open Source Projects
                </h2>

                <p className="text-pretty text-lg leading-tight text-neutral-400 lg:text-2xl">
                    Proudly open source. Used by tens of thousands. Designed and
                    developed by students.
                </p>
            </div>

            <BentoGrid className="w-full gap-2">
                {PROJECT_DATA.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
