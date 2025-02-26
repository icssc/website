type Project = {
	name: string;
	githubLink: string;
	projectLink?: string;
	description: string;
	image: string;
};

export const PROJECTS_DATA: Project[] = [
	{
		name: "AntAlmanac",
		githubLink: "https://github.com/icssc/AntAlmanac",
		projectLink: "https://antalmanac.com/",
		description: "A course exploration and scheduling tool for UCI students",
		image: "/projects/AntAlmanac.jpg",
	},
	{
		name: "Anteater API",
		githubLink: "https://github.com/icssc/anteater-api",
		projectLink: "https://anteaterapi.com/reference",
		description: "API providing easy access to public data from UC Irvine",
		image: "/projects/PeterPortalAPI.jpg",
	},
	{
		name: "PeterPortal",
		githubLink: "https://github.com/icssc/peterportal-client",
		projectLink: "https://peterportal.org/",
		description: "Course discovery and planning for UCI students",
		image: "",
	},
	{
		name: "Zotistics",
		githubLink: "https://www.github.com/icssc/Zotistics-beta-23",
		projectLink: "https://beta.zotistics.com/",
		description: "UCI's premier grade distribution analysis tool",
		image: "",
	},
	{
		name: "ZotMeal",
		githubLink: "https://github.com/icssc/ZotMeal",
		projectLink: "",
		description: "UCI Dining Hall menus and information",
		image: "",
	},
	{
		name: "ZotMeet",
		githubLink: "https://www.github.com/icssc/ZotMeet",
		// projectLink: "",
		description: "Efficient meeting scheduling + study room availabilities",
		image: "",
	},
	{
		name: "ZotNFound",
		githubLink: "https://github.com/icssc/ZotNFound",
		projectLink: "https://zotnfound.com/",
		description: "Lost and Found for UCI students",
		image: "",
	},
	{
		name: "ICSSC Fellowship",
		githubLink: "https://github.com/icssc/fellowship",
		projectLink: "https://fellowship.icssc.club/",
		description: "Asynchronous crash course in software and web development",
		image: "/projects/Fellowship.jpg",
	},
];
