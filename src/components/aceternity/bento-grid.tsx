import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid auto-rows-[12rem] grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-neutral-800 p-4",
                className
            )}
        >
            <div />
            <div className="group-hover/bento:border-ic-pink">
                <div className="line-clamp-1 text-3xl font-bold text-ic-pink">
                    {title}
                </div>

                {/* TODO: wrap in tooltip for overflow */}
                <div className="line-clamp-1 text-lg font-normal text-neutral-400">
                    {description}
                </div>
            </div>
        </div>
    );
};
