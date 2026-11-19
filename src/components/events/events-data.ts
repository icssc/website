import type { ClubEvent } from "@/components/events/events-types";

/**
 * Every ICSSC event, newest first. See the README ("Webmaster notes: events")
 * for how to add events and photos.
 */
export const EVENTS_DATA: ClubEvent[] = [
	{
		slug: "internship-panel-fall-2026",
		title: "Internship Panel",
		start: "2026-11-18T19:00:00-08:00",
		location: "Donald Bren Hall 6011",
		quarter: "Fall 2026",
		description:
			"Want to know how to land and thrive in a top tech internship? 💼 Join us for our Internship Panel, where students who have interned at leading companies like Google, Amazon, Capital One, and more will share their experiences. Panelists will discuss the application process 📄",
		poster: {
			src: "/assets/events/event_internshp-panel_26.png",
			alt: "Internship Panel poster",
		},
	},
	{
		slug: "brain-games-fall-2026",
		title: "Brain Games",
		start: "2026-11-14T11:00:00-08:00",
		end: "2026-11-14T16:30:00-08:00",
		location: "Student Center Moss Cove AB",
		quarter: "Fall 2026",
		description:
			"Think you have the biggest brain? 🧠🧐 Test your knowledge at Brain Games, our social competition featuring a variety of fun puzzles and games 🧩! Teams of 2-4 people are challenged to use creativity and logic to solve ICS-related challenges while making new friends. Join us for exciting games, free catered lunch 🍝, and ~$200 in prizes for the top 3 teams 🏆!",
		poster: {
			src: "/assets/events/event_brain-games-2026.jpg",
			alt: "Brain Games poster",
		},
	},
	{
		slug: "charades-night-fall-2026",
		title: "Charades Night",
		start: "2026-10-28T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2026",
		description:
			"Think you can act it out without saying a word? Come join us for a fun, competitive night of charades featuring UCI/ICS, pop culture, and Halloween-themed prompts! Bring your friends, split into teams, and see who can guess the most. 🎃 There will also be candy for everyone, with extra candy for the winning team! 👻🍫",
		poster: {
			src: "/assets/events/event_charades-night-2026.jpg",
			alt: "Charades Night poster",
		},
	},
	{
		slug: "spacex-networking-fall-2026",
		title: "SpaceX Networking",
		start: "2026-10-23T13:00:00-07:00",
		location: "ICS 209",
		quarter: "Fall 2026",
		description:
			"Ever wondered what it’s like to work at SpaceX? Come meet Software and Electrical Engineers from SpaceX for an afternoon of networking, career insights, and candid conversations. Connect one-on-one with engineers, learn about their journeys, and get your questions answered directly by industry professionals.",
		poster: {
			src: "/assets/events/event_spacex-networking-2026.jpg",
			alt: "SpaceX Networking poster",
		},
	},
	{
		slug: "networking-night-fall-2026",
		title: "Networking Night",
		start: "2026-10-22T18:00:00-07:00",
		location: "UCI Student Center @ Doheny Beach",
		quarter: "Fall 2026",
		description:
			"Your next career connection starts here! Want to meet tech professionals and recruiters without the awkward small talk? ICSSC and BiT’s Networking Night is bringing industry professionals straight to YOU for an evening of interactive games, speed networking, and real conversations!",
		poster: {
			src: "/assets/events/event_networking-night-2026.jpg",
			alt: "Networking Night poster",
		},
	},
	{
		slug: "resume-review-fall-2026",
		title: "Resume Review",
		start: "2026-10-14T19:00:00-07:00",
		location: "DBH 1600",
		quarter: "Fall 2026",
		description:
			"Join ICSSC alums and legends Kevin and Jay Wu, who’ve worked at Stripe, Google, Cloudflare, and Scale AI, for a resume workshop 📝! They’ll break down what makes a resume stand out, how to effectively communicate your experience, and the common pitfalls that can keep a strong resume from getting noticed.",
		poster: {
			src: "/assets/events/event_resume-review-2026.jpg",
			alt: "Resume Review poster",
		},
	},
	{
		slug: "meet-the-bytes-fall-2026",
		title: "Meet the Bytes",
		start: "2026-10-07T19:00:00-07:00",
		location: "ICS 428",
		quarter: "Fall 2026",
		description:
			"ICSSC’s year-long mentorship program pairs mentors (bytes) with small groups of new ICS students (bits) 🤖 👥. Come out and meet our Bytes this Wednesday so that you can find the Byte best fitted to support you as a Bit! 🤝 Take this chance to meet new friends and stay connected with the ICS community through events that promote academic success and community bonding.",
		poster: {
			src: "/assets/events/event_meet-the-bytes-2026.jpg",
			alt: "Meet the Bytes poster",
		},
	},
	{
		slug: "meet-the-board-and-committees-fall-2026",
		title: "Meet the Board & Committees",
		start: "2026-09-30T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2026",
		description:
			"It's that time of the year again for our FIRST GENERAL MEETING‼️ Want to learn more about ICSSC, its leadership, and its committees? Come out this Wednesday to meet our board members and learn how 👉YOU👈 can get involved in a committee this year! We'll be hosting a presentation on the structure of our org and offering some time to speak individually to our board members. Shortly after the meeting, we'll also be opening our committee applications for the year - don't miss it!",
		poster: {
			src: "/assets/events/event_meet-the-board-2026.jpg",
			alt: "Meet the Board & Committees poster",
		},
	},
	{
		slug: "financial-literacy-workshop-spring-2026",
		title: "Financial Literacy Workshop",
		start: "2026-04-22T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2026",
		description:
			"Learn how to take control of your money and reach your financial goals at our Financial Literacy Workshop! Our guest speaker from Fidelity will discuss how to create a realistic budget, what steps you can take to boost your credit score, and how investing can help you build financial independence. We'll end with a game and prize, but everyone will gain priceless financial advice!",
		poster: {
			src: "/assets/events/event_financial-literacy-workshop-2026.png",
			alt: "Financial Literacy Workshop poster",
		},
	},
	{
		slug: "waddle-and-wildflowers-spring-2026",
		title: "Waddle & Wildflowers",
		start: "2026-04-15T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2026",
		description:
			"Florals, for spring? Join us for Waddle & Wildflowers to craft groundbreaking pipe cleaner bouquets and style the next runway rubber duck for rubber duck debugging! That's all.",
		poster: {
			src: "/assets/events/event_waddle-and-wildflowers-2026.png",
			alt: "Waddle & Wildflowers poster",
		},
	},
	{
		slug: "ice-skating-fundraiser-spring-2026",
		title: "Ice Skating Fundraiser",
		start: "2026-04-12T14:00:00-07:00",
		location: "Great Park Ice",
		quarter: "Spring 2026",
		description:
			"Are you freezing outside? Does your skin feel tight? Is your coat inside? Join CareTech, Cyber, ICSSC, and U See Eyes for a joint ice skating fundraiser at Great Park Ice!",
		poster: {
			src: "/assets/events/event_ice-skating-2026.png",
			alt: "Ice Skating Fundraiser poster",
		},
	},
	{
		slug: "egg-hunt-debugging-spring-2026",
		title: "Egg Hunt Debugging",
		start: "2026-04-08T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2026",
		description:
			"Join us for Egg Hunt Debugging, where the classic egg hunt meets code, and pastels meet programming! Search for eggs hidden in DBH filled with sweet code snippets, then piece them together to solve the problem. Come test your egg hunting and debugging skills with a little spring madness!",
		poster: {
			src: "/assets/events/event_egg-hunt-debugging-2026.png",
			alt: "Egg Hunt Debugging poster",
		},
	},
	{
		slug: "executive-candidate-speeches-spring-2026",
		title: "Executive Candidate Speeches",
		start: "2026-04-01T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2026",
		description:
			"It's the start of Spring Quarter and election season for next year's board! Join us for Executive Candidate Speeches to hear each candidate's vision and goals for President, Internal Vice President, and External Vice President. Voting will open immediately after, so be sure to make your voice count!",
		poster: {
			src: "/assets/events/event_board-election-speeches-2026.png",
			alt: "Executive Candidate Speeches poster",
		},
	},
	{
		slug: "ics-family-feud-winter-2026",
		title: "ICS Family Feud",
		start: "2026-03-04T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2026",
		description:
			"We asked 85 ICS students...the top answers are on the board. Join us for ICS Family Feud, our last general meeting of the quarter, hosted by our very own local Steve Harvey! Teams will go head-to-head to guess the most popular answers to ICS-related questions. Get ready for a fun night of friendly competition, fast buzzers, and full game show energy. Survey says...we hope to see you there!",
		poster: {
			src: "/assets/events/event_family-feud.png",
			alt: "ICS Family Feud poster",
		},
	},
	{
		slug: "google-corporate-tour-winter-2026",
		title: "Google Corporate Tour",
		start: "2026-02-27T13:00:00-08:00",
		location: "Google LA",
		quarter: "Winter 2026",
		description:
			"Our corporate tour at Google in LA! The tour will consist of insights from software engineers and product managers, conversations with former interns, and an interactive Q&A session. This is a great opportunity to learn about career paths at Google and connect with industry professionals.",
		poster: {
			src: "/assets/events/event_corporate-tour-google.png",
			alt: "Google Corporate Tour poster",
		},
	},
	{
		slug: "research-panel-winter-2026",
		title: "Research Panel",
		start: "2026-02-25T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2026",
		description:
			"Join us for a research panel featuring faculty members and current graduate students as they share insights into their research, academic journeys, and what research looks like at different stages of higher education. Panelists will discuss how they got involved in research, what they look for in undergraduate researchers, and practical steps you can take to get started.",
		poster: {
			src: "/assets/events/event_research-panel.png",
			alt: "Research Panel poster",
		},
	},
	{
		slug: "brain-games-winter-2026",
		title: "Brain Games",
		start: "2026-02-21T11:00:00-08:00",
		location: "Doheny Beach ABCD",
		quarter: "Winter 2026",
		description:
			"ICSSC proudly presents Brain Games, our social competition featuring a variety of fun puzzles and games! Teams of 2-4 people are challenged to use creativity and logic to solve challenges while making new friends.",
		poster: {
			src: "/assets/events/event_braingames-2026.png",
			alt: "Brain Games poster",
		},
	},
	{
		slug: "ics-club-fair-winter-2026",
		title: "ICS Club Fair",
		start: "2026-02-18T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2026",
		description:
			"It's never too late to get involved and connect with the ICS community! Whether you're joining your first club or looking to get more involved, stop by the ICS Club Fair to explore and learn about 14 different clubs! Participating clubs include: ACM, AI, BiT, Blockchain, CareTech, CTC, Cyber, Data, Design, Hack, ICSSC, QC, VGDC, and WICS.d",
		poster: {
			src: "/assets/events/event_ics-club-fair.png",
			alt: "ICS Club Fair poster",
		},
	},
	{
		slug: "how-designers-and-developers-collaborate-w-dauci-winter-2026",
		title: "How Designers & Developers Collaborate w/ DAUCI",
		start: "2026-02-11T17:00:00-08:00",
		location: "SE2 1304",
		quarter: "Winter 2026",
		description:
			"In collaboration with Design at UCI, this joint workshop will walk through the workflow between designers and developers, highlighting where they overlap and differ, how to communicate design decisions to engineers, and best practices for collaboration. Bring your laptop for an interactive activity on Figma!",
		poster: {
			src: "/assets/events/event_designer-developer-collaboration-workshop.png",
			alt: "How Designers & Developers Collaborate w/ DAUCI poster",
		},
	},
	{
		slug: "browser-extensions-101-winter-2026",
		title: "Browser Extensions 101",
		start: "2026-02-04T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2026",
		description:
			"Ever wondered how your ad blocker or password manager works? Or thought about making your own extension? Join us for Browser Extensions 101, where you'll learn the basics of building one yourself. No prior experience required, just curiosity and interest!",
		poster: {
			src: "/assets/events/event_browser-extension-workshop.png",
			alt: "Browser Extensions 101 poster",
		},
	},
	{
		slug: "sip-and-scribble-winter-2026",
		title: "Sip & Scribble",
		start: "2026-01-28T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2026",
		description:
			"Get into the winter quarter vibe with our free hot cocoa bar (with toppings!) and team up with friends to play Pictionary: Computer Science Edition!",
		poster: {
			src: "/assets/events/event_sip-n-scribble.png",
			alt: "Sip & Scribble poster",
		},
	},
	{
		slug: "mock-interview-part-2-winter-2026",
		title: "Mock Interview Part 2",
		start: "2026-01-21T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2026",
		description:
			"Part 2 of our series with CTC offers hands-on interview experience with industry professionals. Attendees will participate in mock interviews that mirror real-world behavioral and technical interviews, followed by personalized feedback to strengthen communication, problem-solving, and overall interview performance.",
		poster: {
			src: "/assets/events/event_mock-interview-2.png",
			alt: "Mock Interview Part 2 poster",
		},
	},
	{
		slug: "mock-interview-part-1-acing-your-interview-w-ctc-winter-2026",
		title: "Mock Interview Part 1: Acing Your Interview w/ CTC",
		start: "2026-01-14T19:00:00-08:00",
		location: "ICS 428",
		quarter: "Winter 2026",
		description:
			"Get ready to level up your interview skills with our two-part mock interview series in collaboration with CTC! This first event will walk you through how to craft strong, memorable answers to behavioral questions while also sharing practical tips for succeeding in technical interviews. From communicating your experiences to demonstrating problem-solving skills, you will leave feeling more prepared and confident for your next interview.",
		poster: {
			src: "/assets/events/event_mock-interview-1.png",
			alt: "Mock Interview Part 1: Acing Your Interview w/ CTC poster",
		},
	},
	{
		slug: "sliding-into-the-new-year-winter-2026",
		title: "Sliding Into the New Year",
		start: "2026-01-07T19:00:00-08:00",
		location: "DBH 3011",
		quarter: "Winter 2026",
		description:
			"Come slide into the new year with ICSSC's first event of Winter Quarter, Group Presentation Night! Teams will create a 2-3 minute presentation on any (PG) topic and present to the room. This will be a fun way to reconnect with new and familiar faces after the break. Expect laughs, creativity, and a little friendly chaos!",
		poster: {
			src: "/assets/events/event_sliding-into-the-new-year-2026.png",
			alt: "Sliding Into the New Year poster",
		},
	},
	{
		slug: "leetcode-study-groups-winter-2026",
		title: "LeetCode Study Groups",
		start: "2026-01-02T19:00:00-08:00",
		location: "DBH 3011",
		quarter: "Winter 2026",
		description:
			"Looking to improve your LeetCode skills? Have you been struggling to keep yourself locked in? ICSSC's LeetCode Study Groups is returning for a second year! If you've been assigned a group, join us for the program's kickoff at DBH!",
		poster: {
			src: "/assets/events/event_leetcode-study-groups-2026.png",
			alt: "LeetCode Study Groups poster",
		},
	},
	{
		slug: "hobby-hangout-fall-2025",
		title: "Hobby Hangout",
		start: "2025-12-03T19:00:00-08:00",
		location: "DBH 3011",
		quarter: "Fall 2025",
		description:
			"Feeling the end-of-quarter stress? Need a break during Week 10? Join us for our Hobby Hangout! Come hang out, bring your favorite hobby to work on, and enjoy a cozy movie night. Perfect for a midweek reset and to unwind.",
		poster: {
			src: "/assets/events/event_hobby-hangout-2025.png",
			alt: "Hobby Hangout poster",
		},
	},
	{
		slug: "fall-quarter-internal-all-hands-fall-2025",
		title: "Fall Quarter Internal All-Hands",
		start: "2025-11-20T18:30:00-08:00",
		location: "PCB 1100",
		quarter: "Fall 2025",
		description:
			"Join us for our Fall Quarter All-Hands meeting to discuss progress, plans, and connect with fellow committee members.",
	},
	{
		slug: "wiki-racing-fall-2025",
		title: "Wiki Racing",
		start: "2025-11-19T19:00:00-08:00",
		location: "DBH 3011",
		quarter: "Fall 2025",
		description:
			"Ready, set, click! Join ICSSC for a night of Wiki Racing, a game where you'll race from a starting Wikipedia page to a destination article using only the internal hyperlinks. The first player to reach the destination or the one who takes the fewest clicks wins!",
		poster: {
			src: "/assets/events/event_wikirace-2025.png",
			alt: "Wiki Racing poster",
		},
	},
	{
		slug: "icssc-x-ucr-acm-ics-pathways-panel-fall-2025",
		title: "ICSSC x UCR ACM: ICS Pathways Panel",
		start: "2025-11-12T19:00:00-08:00",
		location: "Zoom",
		quarter: "Fall 2025",
		description:
			"Wondering what different pathways there are in ICS? (Hint: there's more than just software engineering!) Do you also want to know what classes you can take to land these roles? Well, look no further than our upcoming ICS Pathways and Specialization Panel. Along with ACM @ UCR, you'll get to hear how specializing helps prepare for industry and what classes you can take! Don't miss this opportunity to explore your CS pathway!",
		poster: {
			src: "/assets/events/event_ics-pathways.png",
			alt: "ICSSC x UCR ACM: ICS Pathways Panel poster",
		},
	},
	{
		slug: "webjam-fall-2025",
		title: "WebJam",
		start: "2025-11-03T19:00:00-08:00",
		location: "DBH and Student Center",
		quarter: "Fall 2025",
		description:
			"ICSSC's annual WebJam is back! Join us for a week-long programming competition where you'll work on web application design and development in teams of 1-4. Learn more at https://webjam.icssc.club.",
		poster: {
			src: "/assets/events/event_webjam-2025.png",
			alt: "WebJam poster",
		},
	},
	{
		slug: "cha-fundraiser-fall-2025",
		title: "Cha Fundraiser",
		start: "2025-10-29T19:00:00-07:00",
		location: "University Town Center",
		quarter: "Fall 2025",
		description:
			"Support ICSSC by grabbing some boba at UTC! Don't forget to show the flyer when you order to help us fundraise! Enjoy some delicious drinks with friends!",
		poster: {
			src: "/assets/events/event_cha-fundraiser-2025.png",
			alt: "Cha Fundraiser poster",
		},
	},
	{
		slug: "resume-workshop-fall-2025",
		title: "Resume Workshop",
		start: "2025-10-29T19:00:00-07:00",
		location: "ICS 428",
		quarter: "Fall 2025",
		description:
			"Join us for an exclusive Resume Workshop featuring recruiters from Northrop Grumman and Obsidian Entertainment! Learn firsthand what top employers look for in a standout resume, common red flags to avoid, and how to make your application rise above the rest.",
		poster: {
			src: "/assets/events/event_resume-workshop-2025.png",
			alt: "Resume Workshop poster",
		},
	},
	{
		slug: "dave-and-buster-s-fundraiser-fall-2025",
		title: "Dave and Buster's Fundraiser",
		start: "2025-10-25T14:00:00-07:00",
		location: "Irvine Spectrum Center",
		quarter: "Fall 2025",
		description:
			"Join us for an afternoon of games and fun at Dave and Buster's! Support ICSSC while enjoying arcade games, food, and hanging out with friends from 2-5 PM.",
	},
	{
		slug: "bits-and-bytes-group-reveal-fall-2025",
		title: "Bits & Bytes Group Reveal",
		start: "2025-10-22T19:00:00-07:00",
		location: "University Town Center",
		quarter: "Fall 2025",
		description:
			"The wait is over—come find out your Bits & Bytes family for the year! Meet your bytes, celebrate with your co-bits, and team up to compete in fun activities against the other families.",
		poster: {
			src: "/assets/events/event_bits-and-bytes-reveal-2025.jpg",
			alt: "Bits & Bytes Group Reveal poster",
		},
	},
	{
		slug: "obsidian-corporate-tour-fall-2025",
		title: "Obsidian Corporate Tour",
		start: "2025-10-22T13:30:00-07:00",
		location: "Obsidian Office",
		quarter: "Fall 2025",
		description:
			"The corporate tour application for Obsidian Entertainment is now open! Applications will close next Wednesday, October 8th at 11:59 PM. More information about the application process can be found on the form itself.",
		poster: {
			src: "/assets/events/event_obsidian-corporate-tour-2025.jpg",
			alt: "Obsidian Corporate Tour poster",
		},
	},
	{
		slug: "roller-skating-fundraiser-fall-2025",
		title: "Roller Skating Fundraiser",
		start: "2025-10-18T18:00:00-07:00",
		location: "Fountain Valley Skating Center",
		quarter: "Fall 2025",
		description:
			"As Silk Sonic would say, skate and slide your way on over to our ICSSC roller skating fundraiser! This Saturday evening (and always), we wanna get to know ya!",
		poster: {
			src: "/assets/events/event_roller-skating-2025.jpg",
			alt: "Roller Skating Fundraiser poster",
		},
	},
	{
		slug: "internship-panel-fall-2025",
		title: "Internship Panel",
		start: "2025-10-15T19:00:00-07:00",
		location: "DBH 3011",
		quarter: "Fall 2025",
		description:
			"Curious about what it’s like to land and thrive in a top tech internship? Join us for our Internship Panel, where students who have interned at leading companies like Meta, Microsoft, Amazon, and more will share their experiences.",
	},
	{
		slug: "bits-and-bytes-mixer-fall-2025",
		title: "Bits & Bytes Mixer",
		start: "2025-10-12T14:00:00-07:00",
		location: "William R. Mason Regional Park",
		quarter: "Fall 2025",
		description:
			"Join us for an afternoon at the park with games, food, and plenty of time to hang out. It’s a casual way for potential bits to meet bytes and other students outside of campus before the official group reveal.",
	},
	{
		slug: "meet-the-bytes-fall-2025",
		title: "Meet the Bytes",
		start: "2025-10-08T19:00:00-07:00",
		location: "DBH 3011",
		quarter: "Fall 2025",
		description:
			"Come meet all the byte pairs in one place! This event is for new ICS students interested in joining the program to see who the mentors are, ask questions, and get a feel for the community before sign-ups close.",
	},
	{
		slug: "bytes-social-fall-2025",
		title: "Bytes Social",
		start: "2025-10-02T19:00:00-07:00",
		location: "DBH 3011",
		quarter: "Fall 2025",
		description:
			"A bytes-only gathering for mentors to meet each other before the program kicks off. It’s the best time to connect with other upperclassmen and find a potential co-byte if you don’t already have one.",
	},
	{
		slug: "first-general-meeting-fall-2025",
		title: "First General Meeting",
		start: "2025-10-01T19:00:00-07:00",
		location: "SH 134",
		quarter: "Fall 2025",
		description:
			"Our first ICSSC General Meeting is tonight!⭐ Come learn about the structure of our organization and how YOU can get involved in one of our six committees. This is a great time to talk to our board members and ask any questions that you might have before applying. We'll also be releasing more information about our upcoming corporate tours to Obsidian Entertainment and Advantest at the meeting. There will be a UTC social afterwards! 🌯",
		poster: {
			src: "/assets/events/event_first-general-meeting-2025.jpg",
			alt: "First General Meeting poster",
		},
	},
	{
		slug: "ics-bonfire-fall-2025",
		title: "ICS Bonfire",
		start: "2025-09-26T17:00:00-07:00",
		location: "Corona Del Mar Fire Pits",
		quarter: "Fall 2025",
		description:
			"As Professor Shindler always says: “CS is a social activity” 💃🏻🕺🏻🪩. Get social on a summer night 🌅 with us along with free pizza 🍕, yummy s’mores 🍫, and people from a wide variety of ICS clubs 🧑🏽‍💻👩🏼‍💻👨🏿‍💻! Rides will be provided to the event first come first serve.",
		poster: {
			src: "/assets/events/event_ics-bonfire-2025.jpg",
			alt: "ICS Bonfire poster",
		},
	},
	{
		slug: "meet-the-board-fall-2025",
		title: "Meet the Board",
		start: "2025-09-24T19:00:00-07:00",
		location: "DBH 3011",
		quarter: "Fall 2025",
		description:
			"✨ Curious about ICSSC? ✨ Come meet the board behind our six committees — AAA, Corporate, Events, PR, Graphics, and Projects! 🎉 Join us for Meet the Board + Q&A to connect with board members, learn what each committee does, and ask any questions before the quarter kicks off. Committee applications open after the meeting!",
		poster: {
			src: "/assets/events/event_meet-the-board-2025.jpg",
			alt: "Meet the Board poster",
		},
	},
	{
		slug: "ics-prom-spring-2025",
		title: "ICS Prom",
		start: "2025-06-04T18:30:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2025",
		description:
			"Step into the spotlight and try your luck at this year's casino-themed ICS Prom! 🍀 🎲 Join us for an evening of games, music, and great vibes with fellow ICS students and clubs - go all in to close out the year! ♠️♥️♣️♦️",
		poster: {
			src: "/assets/events/event_ics-prom-2025.jpg",
			alt: "ICS Prom poster",
		},
	},
	{
		slug: "ics-fair-spring-2025",
		title: "ICS Fair",
		start: "2025-05-23T10:00:00-07:00",
		location: "Engineering Gateway",
		quarter: "Spring 2025",
		description:
			"🤠Giddy up, Anteaters! The ICS Fair is back and better than ever! 🎉 Come explore booths from ICS clubs with games, activities, and ways to get involved! Earn tickets as you go and trade them in for awesome prizes!",
		poster: {
			src: "/assets/events/event_ics-fair-2025.png",
			alt: "ICS Fair poster",
		},
	},
	{
		slug: "type-type-revolution-spring-2025",
		title: "Type Type Revolution",
		start: "2025-05-21T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2025",
		description:
			"Ever sing along to a song without actually knowing the lyrics? 🎵 Time to put that to the test at Type Type Revolution ⌨️! Team up with a partner to type ✍️ out the lyrics to your favorite songs 🎤 while jamming to smash hits 🍓🔨 from the past ⌛. Think fast, type faster, and see if you can keep up with the beat! ⌨️",
		poster: {
			src: "/assets/events/event_type-type-revolution.png",
			alt: "Type Type Revolution poster",
		},
	},
	{
		slug: "life-after-ics-alumni-panel-spring-2025",
		title: "Life After ICS: Alumni Panel",
		start: "2025-05-14T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2025",
		description:
			"Ever wondered what life is like after you graduate whether that be industry💼, graduate school🎓, looking for a job🔎, and more? Join us for an engaging alumni panel featuring former undergraduates from the ICS department!🧑‍💼👩‍💼👨‍💼\n\nThis is your chance to ask your burning questions🔥about what your future may look like and gain insights into their experiences and advice for navigating the ICS field.💡You'll have the opportunity to hear insights regarding transitioning into different vocations, gain advice from your former peers and alumni from UCI, and learn more about various personal and post-graduation experiences.",
		poster: {
			src: "/assets/events/event_life-after-ics.png",
			alt: "Life After ICS: Alumni Panel poster",
		},
	},
	{
		slug: "icssc-x-fusion-bridge-building-spring-2025",
		title: "ICSSC x Fusion Bridge Building",
		start: "2025-05-06T19:00:00-07:00",
		location: "Ring Room @ Cross-Cultural Center",
		quarter: "Spring 2025",
		description:
			"Join ICSSC x Fusion to build bridges - both literally and socially! 🌉\n\nGet ready for a night of hands-on engineering challenges ⚔️ - come test your skills in:\n\n🚗 Bridge Building Showdown: Team up to design a bridge strong enough to support a car and survive a coin weight test! 💪\n✈️ Paper Airplane Competition: Work together to create a detailed protocol on how to fold a paper airplane!\n\nBring your ideas and meet new faces - don't miss this fusion of fun! 😉🤣",
		poster: {
			src: "/assets/events/event_fusion-icssc.png",
			alt: "ICSSC x Fusion Bridge Building poster",
		},
	},
	{
		slug: "game-night-spring-2025",
		title: "Game Night",
		start: "2025-04-23T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2025",
		description:
			"Wanna play a game 🎮 before midterms season? Or maybe two? Or three 👀? Come to ICSSC Game Night‼️ Join your friends 👯 in playing some fun games on a switch or classics 🃏 like uno, jenga, poker ♥️ ♠️♦️♣️, and more! There will be snacks 🍪 too to recharge in between games 🧁🫶",
		poster: {
			src: "/assets/events/event_game-night.png",
			alt: "Game Night poster",
		},
	},
	{
		slug: "egg-hunt-spring-2025",
		title: "Egg Hunt",
		start: "2025-04-16T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2025",
		description:
			"Spring has sprung - and you know what that means… EGG HUNT TIME! 🐣🌸 Join ICSSC during Week 3 for a super fun 🕵️‍♀️ partner egg hunt adventure through DBH! Work together, out-sleuth other teams, and see who can collect the most eggs hidden throughout the building! 🧺✨ 🥇The winning team gets a special prize — and eternal ICSSC bragging rights 😉",
		poster: {
			src: "/assets/events/event_egghunt2025.png",
			alt: "Egg Hunt poster",
		},
	},
	{
		slug: "icssc-elections-spring-2025",
		title: "ICSSC Elections",
		start: "2025-04-09T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2025",
		description:
			"ARE YOU 🫵 READY FOR ICSSC ELECTIONS⁉️ Starting today, the positions for Executive Board (President, Internal Vice President, and External Vice President) of ICS Student Council are available for election for the 2025-26 school year.",
		poster: {
			src: "/assets/events/event_elections.png",
			alt: "ICSSC Elections poster",
		},
	},
	{
		slug: "pickleball-spring-2025",
		title: "Pickleball",
		start: "2025-04-02T19:00:00-07:00",
		location: "ARC Upper Field Pickleball Courts",
		quarter: "Spring 2025",
		description:
			"🥒🏓 Start off your Spring Quarter with a new hobby: Pickleball! We'll have experienced players on hand to show you the ropes, and extra equipment available to borrow. Whether you're looking to learn or just have a good time, it's the perfect opportunity to meet new people, enjoy the game, and touch grass. See you on the courts!!😎",
		poster: {
			src: "/assets/events/event_pickleball.png",
			alt: "Pickleball poster",
		},
	},
	{
		slug: "aux-battle-winter-2025",
		title: "Aux Battle",
		start: "2025-03-12T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"🎶 🎧 🔊 Feeling groovy before Finals? Maybe even a bit competitive too? Come join us for the LAST event of the quarter 🎊 in a battle of musical knowledge 🎼 🧠 where you and your friends can prove who has the more refined, cultured audio palette! 🎶 ✨",
		poster: {
			src: "/assets/events/event_aux-battle.jpg",
			alt: "Aux Battle poster",
		},
	},
	{
		slug: "chapman-x-icssc-utc-mixer-winter-2025",
		title: "Chapman x ICSSC UTC Mixer",
		start: "2025-03-07T18:00:00-08:00",
		location: "University Town Center",
		quarter: "Winter 2025",
		description:
			"💌 Want to make new friends? Need a study buddy? Look no further! Find them at our upcoming Chapman CS Club x UCI ICSSC Mixer! 🛒 Join us at University Town Center next Friday for an intercollegiate social event! Meet new students, participate in a special icebreaker to find your 'perfect match,' and shop around UTC before kicking off your weekend!",
		poster: {
			src: "/assets/events/event_chapman-mixer.jpg",
			alt: "Chapman x ICSSC UTC Mixer poster",
		},
	},
	{
		slug: "squid-game-social-winter-2025",
		title: "Squid Game Social",
		start: "2025-03-05T18:30:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"No need to wait for the green light 🟢 — join ICSSC and IEEE for a Squid Game inspired social night 💃 ! Test your skills, compete in fun games 🏅 , and make new friends 👯 along the way (losers will make it out alive... or will they?🔪🔪 ). Challenge yourself in a friendly competition and see who comes out on top! 🏆 🦑",
		poster: {
			src: "/assets/events/event_squid-game.jpg",
			alt: "Squid Game Social poster",
		},
	},
	{
		slug: "research-panel-winter-2025",
		title: "Research Panel",
		start: "2025-02-26T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"💡 Ever wondered what drives your professor’s passion for research? Now’s your chance to find out! 📢 Join us for an engaging ICS research panel! 🗣️ 👩‍💻👨‍💻 ✨ This is your opportunity to hear from Professor Shen, Professor Hayes, Professor Garcia, and student researchers about their work, experiences, and advice for getting involved in research. Don’t miss out! 🎙️🤩 📌 Come with questions and curiosity! We can’t wait to see you there. 👀🙌",
		poster: {
			src: "/assets/events/event_research-panel.jpg",
			alt: "Research Panel poster",
		},
	},
	{
		slug: "planning-your-academic-journey-winter-2025",
		title: "Planning Your Academic Journey",
		start: "2025-02-19T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"Struggling to choose your courses for the next year? 🤯 Come and hear from ICSSC Projects, where we tell you about our own experiences and tools that we’ve developed to ease the course planning process. 📘📔📗 Join us to learn how to visualize your 4 year plan, avoid scheduling conflicts, and stay on track for graduation! 🎢",
		poster: {
			src: "/assets/events/event_planning-your-academic-journey.jpg",
			alt: "Planning Your Academic Journey poster",
		},
	},
	{
		slug: "cupid-s-mailbox-crafts-winter-2025",
		title: "Cupid's Mailbox Crafts",
		start: "2025-02-12T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"🫵🏼 Debug your love life this Valentine’s Day—come decorate a mailbox and finally send a message that’s more than just “Hello World”! 🍫If your love life feels as empty as your GitHub repo, it’s time to fill it with treats and valentines at Cupid’s Mailbox! 💌 We’ll provide all the materials you need to craft your perfect mailbox—whether you’re sending valentines to someone special or yourself (no judgement), we’ve got you covered!",
		poster: {
			src: "/assets/events/event_cupids-mailbox-crafts.jpg",
			alt: "Cupid's Mailbox Crafts poster",
		},
	},
	{
		slug: "intro-to-ai-workshop-winter-2025",
		title: "Intro to AI Workshop",
		start: "2025-02-05T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"🚀 Want to dive into Artificial Intelligence?🤖 Join AI@UCI & ICSSC for a fun and interactive hands-on Intro to AI Workshop where you'll train your own model and learn the basics of AI! Then, put your knowledge to the test in a game of Kahoot for a chance to win $40 in gift card prizes!🎉 Stick around after for a social at UTC! 🍕✨",
		poster: {
			src: "/assets/events/event_intro-to-ai-workshop.jpg",
			alt: "Intro to AI Workshop poster",
		},
	},
	{
		slug: "resume-workshop-winter-2025",
		title: "Resume Workshop",
		start: "2025-01-29T19:00:00-08:00",
		location: "Zoom",
		quarter: "Winter 2025",
		description:
			"Feeling the heat of internship season? 🫨 Receive resume feedback at our ICSSC Resume Workshop this Wednesday 7-8pm on Zoom! 🖥️ Work with upper-classmen to integrate action words and metrics to capture recruiters’ attention. 🧑‍💻👩‍💻",
		poster: {
			src: "/assets/events/event_resume-workshop.jpg",
			alt: "Resume Workshop poster",
		},
	},
	{
		slug: "ics-faculty-panel-winter-2025",
		title: "ICS Faculty Panel",
		start: "2025-01-22T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"Ever wondered what drives your professors’ passion for teaching and research? 🧑‍🏫 Join us for an engaging faculty panel featuring professors and teaching assistants from the ICS department! 🖥️ This is your chance to connect with them beyond the classroom, ask questions, and gain insights into their experiences and advice for navigating the ICS field. 🙋",
		poster: {
			src: "/assets/events/event_icssc-faculty-panel.jpg",
			alt: "ICS Faculty Panel poster",
		},
	},
	{
		slug: "ics-club-fair-winter-2025",
		title: "ICS Club Fair",
		start: "2025-01-15T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"Did you know there are 13 ICS clubs? 🤯 With so many options, how do you pick the right one for you? 🤔 Join us at the ICS Club Fair next week to explore each club, meet like-minded club members, and discover your perfect community (or communities)! 💻 🎉",
		poster: {
			src: "/assets/events/event_ics-club-fair-2025.jpg",
			alt: "ICS Club Fair poster",
		},
	},
	{
		slug: "sliding-into-the-new-year-winter-2025",
		title: "Sliding Into the New Year",
		start: "2025-01-08T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2025",
		description:
			"Slide into Winter Quarter with us and join us for our first general meeting and event! ❄️ We'll be going over our planned upcoming events for the quarter, including Brain Games 🧠 and the ICS Club Fair 🤝 ! Afterwards, join us for our Slideshow Showdown - create a slideshow on anything you choose and present it!",
		poster: {
			src: "/assets/events/event_sliding-into-the-new-year.jpg",
			alt: "Sliding Into the New Year poster",
		},
	},
	{
		slug: "cookie-decorating-fall-2024",
		title: "Cookie Decorating",
		start: "2024-12-04T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Want a break from studying? Need some sweets and social interaction before locking in? 🍪 Come out to ICSSC's Cookie Decorating on Wednesday! We have cookies ready for you to glamourize with frosting and sprinkles! Bring your friends and have a fun, festive time! 🎄",
		poster: {
			src: "/assets/events/event_cookie-decorating.jpg",
			alt: "Cookie Decorating poster",
		},
	},
	{
		slug: "hackathon-101-fall-2024",
		title: "Hackathon 101",
		start: "2024-11-14T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Are you coming to WebJam and have no idea where to start? 👩‍💻Or are you thinking on applying to any of the UCI Hackathons this year? 👾 Maybe you just have no idea what a Hackathon even is but would like to change that! Join ICSSC and Hack at UCI on our Hackathon prep sesh, right before our Week 8 WebJam.",
		poster: {
			src: "/assets/events/event_hackathon-101.jpg",
			alt: "Hackathon 101 poster",
		},
	},
	{
		slug: "ics-pathways-fall-2024",
		title: "ICS Pathways",
		start: "2024-11-13T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Wondering what your future in ICS looks like with a specialization? Well look no further than our upcoming ICS Pathways Classes and Specialization Panel with ICS Alumni. You’ll get to hear how specializing helped them prepare for industry, know what classes were their favorite! Don’t miss this opportunity to explore your CS pathway and gain valuable insights from alumni who’ve navigated these decisions before you.",
		poster: {
			src: "/assets/events/event_ics-pathways.jpg",
			alt: "ICS Pathways poster",
		},
	},
	{
		slug: "artsty-autumn-fall-2024",
		title: "Artsty Autumn",
		start: "2024-11-08T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"If you love fall too, come and unwind with some festive fall craft activities TOMORROW! 🎃 We'll have 3 different artsy stations: mini pumpkins decorating, coloring pages, and origami.",
		poster: {
			src: "/assets/events/Artsy_Autumn_IG.jpg",
			alt: "Artsty Autumn poster",
		},
	},
	{
		slug: "two-rooms-and-a-boom-fall-2024",
		title: "Two Rooms and a Boom!",
		start: "2024-11-06T19:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Do you like socializing or problem solving better? Well you can do both with social deduction! You’ve probably played Werewolf, Mafia, or AMONG US, but this Wednesday will feature the fantastic game Two Rooms and a Boom, which actually takes place in two real life rooms! Come join us in a battle of wits against your friends!",
		poster: {
			src: "/assets/events/event_two-rooms-and-a-boom.jpg",
			alt: "Two Rooms and a Boom! poster",
		},
	},
	{
		slug: "mock-interviews-fall-2024",
		title: "Mock Interviews",
		start: "2024-10-30T18:30:00-07:00",
		location: "Zoom",
		quarter: "Fall 2024",
		description:
			"📋 Want to sharpen your interview skills? Join ICSSC's Mock Interviews!✏️ You'll get the chance to practice one-on-one interviews and receive personalized feedback to help you improve. Feel free to bring your resume so your interviewer can tailor questions based on your experience.💻 Interviews will be held on Zoom and will run for 15 minutes. 📌 Whether you're preparing for an internship, your first job, or just want to learn what an interview process is like, we'll help you build confidence and improve your skills!",
		poster: {
			src: "/assets/events/event_mock-interviews.jpg",
			alt: "Mock Interviews poster",
		},
	},
	{
		slug: "bits-and-bytes-fam-reveal-fall-2024-2",
		title: "Bits & Bytes Fam Reveal",
		start: "2024-10-25T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Meet your bytes, celebrate with your co-bits, and compete against other families with your new friends and mentors!🏁",
		poster: {
			src: "/assets/events/Bits&BytesFamReveal2023_InstagramSquare.jpg",
			alt: "Bits & Bytes Fam Reveal poster",
		},
	},
	{
		slug: "bits-and-bytes-fam-reveal-fall-2024",
		title: "Bits & Bytes Fam Reveal",
		start: "2024-10-23T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Drum roll please, for our ICSSC Bits and Bytes Reveal!!! If you signed up to become a Bit for ICSSC's Bits and Bytes program, Join us Wednesday, October 23rd from 7-8 pm for our Bits and Bytes Fam Reveal! 🙌 Meet your bytes, celebrate with your co-bits, and compete against other families with your new friends and mentors! 🏁",
		poster: {
			src: "/assets/events/event_bits-and-bytes-reveal.jpg",
			alt: "Bits & Bytes Fam Reveal poster",
		},
	},
	{
		slug: "web-jam-fall-2024",
		title: "Web Jam",
		start: "2024-10-21T00:00:00-07:00",
		location: "Mainplace Mall",
		quarter: "Fall 2024",
		description:
			"Join us at Round1, a entertainment center that offers Bowling, Karaoke, Ping Pong, Pool Tables, Claw Games, Arcade games, food, drinks, and more! 🍕 You'll be sure to have some good times with fun company. 🎊",
		poster: {
			src: "/assets/events/ROUND1_IG.jpg",
			alt: "Web Jam poster",
		},
	},
	{
		slug: "internship-panel-fall-2024",
		title: "Internship Panel",
		start: "2024-10-16T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Looking for advice in applying for internships this application season ❓ Come meet our panelists and receive insight/listen to personal experiences about the application process at our ICSSC Internship Panel Wednesday (10/16) 7-8pm at DBH 6011! 😄 Feel free to bring in your resume 📋 to receive direct feedback from our panelists afterwards!",
		poster: {
			src: "/assets/events/event_internship-panel.jpg",
			alt: "Internship Panel poster",
		},
	},
	{
		slug: "meet-the-bytes-fall-2024",
		title: "Meet the Bytes",
		start: "2024-10-09T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			'Don\'t miss out on an opportunity to make mentor connections this year! ‼️ Come out and meet our "Bytes" so that you can find the Byte best fitted to support you as a "Bit"! 👾 Take this chance to meet new friends and stay connected with the ICS community through events that promote academic success and community bonding.👨‍💻👩‍💻🧑‍💻',
		poster: {
			src: "/assets/events/event_meet-the-bytes.jpg",
			alt: "Meet the Bytes poster",
		},
	},
	{
		slug: "first-general-meeting-fall-2024",
		title: "First General Meeting",
		start: "2024-10-02T19:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2024",
		description:
			"Interested in learning more about ICSSC❓ Wanted to join a committee last year but didn't get the chance? Come out to the ICSSC General Meeting happening Wednesday, October 2nd from 7-8PM to hear a presentation about the structure of our organization and how 👉YOU👈 can get involved. Come talk to our board members and learn how you can join the team💜",
		poster: {
			src: "/assets/events/event_first-general-meeting.jpg",
			alt: "First General Meeting poster",
		},
	},
	{
		slug: "space-x-obsidian-entertainment-office-tours-winter-2024",
		title: "Space X + Obsidian Entertainment Office Tours",
		start: "2024-01-31T00:00:00-08:00",
		location: "",
		quarter: "Winter 2024",
		description:
			"Let us know you are interested by filling out the RSVP form which will drop at Monday, December 18, 2023 at 9:00 PM. There are only 20 spots for SpaceX and 24 for Obsidian so sign up quickly, as it will be first come first serve! There will be 10 spots reserved for internal ICSSC members for SpaceX and 14 spots for Obsidian. UPDATE - NO SPOTS LEFT.",
		poster: {
			src: "/assets/events/spacex.jpg",
			alt: "Space X + Obsidian Entertainment Office Tours poster",
		},
	},
	{
		slug: "webjam-2023-fall-2023",
		title: "WebJam 2023",
		start: "2023-11-13T00:00:00-08:00",
		location: "Donald Bren Hall",
		quarter: "Fall 2023",
		description:
			"ICSSC’s annual WebJam is a week-long programming competition & celebration where you’ll have the chance to work on web application design and development in teams of 1-4. 🐠 Throughout the week, we’ll have useful workshops, mentors, and snacks to support you with your projects! 💡 At the end of the week, you’ll have the chance to present your project to our panel of professor judges and earn some prizes! 🎉",
		poster: {
			src: "/assets/events/Webjam-IG.jpg",
			alt: "WebJam 2023 poster",
		},
	},
	{
		slug: "internship-panel-fall-2023",
		title: "Internship Panel",
		start: "2023-10-18T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2023",
		description:
			"Looking for advice in applying for internships this application season ❓ Come meet our panelists and receive insight/listen to personal experiences about the application process at our ICSSC Internship Pane!",
		poster: {
			src: "/assets/events/internpanel.jpg",
			alt: "Internship Panel poster",
		},
	},
	{
		slug: "bits-and-bytes-intro-fall-2023",
		title: "Bits & Bytes Intro",
		start: "2023-10-11T00:00:00-07:00",
		location: "ICS 428",
		quarter: "Fall 2023",
		description:
			'Don\'t miss out on an opportunity to make mentor/mentee connections this year! Come out and meet our "Bytes!"Find the Byte best fitted to support you as a "Bit"!',
		poster: {
			src: "/assets/events/bitsbytes.jpg",
			alt: "Bits & Bytes Intro poster",
		},
	},
	{
		slug: "icssc-general-meeting-fall-2023",
		title: "ICSSC General Meeting",
		start: "2023-10-04T00:00:00-07:00",
		location: "ICS 428",
		quarter: "Fall 2023",
		description:
			"We are so glad you got to relax with us at the Bonfire today! 😍 However, ICSSC isn't just a social club. Interested in learning more about ICSSC❓Wanted to join a committee last year but didn't get the chance? Come talk to our board members and learn how you can join the team 💜.",
		poster: {
			src: "/assets/events/gen_meeting.jpg",
			alt: "ICSSC General Meeting poster",
		},
	},
	{
		slug: "meet-the-icssc-board-fall-2023",
		title: "Meet the ICSSC Board",
		start: "2023-09-27T00:00:00-07:00",
		location: "DBH 6011 or Zoom",
		quarter: "Fall 2023",
		description:
			"Curious about ICSSC? 🖥️ Want to get to know ICSSC's board members? 👀 Join us for our Hybrid Meet the Board + Q&A! 🥳 Ask any questions you may have before the quarter starts and have a chance to connect and network with the board members. 💙 Make sure to RSVP on our Linktree to jump in on the fun! 😃",
		poster: {
			src: "/assets/events/event_meetboard.jpg",
			alt: "Meet the ICSSC Board poster",
		},
	},
	{
		slug: "icssc-at-aifs-fall-2023",
		title: "ICSSC at AIFs",
		start: "2023-09-25T00:00:00-07:00",
		location: "Aldrich Park",
		quarter: "Fall 2023",
		description:
			"💻 Interested in Computer Science? Want to get involved in the ICS community here at UCI? 🧑‍💻Come talk to the Information and Computer Science Student Council at AIF this Monday, September 25th at AIF from 11 am to 4 pm! Meet our board members, learn about new opportunities 👀, and learn about upcoming events 📅!",
		poster: {
			src: "/assets/events/event_icsscfair.jpg",
			alt: "ICSSC at AIFs poster",
		},
	},
	{
		slug: "icssc-s-micro-talks-spring-2023",
		title: "ICSSC's Micro Talks",
		start: "2023-05-10T00:00:00-07:00",
		location: "ICS 428",
		quarter: "Spring 2023",
		description:
			"ICSSC Events Committee ran out of ideas! 🫵 So you’re the next event! Steal the stage (aka front of ICS 428) with a 1-2 minute microtalk on anything you want: your hopes, dreams, passions, among us victories, or a random topic from our wheel 🎡",
		poster: {
			src: "/assets/events/event_microtalk.jpg",
			alt: "ICSSC's Micro Talks poster",
		},
	},
	{
		slug: "icssc-s-evening-hike-spring-2023",
		title: "ICSSC's Evening Hike",
		start: "2023-05-06T00:00:00-07:00",
		location: "Bommer Canyon Trail Head",
		quarter: "Spring 2023",
		description:
			"😵‍💫 Been too busy studying for midterms to touch grass recently? Come join us for a hike next weekend to let off some steam at 🌿Bommer Canyon🪨 ! Invite your friends, Bits and Bytes fams, or feel free to come by yourself! We will also be holding a photo contest 📸 Make sure to wear appropriate outerwear and shoes for hiking! If you need a ride or will be able to provide one, fill out the RSVP form and the carpool spreadsheet 🚙",
		poster: {
			src: "/assets/events/event_hike.jpg",
			alt: "ICSSC's Evening Hike poster",
		},
	},
	{
		slug: "cs-specializations-101-spring-2023",
		title: "CS Specializations 101",
		start: "2023-04-26T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2023",
		description:
			"Are you a CS major⁉️ Are you unsure what all of the specialization tracks are? Join us this WEDNESDAY April 26th, 2023 to learn about the different specializations from one of the Peer Academic Advisors!",
		poster: {
			src: "/assets/events/event_specializations.jpg",
			alt: "CS Specializations 101 poster",
		},
	},
	{
		slug: "icssc-game-night-spring-2023",
		title: "ICSSC Game Night",
		start: "2023-04-19T00:00:00-07:00",
		location: "ICS 428",
		quarter: "Spring 2023",
		description:
			"Looking for a fun way to unwind after a long day of coding? Join our game night🎮🕹️🎲♟️, featuring an array of board games, card games, and video games. This is the perfect opportunity to enjoy some friendly competition with your fellow students. So come join us for a night of fun and feel free to bring any of your favorite games!",
		poster: {
			src: "/assets/events/event_gamenight.jpg",
			alt: "ICSSC Game Night poster",
		},
	},
	{
		slug: "icssc-egg-hunt-spring-2023",
		title: "ICSSC Egg Hunt!",
		start: "2023-04-05T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Spring 2023",
		description:
			"Tired of looking for all those bugs in your code? Come look for some Easter eggs instead in the ICSSC Egg Hunt!! 🥚 You will be competing in teams to search for eggs hidden in DBH, and the first to find all eggs will win a prize!",
		poster: {
			src: "/assets/events/event_egghunt.jpg",
			alt: "ICSSC Egg Hunt! poster",
		},
	},
	{
		slug: "root-beer-floats-and-chill-winter-2023",
		title: "Root Beer Floats and Chill",
		start: "2023-03-15T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"Come to ICSSC’s Root Beer Floats and Chill event where you can enjoy some ice cream and soda while enjoying some St. Patrick’s Day vibes. We encourage you to wear GREEN and join our celebration💚💚💚!",
		poster: {
			src: "/assets/events/event_stpatricks.jpg",
			alt: "Root Beer Floats and Chill poster",
		},
	},
	{
		slug: "study-hours-winter-2023",
		title: "Study Hours",
		start: "2023-03-08T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"Stressed about finals?🤓 Let's be stressed together and have a study session! Join us for a super chill study session! Everyone is welcome, but if you are in a Bits and Bytes group you can gain some easy points for your fam! We look forward to seeing everyone there and good luck on all of your midterms/projects/finals💕",
		poster: {
			src: "/assets/events/event_studyhours.jpg",
			alt: "Study Hours poster",
		},
	},
	{
		slug: "brain-games-winter-2023",
		title: "Brain Games",
		start: "2023-02-27T00:00:00-08:00",
		location: "DBH 3011",
		quarter: "Winter 2023",
		description:
			"Think you have the biggest brain🧠? Grab your friends and gear up for ICSSC's Brain Games, a week-long competition full of brain games where you can compete against other students for prizes! Brain Games will take place week 8 (Feb. 27-Mar.3), so make sure to sign up before Feb. 24th!",
		poster: {
			src: "/assets/events/event_braingames.jpg",
			alt: "Brain Games poster",
		},
	},
	{
		slug: "icssc-at-round-1-winter-2023",
		title: "ICSSC at Round 1",
		start: "2023-02-25T00:00:00-08:00",
		location: "Round1 at Main Place Mall",
		quarter: "Winter 2023",
		description:
			"Time to bring back this loved ICSSC event! Join us at Round1 and destress by either screaming into a Karaoke mic, squeezing the stuffed animal that you won, or knocking down bowling pins. If you need a ride or will be able to provide one, fill out the RSVP form and the carpool spreadsheet!",
		poster: {
			src: "/assets/events/event_round1.jpg",
			alt: "ICSSC at Round 1 poster",
		},
	},
	{
		slug: "research-panel-winter-2023",
		title: "Research Panel",
		start: "2023-02-22T00:00:00-08:00",
		location: "Zoom",
		quarter: "Winter 2023",
		description:
			"Interested in getting involved in Undergraduate Research🥼? Join us to learn what certain ics labs do, the responsibilites an undergrad researcher might have, the benefits of doing research, and how to get involved! Ask our panel of researchers questions and learn about their journeys in the research field so far!",
		poster: {
			src: "/assets/events/event_researchpanel.jpg",
			alt: "Research Panel poster",
		},
	},
	{
		slug: "personal-projects-workshop-winter-2023",
		title: "Personal Projects Workshop",
		start: "2023-02-15T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"Does your resume sound like crickets🦗? Need an awesome project to shoo them away? Join us for ICSSC’s Personal Projects Workshop, where you'll brainstorm with others to create your very own project and share them with your peers! You will be divided into interest groups including game dev, web dev, app dev, embedded systems, and more!",
		poster: {
			src: "/assets/events/event_projectworkshop.jpg",
			alt: "Personal Projects Workshop poster",
		},
	},
	{
		slug: "discord-bot-workshop-winter-2023",
		title: "Discord Bot Workshop",
		start: "2023-02-08T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"Trying to spice up your Discord server? 🤖⌨️💬 Join us for ICSSC’s Discord Bot Workshop, where you'll be guided through making your own bot that responds to messages and custom commands!",
		poster: {
			src: "/assets/events/event_discordbot.jpg",
			alt: "Discord Bot Workshop poster",
		},
	},
	{
		slug: "networking-night-winter-2023",
		title: "Networking Night",
		start: "2023-02-01T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"Have you thought about your career goals🤔? Want to hear from your peers? It’s ICSSC Networking Night—come make some new connections🤝! Ask questions to other students and gain insight into what career path might be right for you!",
		poster: {
			src: "/assets/events/event_network.jpg",
			alt: "Networking Night poster",
		},
	},
	{
		slug: "social-deduction-night-winter-2023",
		title: "Social Deduction Night",
		start: "2023-01-25T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"BOOM💣💥 The time is ticking🕚, and we need YOU to help save the future! Join us for Social Deduction Night this Wednesday, where you use your and your teammates use social skills to negotiate your win, protect your king, and most importantly: have fun! Come play Two Rooms and Boom, and save ICSSC!",
		poster: {
			src: "/assets/events/event_socialdeduct.jpg",
			alt: "Social Deduction Night poster",
		},
	},
	{
		slug: "origami-night-winter-2023",
		title: "Origami Night",
		start: "2023-01-18T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Winter 2023",
		description:
			"*flip* *fold* BAM! 🐇Now you have an origami rabbit! Come join us down the origami rabbit hole as we celebrate the Lunar New Year! 🧧 Learn to make lanterns, envelopes, and more on your journey to become an origami master. No scissors or tape allowed 🚫",
		poster: {
			src: "/assets/events/event_origami.jpg",
			alt: "Origami Night poster",
		},
	},
	{
		slug: "gingerbread-house-making-fall-2022",
		title: "Gingerbread House Making",
		start: "2022-11-30T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2022",
		description:
			"Mariah Carey is playing at the shopping malls, and what does this mean? The holidays! Take shelter from the cold and the incoming Finals and join us at DBH 6011 where we will build Gingerbread Houses to get a kick start with Christmas spirit before we return home for the holidays. Make sure to fill out the RSVP form! 🍪🥛->🎅->🎁🎄->😄",
		poster: {
			src: "/assets/events/event_gingerbread.jpg",
			alt: "Gingerbread House Making poster",
		},
	},
	{
		slug: "webjam-fall-2022",
		title: "WebJam",
		start: "2022-11-14T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2022",
		description:
			"Looking for some jam on the web? 🍇 Want to make your first personal project? 🤩 WebJam is an in-person week-long competition where teams of students will develop fully functional web applications about anything they wish! This competition will give students the opportunity to learn how to create and deploy web applications by having workshops hosted by several amazing clubs and by providing mentors eager to assist you. After you present your projects at the end of the week, the web applications that wow us the most will be eligible for a variety of cool prizes! 🏆 The event is open to students of all technical levels! We will be providing workshops to help teach basic and intermediate concepts, so don't be afraid to use this opportunity to advance your skills and add a personal project to your resume 🤝",
		poster: {
			src: "/assets/events/event_webjam.jpg",
			alt: "WebJam poster",
		},
	},
	{
		slug: "alumni-panel-fall-2022",
		title: "Alumni Panel",
		start: "2022-11-09T00:00:00-08:00",
		location: "DBH 6011",
		quarter: "Fall 2022",
		description:
			"Wondering what your options are after graduation🎓? Want to learn more about the CS field and what a typical day to day of a Software Engineer is? ICSSC is proud to present Life After ICS, an alumni panel 🧑‍🎓👨‍🎓👩‍🎓where you can personally meet and connect with ICS alumni who now work in a variety of different fields. You can learn more about what they do on the job, what skills they found valuable and what they wish they had done before graduating📝. See you there!",
		poster: {
			src: "/assets/events/event_alumnipanel.jpg",
			alt: "Alumni Panel poster",
		},
	},
	{
		slug: "elevator-pitch-and-resume-workshop-fall-2022",
		title: "Elevator Pitch & Resume Workshop",
		start: "2022-11-09T00:00:00-08:00",
		location: "DBH 428",
		quarter: "Fall 2022",
		description:
			"Want to get some practice in before the In-Person STEM Career Fair on Thursday? 🤓 Bring your elevator pitch 🗣 and a physical copy of your resume 📄 to receive feedback at our Elevator Pitch and Resume Workshop. You can also learn an overview on what to expect before, during and after the career fair!🤵📋",
		poster: {
			src: "/assets/events/event_resumereview.jpg",
			alt: "Elevator Pitch & Resume Workshop poster",
		},
	},
	{
		slug: "karaoke-night-fall-2022",
		title: "Karaoke Night",
		start: "2022-10-26T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2022",
		description:
			"Looking to destress from midterms❓ Want to sing all of your worries away🎵🎶🎤 🧑‍🎤Join us at Karaoke Night for fun vibes and a chill time with your friends! Sing along and watch some exciting performances! Don't forget to fill out any song requests you have too📝",
		poster: {
			src: "/assets/events/event_karaoke.jpg",
			alt: "Karaoke Night poster",
		},
	},
	{
		slug: "bits-and-bytes-fam-reveal-fall-2022",
		title: "Bits & Bytes Fam Reveal",
		start: "2022-10-19T00:00:00-07:00",
		location: "DBH 6011",
		quarter: "Fall 2022",
		description:
			'Did you sign up to be a "Bit" this year? Join us this WEDNESDAY, October 19th from 7-8 pm for our Bits and Bytes Fam Reveal! Find out who your Byte is and meet the other Bits in your group! We\'ll even be doing a friendly competition against the other fams!',
		poster: {
			src: "/assets/events/event_famreveal.jpg",
			alt: "Bits & Bytes Fam Reveal poster",
		},
	},
];
