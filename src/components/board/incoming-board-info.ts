type BoardMember = {
	name: string;
	position: string;
	image: string;
	email: string;
};

export const INCOMING_EXEC_BOARD_INFO: BoardMember[] = [
	{
		name: "Anna Lee",
		position: "Co-President",
		email: "chaeeul3@uci.edu",
		image: "/assets/board/anna-lee.jpg",
	},
	{
		name: "Ashley Zhou",
		position: "Co-President",
		email: "ashlejz1@uci.edu",
		image: "/assets/board/ashley-zhou.jpg",
	},
	{
		name: "Ethan Wang",
		position: "Internal Vice President",
		email: "ethannw@uci.edu",
		image: "/assets/board/ethan-wang.jpg",
	},
	{
		name: "Pranavi Gollanapalli",
		position: "External Vice President",
		email: "pgollana@uci.edu",
		image: "/assets/board/pranavi-gollanapalli.png",
	},
];


export const INCOMING_BOARD_INFO: Array<Pick<BoardMember, 'name' | 'position'>> = [
	{
		name: "Sarah Son",
		position: "Treasurer",
	},
	{
		name: "Jeremiah Soe", 
		position: "Secretary",
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
	},
	{
		name: "Andrew Wang",
		position: "Projects Co-Chair",
	},
	{
		name: "Kevin Wu",
		position: "Projects Co-Chair",
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
	},
];