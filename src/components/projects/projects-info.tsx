import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { GraduationCapIcon, HeartIcon } from "lucide-react";

export function ProjectsInfo() {
    return (
        <div className="grid grid-cols-1 items-start gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-1">
                <div className="flex flex-col items-center space-y-1">
                    <SiGithub className="size-8" />
                    <p className="text-2xl font-semibold">Open Source</p>
                </div>

                <p className="text-ic-muted w-4/5 text-pretty text-center">
                    All of our projects are proudly open source and on our
                    Github
                </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1">
                <div className="flex flex-col items-center space-y-1">
                    <HeartIcon
                        fill="black"
                        className="size-8"
                    />
                    <p className="text-2xl font-semibold">Loved by Anteaters</p>
                </div>

                <p className="text-ic-muted w-4/5 text-pretty text-center">
                    Our projects are trusted and used by tens of thousands of
                    UCI students
                </p>
            </div>

            <div
                className={cn(
                    "mx-auto flex flex-col items-center justify-center space-y-1",
                    "col-span-1 sm:col-span-2 sm:max-w-[50%] lg:col-span-1 lg:max-w-full"
                )}
            >
                <div className="flex flex-col items-center space-y-1">
                    <GraduationCapIcon
                        fill="black"
                        className="size-8"
                    />
                    <p className="text-2xl font-semibold">Built by Students</p>
                </div>

                <p className="text-ic-muted w-4/5 text-pretty text-center">
                    ICSSC Projects is student-led; we recruit new designers and
                    developers every year
                </p>
            </div>
        </div>
    );
}
