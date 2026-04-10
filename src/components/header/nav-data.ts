type NavSubItem = {
	link: string;
	name: string;
};

type NavItem = {
	link?: string;
	name: string;
	children?: NavSubItem[];
	notify?: string;
};

export const NAV_DATA: NavItem[] = [
	{
		link: "/about",
		name: "About",
	},
	{
		link: "/board",
		name: "Board",
		notify: "Meet the incoming executive board!",
	},
	{
		link: "/events",
		name: "Events",
	},
	{
		link: "/projects",
		name: "Projects",
	},
	{
		name: "Sponsors",
		children: [
			{
				link: "/sponsors/aveva",
				name: "AVEVA",
			},
		],
	},
	{
		link: "/contact",
		name: "Contact",
	},
];
