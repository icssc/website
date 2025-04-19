import { PROJECT_INFO } from "@/components/projects/projects-info/projects-info-data";
import { cn } from "@/lib/utils";

export function ProjectsInfo() {
    return (
        <div className="grid grid-cols-1 items-start gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
            {PROJECT_INFO.map(({ title, description, icon: Icon }, index) => (
                <div
                    className={cn(
                        "flex flex-col items-center justify-center space-y-1",
                        index === 2
                            ? "col-span-1 mx-auto sm:col-span-2 sm:max-w-[75%] xl:col-span-1 xl:max-w-full"
                            : null
                    )}
                    key={title}
                >
                    <div className="flex flex-col items-center space-y-1">
                        <Icon
                            className="size-8"
                            fill="black"
                        />
                        <p className="text-2xl font-semibold">{title}</p>
                    </div>

                    <p className="w-3/4 text-pretty text-center text-ic-muted">
                        {description}
                    </p>
                </div>
            ))}
        </div>
    );
}
