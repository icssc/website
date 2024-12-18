import { cn } from "@/lib/utils";

type Project = {
    title: string;
    description: string;
    header: string;
    className?: string;
};

export const PROJECT_DATA: Project[] = [
    {
        title: "AntAlmanac",
        description: "Course exploration and scheduling",
        header: "/landing/bonfire.jpg",
        className: cn("lg:col-span-1"),
    },
    {
        title: "Anteater API",
        description: "API for easy access to public UCI data",
        header: "/landing/bonfire.jpg",
        className: cn("lg:col-span-1"),
    },
    {
        title: "Peterportal",
        description: "Course discovery and planning",
        header: "/landing/bonfire.jpg",
        className: cn("lg:col-span-1"),
    },
    {
        title: "Zotistics",
        description: "Grade distribution analysis",
        header: "/landing/bonfire.jpg",
        className: cn("lg:col-span-1"),
    },
];
