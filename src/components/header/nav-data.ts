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
		link: "/bits-and-bytes",
		name: "Bits & Bytes",
		notify: "Join Bits & Bytes!",
	},
	{
		link: "/board",
		name: "Board",
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
		link: "https://icssc.link/newsletter",
		name: "Newsletter",
	},
	{
		link: "/contact",
		name: "Contact",
	},
];
