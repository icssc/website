type Project = {
	name: string;
	githubLink: string;
	projectLink?: string;
	description: string;
	image: string;
};

export const PROJECTS_DATA: Project[] = [
	{
		name: "AntAlmanac Scheduler",
		githubLink: "https://github.com/icssc/AntAlmanac",
		projectLink: "https://antalmanac.com/",
		description: "A course exploration and scheduling tool for UCI students",
		image: "/projects/aa-scheduler.jpg",
	},
		{
		name: "AntAlmanac Planner",
		githubLink: "https://github.com/icssc/peterportal-client",
		projectLink: "https://peterportal.org/",
		description: "Course discovery and planning for UCI students",
		image: "/projects/aa-planner.jpg",
	},
	{
		name: "ZotMeet",
		githubLink: "https://www.github.com/icssc/ZotMeet",
		projectLink: "https://zotmeet.com/",
		description: "Time Sync & Study Room Scheduler",
		image: "/projects/zotmeet.jpg",
	},

	/*
	{
		name: "Zotistics",
		githubLink: "https://www.github.com/icssc/Zotistics-beta-23",
		projectLink: "https://beta.zotistics.com/",
		description: "UCI's premier grade distribution analysis tool",
		image: "/projects/zotistics.jpg",
	},
	*/
	{
		name: "PeterPlate",
		githubLink: "https://github.com/icssc/peterplate",
		projectLink: "",
		description: "UCI Dining Hall menus and information",
		image: "/projects/peterplate.jpg",
	},
	{
		name: "Anteater API",
		githubLink: "https://github.com/icssc/anteater-api",
		projectLink: "https://anteaterapi.com/reference",
		description: "API providing easy access to public data from UC Irvine",
		image: "/projects/aapi.jpg",
	},
	/*
	{
		name: "ZotNFound",
		githubLink: "https://github.com/icssc/ZotNFound",
		projectLink: "https://zotnfound.com/",
		description: "Lost and Found for UCI students",
		image: "/projects/zotnfound.jpg",
	},
	*/
	{
		name: "ICSSC Fellowship",
		githubLink: "https://github.com/icssc/fellowship",
		projectLink: "https://fellowship.icssc.club/",
		description: "Asynchronous crash course in software and web development",
		image: "/projects/fellowship.jpg",
	},
];
