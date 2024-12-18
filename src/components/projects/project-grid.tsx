import { cn } from "@/lib/utils";

export function ProjectGrid() {
    return (
        <div
            className={cn(
                "flex w-full flex-col items-start gap-y-8",
                "px-8 lg:px-16"
            )}
        >
            <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                Your ICS Community
            </h2>

            <div className="grid w-full grid-cols-3">
                <div className="h-48 border">foo</div>
                <div className="border">foo</div>
                <div className="border">foo</div>
                <div className="border">foo</div>
            </div>
        </div>
    );
}
