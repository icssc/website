export type BoardMember = {
	name: string;
	position: string;
	image?: string;
	email?: string;
};

export const BOARD_INFO: BoardMember[] = [
	{
		name: "Anna Lee",
		position: "Co-President",
		email: "chaeeul3@uci.edu",
		image: "/assets/board/2025/anna-lee.jpg",
	},
	{
		name: "Ashley Zhou",
		position: "Co-President",
		email: "ashlejz1@uci.edu",
		image: "/assets/board/2025/ashley-zhou.png",
	},
	{
		name: "Ethan Wang",
		position: "Internal Vice President",
		email: "ethannw@uci.edu",
		image: "/assets/board/2025/ethan-wang.jpg",
	},
	{
		name: "Pranavi Gollanapalli",
		position: "External Vice President",
		email: "pgollana@uci.edu",
		image: "/assets/board/2025/pranavi-gollanapalli.png",
	},
	{
		name: "Sarah Son",
		position: "Treasurer",
	},
	{
		name: "Jeremiah Soe", 
		position: "Secretary",
		image: "/assets/board/2025/jeremiah-soe.jpg"
	},
	{
		name: "Andrew Kim",
		position: "Public Relations Chair",
	},
	{
		name: "Matthew Gray",
		position: "Events Co-Chair",
	},
	{
		name: "Audrey Lu",
		position: "Events Co-Chair",
		image: "/assets/board/2025/audrey-lu.jpg"
	},
	{
		name: "Andrew Wang",
		position: "Projects Co-Chair",
	},
	{
		name: "Kevin Wu",
		position: "Projects Co-Chair",
		image: "/assets/board/2025/kevin-wu.jpg"
	},
	{
		name: "Li Keller",
		position: "Corporate Outreach Chair",
	},
	{
		name: "Himal Malik",
		position: "Academic and Alumni Affairs Chair",
	},
	{
		name: "Nico Hartman",
		position: "Graphics Chair",
	},
	{
		name: "Jay Wu",
		position: "Webmaster",
		image: "/assets/board/2025/jay-wu.png"
	},
];