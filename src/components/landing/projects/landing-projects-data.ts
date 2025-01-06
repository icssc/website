type Project = {
    name: string;
    description: string;
    image: string;
    className?: string;
};

export const LANDING_PROJECTS_DATA: Project[] = [
    {
        name: "AntAlmanac",
        description:
            "A course exploration and scheduling tool for UCI students",
        image: "/landing/bonfire.jpg",
    },
    {
        name: "Anteater API",
        description: "API for easy access to public UCI data",
        image: "/landing/bonfire.jpg",
    },
    {
        name: "Peterportal",
        description: "Course discovery and planning",
        image: "/landing/bonfire.jpg",
    },
    {
        name: "Zotistics",
        description: "Grade distribution analysis",
        image: "/landing/bonfire.jpg",
    },
];
