export type BitsAndBytesEvent = {
	title: string;
	time: string;
	location: string;
	description?: string;
};

export const BIT_AND_BYTES_EVENTS: [
	BitsAndBytesEvent,
	BitsAndBytesEvent,
	BitsAndBytesEvent,
	BitsAndBytesEvent,
] = [
	{
		title: "Bytes Social",
		time: "2025-10-02T19:00",
		location: "University Town Center",
		description:
			"A bytes-only gathering for mentors to meet each other before the program kicks off. It’s the best time to connect with other upperclassmen and find a potential co-byte if you don’t already have one.",
	},
	{
		title: "Meet the Bytes",
		time: "2025-10-08T19:00",
		location: "DBH 3011",
		description:
			"Come meet all the byte pairs in one place! This event is for new ICS students interested in joining the program to see who the mentors are, ask questions, and get a feel for the community before sign-ups close.",
	},
	{
		title: "Bits & Bytes Mixer",
		time: "2025-10-12T14:00",
		location: "William R. Mason Regional Park",
		description:
			"Join us for an afternoon at the park with games, food, and plenty of time to hang out. It’s a casual way for potential bits to meet bytes and other students outside of campus before the official group reveal.",
	},
	{
		title: "Bits & Bytes Group Reveal",
		time: "2025-10-22T19:00",
		location: "DBH 3011",
		description:
			"The wait is over—come find out your Bits & Bytes family for the year! Meet your bytes, celebrate with your co-bits, and team up to compete in fun activities against the other families.",
	},
];
