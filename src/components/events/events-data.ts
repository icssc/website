type Event = {
    src?: string;
    title: string;
    description: string;
    time: string;
    location: string;
    aspectRatio?: string;
};

export const EVENTS_DATA: Event[] = [
    {
        "src": "event_leetcode-study-groups-2026.png",
        "title": "LeetCode Study Groups",
        "time": "2026-01-02T19:00",
        "location": "DBH 3011",
        "description": "Looking to improve your LeetCode skills? Have you been struggling to keep yourself locked in? ICSSC's LeetCode Study Groups is returning for a second year! If you've been assigned a group, join us for the program's kickoff at DBH!"
    },
    {
        "src": "event_hobby-hangout-2025.png",
        "title": "Hobby Hangout",
        "time": "2025-12-03T19:00",
        "location": "DBH 3011",
        "description": "Feeling the end-of-quarter stress? Need a break during Week 10? Join us for our Hobby Hangout! Come hang out, bring your favorite hobby to work on, and enjoy a cozy movie night. Perfect for a midweek reset and to unwind."
    },
    {
        "src": "event_ics-pathways.png",
        "title": "ICSSC x UCR ACM: ICS Pathways Panel",
        "time": "2025-11-12T19:00",
        "location": "Zoom",
        "description": "Wondering what different pathways there are in ICS? (Hint: there's more than just software engineering!) Do you also want to know what classes you can take to land these roles? Well, look no further than our upcoming ICS Pathways and Specialization Panel. Along with ACM @ UCR, you'll get to hear how specializing helps prepare for industry and what classes you can take! Don't miss this opportunity to explore your CS pathway!"
    },
    {
        "src": "event_wikirace-2025.png",
        "title": "Wiki Racing",
        "time": "2025-11-19T19:00",
        "location": "DBH 3011",
        "description": "Ready, set, click! Join ICSSC for a night of Wiki Racing, a game where you'll race from a starting Wikipedia page to a destination article using only the internal hyperlinks. The first player to reach the destination or the one who takes the fewest clicks wins!"
    },
    {
        "title": "Fall Quarter Internal All-Hands",
        "time": "2025-11-20T18:30",
        "location": "PCB 1100",
        "description": "Join us for our Fall Quarter All-Hands meeting to discuss progress, plans, and connect with fellow committee members."
    },
    {
        "title": "Dave and Buster's Fundraiser",
        "time": "2025-10-25T14:00",
        "location": "Irvine Spectrum Center",
        "description": "Join us for an afternoon of games and fun at Dave and Buster's! Support ICSSC while enjoying arcade games, food, and hanging out with friends from 2-5 PM."
    },
    {
        "src": "event_webjam-2025.png",
        "title": "WebJam",
        "time": "2025-11-03T19:00",
        "location": "DBH and Student Center",
        "description": "ICSSC's annual WebJam is back! Join us for a week-long programming competition where you'll work on web application design and development in teams of 1-4. Learn more at https://webjam.icssc.club."
    },
    {
        "src": "event_cha-fundraiser-2025.png",
        "title": "Cha Fundraiser",
        "time": "2025-10-29T19:00",
        "location": "University Town Center",
        "description": "Support ICSSC by grabbing some boba at UTC! Don't forget to show the flyer when you order to help us fundraise! Enjoy some delicious drinks with friends!"
    },
    {
        "src": "event_resume-workshop-2025.png",
        "title": "Resume Workshop",
        "time": "2025-10-29T19:00",
        "location": "ICS 428",
        "description": "Join us for an exclusive Resume Workshop featuring recruiters from Northrop Grumman and Obsidian Entertainment! Learn firsthand what top employers look for in a standout resume, common red flags to avoid, and how to make your application rise above the rest."
    },
    {
        "src": "event_bits-and-bytes-reveal-2025.jpg",
        "title": "Bits & Bytes Group Reveal",
        "time": "2025-10-22T19:00",
        "location": "University Town Center",
        "description": "The wait is over—come find out your Bits & Bytes family for the year! Meet your bytes, celebrate with your co-bits, and team up to compete in fun activities against the other families."
    },
    {
        "src": "event_obsidian-corporate-tour-2025.jpg",
        "title": "Obsidian Corporate Tour",
        "time": "2025-10-22T13:30",
        "location": "Obsidian Office",
        "description": "The corporate tour application for Obsidian Entertainment is now open! Applications will close next Wednesday, October 8th at 11:59 PM. More information about the application process can be found on the form itself."
    },
    {
        "src": "event_roller-skating-2025.jpg",
        "title": "Roller Skating Fundraiser",
        "time": "2025-10-18T18:00",
        "location": "Fountain Valley Skating Center",
        "description": "As Silk Sonic would say, skate and slide your way on over to our ICSSC roller skating fundraiser! This Saturday evening (and always), we wanna get to know ya!"
    },
    {
        "title": "Internship Panel",
        "time": "2025-10-15T19:00",
        "location": "DBH 3011",
        "description": "Curious about what it’s like to land and thrive in a top tech internship? Join us for our Internship Panel, where students who have interned at leading companies like Meta, Microsoft, Amazon, and more will share their experiences."
    },
    {
        "title": "Bits & Bytes Mixer",
        "time": "2025-10-12T14:00",
        "location": "William R. Mason Regional Park",
        "description": "Join us for an afternoon at the park with games, food, and plenty of time to hang out. It’s a casual way for potential bits to meet bytes and other students outside of campus before the official group reveal."
    },
    {
        "title": "Meet the Bytes",
        "time": "2025-10-08T19:00",
        "location": "DBH 3011",
        "description": "Come meet all the byte pairs in one place! This event is for new ICS students interested in joining the program to see who the mentors are, ask questions, and get a feel for the community before sign-ups close."
    },
    {
        "title": "Bytes Social",
        "time": "2025-10-02T19:00",
        "location": "DBH 3011",
        "description": "A bytes-only gathering for mentors to meet each other before the program kicks off. It’s the best time to connect with other upperclassmen and find a potential co-byte if you don’t already have one."
    },
    {
        "src": "event_first-general-meeting-2025.jpg",
        "title": "First General Meeting",
        "time": "2025-10-01T19:00",
        "location": "SH 134",
        "description": "Our first ICSSC General Meeting is tonight!⭐ Come learn about the structure of our organization and how YOU can get involved in one of our six committees. This is a great time to talk to our board members and ask any questions that you might have before applying. We'll also be releasing more information about our upcoming corporate tours to Obsidian Entertainment and Advantest at the meeting. There will be a UTC social afterwards! 🌯"
    },
    {
        "src": "event_ics-bonfire-2025.jpg",
        "title": "ICS Bonfire",
        "time": "2025-09-26T17:00",
        "location": "Corona Del Mar Fire Pits",
        "description": "As Professor Shindler always says: “CS is a social activity” 💃🏻🕺🏻🪩. Get social on a summer night 🌅 with us along with free pizza 🍕, yummy s’mores 🍫, and people from a wide variety of ICS clubs 🧑🏽‍💻👩🏼‍💻👨🏿‍💻! Rides will be provided to the event first come first serve.",
        "aspectRatio": "1/1",
    },
    {
        "src": "event_meet-the-board-2025.jpg",
        "title": "Meet the Board",
        "time": "2025-09-24T19:00",
        "location": "DBH 3011",
        "description": "✨ Curious about ICSSC? ✨ Come meet the board behind our six committees — AAA, Corporate, Events, PR, Graphics, and Projects! 🎉 Join us for Meet the Board + Q&A to connect with board members, learn what each committee does, and ask any questions before the quarter kicks off. Committee applications open after the meeting!"
    },
    {
        "src": "event_ics-prom-2025.jpg",
        "title": "ICS Prom",
        "time": "2025-06-04T18:30",
        "location": "DBH 6011",
        "description": "Step into the spotlight and try your luck at this year's casino-themed ICS Prom! 🍀 🎲 Join us for an evening of games, music, and great vibes with fellow ICS students and clubs - go all in to close out the year! ♠️♥️♣️♦️"
    },
    {
        "src": "event_ics-fair-2025.png",
        "title": "ICS Fair",
        "time": "2025-05-23T10:00",
        "location": "Engineering Gateway",
        "description": "🤠Giddy up, Anteaters! The ICS Fair is back and better than ever! 🎉 Come explore booths from ICS clubs with games, activities, and ways to get involved! Earn tickets as you go and trade them in for awesome prizes!"
    },
    {
        "src": "event_type-type-revolution.png",
        "title": "Type Type Revolution",
        "time": "2025-05-21T19:00",
        "location": "DBH 6011",
        "description": "Ever sing along to a song without actually knowing the lyrics? 🎵 Time to put that to the test at Type Type Revolution ⌨️! Team up with a partner to type ✍️ out the lyrics to your favorite songs 🎤 while jamming to smash hits 🍓🔨 from the past ⌛. Think fast, type faster, and see if you can keep up with the beat! ⌨️"
    },
    {
        "src": "event_life-after-ics.png",
        "title": "Life After ICS: Alumni Panel",
        "time": "2025-05-14T19:00",
        "location": "DBH 6011",
        "description": "Ever wondered what life is like after you graduate whether that be industry💼, graduate school🎓, looking for a job🔎, and more? Join us for an engaging alumni panel featuring former undergraduates from the ICS department!🧑‍💼👩‍💼👨‍💼\n\nThis is your chance to ask your burning questions🔥about what your future may look like and gain insights into their experiences and advice for navigating the ICS field.💡You'll have the opportunity to hear insights regarding transitioning into different vocations, gain advice from your former peers and alumni from UCI, and learn more about various personal and post-graduation experiences."
    },
    {
        "src": "event_fusion-icssc.png",
        "title": "ICSSC x Fusion Bridge Building",
        "time": "2025-05-06T19:00", 
        "location": "Ring Room @ Cross-Cultural Center",
        "description": "Join ICSSC x Fusion to build bridges - both literally and socially! 🌉\n\nGet ready for a night of hands-on engineering challenges ⚔️ - come test your skills in:\n\n🚗 Bridge Building Showdown: Team up to design a bridge strong enough to support a car and survive a coin weight test! 💪\n✈️ Paper Airplane Competition: Work together to create a detailed protocol on how to fold a paper airplane!\n\nBring your ideas and meet new faces - don't miss this fusion of fun! 😉🤣"
    },
    {
        "src": "event_game-night.png",
        "title": "Game Night",
        "time": "2025-04-23T19:00",
        "location": "DBH 6011",
        "description": "Wanna play a game 🎮 before midterms season? Or maybe two? Or three 👀? Come to ICSSC Game Night‼️ Join your friends 👯 in playing some fun games on a switch or classics 🃏 like uno, jenga, poker ♥️ ♠️♦️♣️, and more! There will be snacks 🍪 too to recharge in between games 🧁🫶"
      },
    {
        "src": "event_egghunt2025.png",
        "title": "Egg Hunt",
        "time": "2025-04-16T19:00",
        "location": "DBH 6011",
        "description": "Spring has sprung - and you know what that means… EGG HUNT TIME! 🐣🌸 Join ICSSC during Week 3 for a super fun 🕵️‍♀️ partner egg hunt adventure through DBH! Work together, out-sleuth other teams, and see who can collect the most eggs hidden throughout the building! 🧺✨ 🥇The winning team gets a special prize — and eternal ICSSC bragging rights 😉"
      },
      {
        "src": "event_elections.png",
        "title": "ICSSC Elections", 
        "time": "2025-04-09T19:00",
        "location": "DBH 6011",
        "description": "ARE YOU 🫵 READY FOR ICSSC ELECTIONS⁉️ Starting today, the positions for Executive Board (President, Internal Vice President, and External Vice President) of ICS Student Council are available for election for the 2025-26 school year."
      },
      {
        "src": "event_pickleball.png",
        "title": "Pickleball",
        "time": "2025-04-02T19:00",
        "location": "ARC Upper Field Pickleball Courts",
        "description": "🥒🏓 Start off your Spring Quarter with a new hobby: Pickleball! We'll have experienced players on hand to show you the ropes, and extra equipment available to borrow. Whether you're looking to learn or just have a good time, it's the perfect opportunity to meet new people, enjoy the game, and touch grass. See you on the courts!!😎"
      },
    {
        src: "event_aux-battle.jpg",
        title: "Aux Battle",
        time: "2025-03-12T19:00",
        location: "DBH 6011",
        description:
            "🎶 🎧 🔊 Feeling groovy before Finals? Maybe even a bit \
  competitive too? Come join us for the LAST event of the quarter \
  🎊 in a battle of musical knowledge 🎼 🧠 where you and your \
  friends can prove who has the more refined, cultured audio palette! \
  🎶 ✨",
    },
    {
        src: "event_chapman-mixer.jpg",
        title: "Chapman x ICSSC UTC Mixer",
        time: "2025-03-07T18:00",
        location: "University Town Center",
        description:
            "💌 Want to make new friends? Need a study buddy? Look \
  no further! Find them at our upcoming Chapman CS Club x UCI ICSSC \
  Mixer! 🛒 Join us at University Town Center next Friday for an \
  intercollegiate social event! Meet new students, participate in a \
  special icebreaker to find your 'perfect match,' and shop around \
  UTC before kicking off your weekend!",
    },
    {
        src: "event_squid-game.jpg",
        title: "Squid Game Social",
        time: "2025-03-05T18:30",
        location: "DBH 6011",
        description:
            "No need to wait for the green light 🟢 — join ICSSC and \
  IEEE for a Squid Game inspired social night 💃 ! Test your skills, \
  compete in fun games 🏅 , and make new friends 👯 along the way \
  (losers will make it out alive... or will they?🔪🔪 ). Challenge \
  yourself in a friendly competition and see who comes out on top! \
  🏆 🦑",
    },
    {
        src: "event_research-panel.jpg",
        title: "Research Panel",
        time: "2025-02-26T19:00",
        location: "DBH 6011",
        description:
            "💡 Ever wondered what drives your professor’s passion for \
  research? Now’s your chance to find out! 📢 Join us for an \
  engaging ICS research panel! 🗣️ 👩‍💻👨‍💻 ✨ This is your \
  opportunity to hear from Professor Shen, Professor Hayes, Professor \
  Garcia, and student researchers about their work, experiences, and \
  advice for getting involved in research. Don’t miss out! 🎙️🤩 📌 \
  Come with questions and curiosity! We can’t wait to see you there. \
  👀🙌",
    },
    {
        src: "event_planning-your-academic-journey.jpg",
        title: "Planning Your Academic Journey",
        time: "2025-02-19T19:00",
        location: "DBH 6011",
        description:
            "Struggling to choose your courses for the next year? 🤯 \
  Come and hear from ICSSC Projects, where we tell you about our own \
  experiences and tools that we’ve developed to ease the course \
  planning process. 📘📔📗 Join us to learn how to visualize your \
  4 year plan, avoid scheduling conflicts, and stay on track for \
  graduation! 🎢",
        aspectRatio: "1/1",
    },
    {
        src: "event_cupids-mailbox-crafts.jpg",
        title: "Cupid's Mailbox Crafts",
        time: "2025-02-12T19:00",
        location: "DBH 6011",
        description:
            "🫵🏼 Debug your love life this Valentine’s Day—come \
  decorate a mailbox and finally send a message that’s more than just \
  “Hello World”! 🍫If your love life feels as empty as your GitHub \
  repo, it’s time to fill it with treats and valentines at Cupid’s \
  Mailbox! 💌 We’ll provide all the materials you need to craft your \
  perfect mailbox—whether you’re sending valentines to someone \
  special or yourself (no judgement), we’ve got you covered!",
    },
    {
        src: "event_intro-to-ai-workshop.jpg",
        title: "Intro to AI Workshop",
        time: "2025-02-05T19:00",
        location: "DBH 6011",
        description:
            "🚀 Want to dive into Artificial Intelligence?🤖 Join \
  AI@UCI & ICSSC for a fun and interactive hands-on Intro to AI \
  Workshop where you'll train your own model and learn the basics of \
  AI! Then, put your knowledge to the test in a game of Kahoot for a \
  chance to win $40 in gift card prizes!🎉 Stick around after for a \
  social at UTC! 🍕✨",
        aspectRatio: "1/1",
    },
    {
        src: "event_resume-workshop.jpg",
        title: "Resume Workshop",
        time: "2025-01-29T19:00",
        location: "Zoom",
        description:
            "Feeling the heat of internship season? 🫨 Receive \
  resume feedback at our ICSSC Resume Workshop this Wednesday 7-8pm on \
  Zoom! 🖥️ Work with upper-classmen to integrate action words and \
  metrics to capture recruiters’ attention. 🧑‍💻👩‍💻",
    },
    {
        src: "event_icssc-faculty-panel.jpg",
        title: "ICS Faculty Panel",
        time: "2025-01-22T19:00",
        location: "DBH 6011",
        description:
            "Ever wondered what drives your professors’ passion for \
  teaching and research? 🧑‍🏫 Join us for an engaging faculty panel \
  featuring professors and teaching assistants from the ICS department! \
  🖥️ This is your chance to connect with them beyond the classroom, ask \
  questions, and gain insights into their experiences and advice for \
  navigating the ICS field. 🙋",
        aspectRatio: "1/1",
    },
    {
        src: "event_ics-club-fair-2025.jpg",
        title: "ICS Club Fair",
        time: "2025-01-15T19:00",
        location: "DBH 6011",
        description:
            "Did you know there are 13 ICS clubs? 🤯 With so many \
  options, how do you pick the right one for you? 🤔 Join us at the \
  ICS Club Fair next week to explore each club, meet like-minded club \
  members, and discover your perfect community (or communities)! 💻 🎉",
        aspectRatio: "1/1",
    },
    {
        src: "event_sliding-into-the-new-year.jpg",
        title: "Sliding Into the New Year",
        time: "2025-01-08T19:00",
        location: "DBH 6011",
        description:
            "Slide into Winter Quarter with us and join us for our \
  first general meeting and event! ❄️ We'll be going over our planned \
  upcoming events for the quarter, including Brain Games 🧠 and the ICS \
  Club Fair 🤝 ! Afterwards, join us for our Slideshow Showdown - \
  create a slideshow on anything you choose and present it!",
        aspectRatio: "1/1",
    },
    {
        src: "event_cookie-decorating.jpg",
        title: "Cookie Decorating",
        time: "2024-12-04T19:00",
        location: "DBH 6011",
        description:
            "Want a break from studying? Need some sweets and social \
  interaction before locking in? 🍪 Come out to ICSSC's Cookie \
  Decorating on Wednesday! We have cookies ready for you to glamourize \
  with frosting and sprinkles! Bring your friends and have a fun, \
  festive time! 🎄",
        aspectRatio: "1/1",
    },
    {
        src: "event_hackathon-101.jpg",
        title: "Hackathon 101",
        time: "2024-11-14T19:00",
        location: "DBH 6011",
        description:
            "Are you coming to WebJam and have no idea where to \
  start? 👩‍💻Or are you thinking on applying to any of the UCI \
  Hackathons this year? 👾 Maybe you just have no idea what a \
  Hackathon even is but would like to change that! Join ICSSC and Hack \
  at UCI on our Hackathon prep sesh, right before our Week 8 WebJam.",
        aspectRatio: "1/1",
    },
    {
        src: "event_ics-pathways.jpg",
        title: "ICS Pathways",
        time: "2024-11-13T19:00",
        location: "DBH 6011",
        description:
            "Wondering what your future in ICS looks like with a \
  specialization? Well look no further than our upcoming ICS Pathways \
  Classes and Specialization Panel with ICS Alumni. You’ll get to hear \
  how specializing helped them prepare for industry, know what classes \
  were their favorite! Don’t miss this opportunity to explore your CS \
  pathway and gain valuable insights from alumni who’ve navigated these \
  decisions before you.",
        aspectRatio: "1/1",
    },
    {
        src: "event_two-rooms-and-a-boom.jpg",
        title: "Two Rooms and a Boom!",
        time: "2024-11-06T19:00",
        location: "DBH 6011",
        description:
            "Do you like socializing or problem solving better? Well \
  you can do both with social deduction! You’ve probably played \
  Werewolf, Mafia, or AMONG US, but this Wednesday will feature the \
  fantastic game Two Rooms and a Boom, which actually takes place in \
  two real life rooms! Come join us in a battle of wits against your \
  friends!",
        aspectRatio: "1/1",
    },
    {
        src: "event_mock-interviews.jpg",
        title: "Mock Interviews",
        time: "2024-10-30T18:30",
        location: "Zoom",
        description:
            "📋 Want to sharpen your interview skills? Join \
  ICSSC's Mock Interviews!✏️ You'll get the chance to practice \
  one-on-one interviews and receive personalized feedback to help you \
  improve. Feel free to bring your resume so your interviewer can \
  tailor questions based on your experience.💻 Interviews will be held \
  on Zoom and will run for 15 minutes. 📌 Whether you're preparing for \
  an internship, your first job, or just want to learn what an \
  interview process is like, we'll help you build confidence and \
  improve your skills!",
        aspectRatio: "1/1",
    },
    {
        src: "event_bits-and-bytes-reveal.jpg",
        title: "Bits & Bytes Fam Reveal",
        time: "2024-10-23T19:00",
        location: "DBH 6011",
        description:
            "Drum roll please, for our ICSSC Bits and Bytes \
  Reveal!!! If you signed up to become a Bit for ICSSC's Bits and \
  Bytes program, Join us Wednesday, October 23rd from 7-8 pm for our \
  Bits and Bytes Fam Reveal! 🙌 Meet your bytes, celebrate with your \
  co-bits, and compete against other families with your new friends and \
  mentors! 🏁",
        aspectRatio: "1/1",
    },
    {
        src: "event_internship-panel.jpg",
        title: "Internship Panel",
        time: "2024-10-16T19:00",
        location: "DBH 6011",
        description:
            "Looking for advice in applying for internships this \
  application season ❓ Come meet our panelists and receive \
  insight/listen to personal experiences about the application process \
  at our ICSSC Internship Panel Wednesday (10/16) 7-8pm at DBH 6011! \
  😄 Feel free to bring in your resume 📋 to receive direct feedback \
  from our panelists afterwards!",
        aspectRatio: "1/1",
    },
    {
        src: "event_meet-the-bytes.jpg",
        title: "Meet the Bytes",
        time: "2024-10-09T19:00",
        location: "DBH 6011",
        description:
            'Don\'t miss out on an opportunity to make mentor \
  connections this year! ‼️ Come out and meet our "Bytes" so that \
  you can find the Byte best fitted to support you as a "Bit"! 👾 \
  Take this chance to meet new friends and stay connected with the ICS \
  community through events that promote academic success and community \
  bonding.👨‍💻👩‍💻🧑‍💻',
        aspectRatio: "1/1",
    },
    {
        src: "event_first-general-meeting.jpg",
        title: "First General Meeting",
        time: "2024-10-02T19:00",
        location: "DBH 6011",
        description:
            "Interested in learning more about ICSSC❓ Wanted to \
  join a committee last year but didn't get the chance? Come out to the \
  ICSSC General Meeting happening Wednesday, October 2nd from 7-8PM to \
  hear a presentation about the structure of our organization and how \
  👉YOU👈 can get involved. Come talk to our board members and learn \
  how you can join the team💜",
        aspectRatio: "1/1",
    },
    {
        src: "spacex.jpg",
        title: "Space X + Obsidian Entertainment Office Tours",
        time: "2024-01-31T00:00",
        location: "",
        description:
            "Let us know you are interested by filling out the RSVP \
  form which will drop at Monday, December 18, 2023 at 9:00 PM. There \
  are only 20 spots for SpaceX and 24 for Obsidian so sign up quickly, \
  as it will be first come first serve! There will be 10 spots reserved \
  for internal ICSSC members for SpaceX and 14 spots for Obsidian. \
  UPDATE - NO SPOTS LEFT.",
        aspectRatio: "1/1",
    },
    {
        src: "Webjam-IG.jpg",
        title: "WebJam 2023",
        time: "2023-11-13T00:00",
        location: "Donald Bren Hall",
        description:
            "ICSSC’s annual WebJam is a week-long programming \
  competition & celebration where you’ll have the chance to work on web \
  application design and development in teams of 1-4. 🐠 Throughout \
  the week, we’ll have useful workshops, mentors, and snacks to support \
  you with your projects! 💡 At the end of the week, you’ll have the \
  chance to present your project to our panel of professor judges and \
  earn some prizes! 🎉",
        aspectRatio: "1/1",
    },
    {
        src: "Artsy_Autumn_IG.jpg",
        title: "Artsty Autumn",
        time: "2024-11-08T00:00",
        location: "DBH 6011",
        description:
            "If you love fall too, come and unwind with some festive \
  fall craft activities TOMORROW! 🎃 We'll have 3 different artsy \
  stations: mini pumpkins decorating, coloring pages, and origami.",
        aspectRatio: "1/1",
    },
    {
        src: "Bits&BytesFamReveal2023_InstagramSquare.jpg",
        title: "Bits & Bytes Fam Reveal",
        time: "2024-10-25T00:00",
        location: "DBH 6011",
        description:
            "Meet your bytes, celebrate with your co-bits, and \
  compete against other families with your new friends and mentors!🏁",
        aspectRatio: "1/1",
    },
    {
        src: "ROUND1_IG.jpg",
        title: "Web Jam",
        time: "2024-10-21T00:00",
        location: "Mainplace Mall",
        description:
            "Join us at Round1, a entertainment center that offers \
  Bowling, Karaoke, Ping Pong, Pool Tables, Claw Games, Arcade games, \
  food, drinks, and more! 🍕 You'll be sure to have some good times \
  with fun company. 🎊",
        aspectRatio: "1/1",
    },
    {
        src: "internpanel.jpg",
        title: "Internship Panel",
        time: "2023-10-18T00:00",
        location: "DBH 6011",
        description:
            "Looking for advice in applying for internships this \
  application season ❓ Come meet our panelists and receive \
  insight/listen to personal experiences about the application process \
  at our ICSSC Internship Pane!",
        aspectRatio: "1/1",
    },
    {
        src: "bitsbytes.jpg",
        title: "Bits & Bytes Intro",
        time: "2023-10-11T00:00",
        location: "ICS 428",
        description:
            'Don\'t miss out on an opportunity to make mentor/mentee \
  connections this year! Come out and meet our "Bytes!"Find the Byte \
  best fitted to support you as a "Bit"!',
        aspectRatio: "1/1",
    },
    {
        src: "gen_meeting.jpg",
        title: "ICSSC General Meeting",
        time: "2023-10-04T00:00",
        location: "ICS 428",
        description:
            "We are so glad you got to relax with us at the Bonfire \
  today! 😍 However, ICSSC isn't just a social club. Interested in \
  learning more about ICSSC❓Wanted to join a committee last year but \
  didn't get the chance? Come talk to our board members and learn how \
  you can join the team 💜.",
        aspectRatio: "1/1",
    },
    {
        src: "event_icsscfair.jpg",
        title: "ICSSC at AIFs",
        time: "2023-09-25T00:00",
        location: "Aldrich Park",
        description:
            "💻 Interested in Computer Science? Want to get involved \
  in the ICS community here at UCI? 🧑‍💻Come talk to the Information \
  and Computer Science Student Council at AIF this Monday, September \
  25th at AIF from 11 am to 4 pm! Meet our board members, learn about \
  new opportunities 👀, and learn about upcoming events 📅!",
        aspectRatio: "1/1",
    },
    {
        src: "event_meetboard.jpg",
        title: "Meet the ICSSC Board",
        time: "2023-09-27T00:00",
        location: "DBH 6011 or Zoom",
        description:
            "Curious about ICSSC? 🖥️ Want to get to know ICSSC's \
  board members? 👀 Join us for our Hybrid Meet the Board + Q&A! 🥳 Ask \
  any questions you may have before the quarter starts and have a chance \
  to connect and network with the board members. 💙 Make sure to RSVP on \
  our Linktree to jump in on the fun! 😃",
        aspectRatio: "1/1",
    },
    {
        src: "event_microtalk.jpg",
        title: "ICSSC's Micro Talks",
        time: "2023-05-10T00:00",
        location: "ICS 428",
        description:
            "ICSSC Events Committee ran out of ideas! 🫵 So you’re \
  the next event! Steal the stage (aka front of ICS 428) with a 1-2 \
  minute microtalk on anything you want: your hopes, dreams, passions, \
  among us victories, or a random topic from our wheel 🎡",
        aspectRatio: "1/1",
    },
    {
        src: "event_hike.jpg",
        title: "ICSSC's Evening Hike",
        time: "2023-05-06T00:00",
        location: "Bommer Canyon Trail Head",
        description:
            "😵‍💫 Been too busy studying for midterms to touch \
  grass recently? Come join us for a hike next weekend to let off some \
  steam at 🌿Bommer Canyon🪨 ! Invite your friends, Bits and Bytes \
  fams, or feel free to come by yourself! We will also be holding a \
  photo contest 📸 Make sure to wear appropriate outerwear and shoes \
  for hiking! If you need a ride or will be able to provide one, fill \
  out the RSVP form and the carpool spreadsheet 🚙",
        aspectRatio: "1/1",
    },
    {
        src: "event_specializations.jpg",
        title: "CS Specializations 101",
        time: "2023-04-26T00:00",
        location: "DBH 6011",
        description:
            "Are you a CS major⁉️ Are you unsure what all of the \
  specialization tracks are? Join us this WEDNESDAY April 26th, 2023 to \
  learn about the different specializations from one of the Peer \
  Academic Advisors!",
        aspectRatio: "1/1",
    },
    {
        src: "event_gamenight.jpg",
        title: "ICSSC Game Night",
        time: "2023-04-19T00:00",
        location: "ICS 428",
        description:
            "Looking for a fun way to unwind after a long day of \
  coding? Join our game night🎮🕹️🎲♟️, featuring an array of board \
  games, card games, and video games. This is the perfect opportunity \
  to enjoy some friendly competition with your fellow students. So come \
  join us for a night of fun and feel free to bring any of your \
  favorite games!",
        aspectRatio: "1/1",
    },
    {
        src: "event_egghunt.jpg",
        title: "ICSSC Egg Hunt!",
        time: "2023-04-05T00:00",
        location: "DBH 6011",
        description:
            "Tired of looking for all those bugs in your code? Come \
  look for some Easter eggs instead in the ICSSC Egg Hunt!! 🥚 You will \
  be competing in teams to search for eggs hidden in DBH, and the first \
  to find all eggs will win a prize!",
        aspectRatio: "1/1",
    },
    {
        src: "event_stpatricks.jpg",
        title: "Root Beer Floats and Chill",
        time: "2023-03-15T00:00",
        location: "DBH 6011",
        description:
            "Come to ICSSC’s Root Beer Floats and Chill event where \
  you can enjoy some ice cream and soda while enjoying some St. \
  Patrick’s Day vibes. We encourage you to wear GREEN and join our \
  celebration💚💚💚!",
        aspectRatio: "1/1",
    },
    {
        src: "event_studyhours.jpg",
        title: "Study Hours",
        time: "2023-03-08T00:00",
        location: "DBH 6011",
        description:
            "Stressed about finals?🤓 Let's be stressed together \
  and have a study session! Join us for a super chill study session! \
  Everyone is welcome, but if you are in a Bits and Bytes group you can \
  gain some easy points for your fam! We look forward to seeing everyone \
  there and good luck on all of your midterms/projects/finals💕",
        aspectRatio: "1/1",
    },
    {
        src: "event_round1.jpg",
        title: "ICSSC at Round 1",
        time: "2023-02-25T00:00",
        location: "Round1 at Main Place Mall",
        description:
            "Time to bring back this loved ICSSC event! Join us at \
  Round1 and destress by either screaming into a Karaoke mic, squeezing \
  the stuffed animal that you won, or knocking down bowling pins. If \
  you need a ride or will be able to provide one, fill out the RSVP form \
  and the carpool spreadsheet!",
        aspectRatio: "1/1",
    },
    {
        src: "event_researchpanel.jpg",
        title: "Research Panel",
        time: "2023-02-22T00:00",
        location: "Zoom",
        description:
            "Interested in getting involved in Undergraduate \
  Research🥼? Join us to learn what certain ics labs do, the \
  responsibilites an undergrad researcher might have, the benefits of \
  doing research, and how to get involved! Ask our panel of researchers \
  questions and learn about their journeys in the research field so far!",
        aspectRatio: "1/1",
    },
    {
        src: "event_braingames.jpg",
        title: "Brain Games",
        time: "2023-02-27T00:00",
        location: "DBH 3011",
        description:
            "Think you have the biggest brain🧠? Grab your friends \
  and gear up for ICSSC's Brain Games, a week-long competition full of \
  brain games where you can compete against other students for prizes! \
  Brain Games will take place week 8 (Feb. 27-Mar.3), so make sure to \
  sign up before Feb. 24th!",
        aspectRatio: "1/1",
    },
    {
        src: "event_projectworkshop.jpg",
        title: "Personal Projects Workshop",
        time: "2023-02-15T00:00",
        location: "DBH 6011",
        description:
            "Does your resume sound like crickets🦗? Need an \
  awesome project to shoo them away? Join us for ICSSC’s Personal \
  Projects Workshop, where you'll brainstorm with others to create your \
  very own project and share them with your peers! You will be divided \
  into interest groups including game dev, web dev, app dev, embedded \
  systems, and more!",
        aspectRatio: "1/1",
    },
    {
        src: "event_discordbot.jpg",
        title: "Discord Bot Workshop",
        time: "2023-02-08T00:00",
        location: "DBH 6011",
        description:
            "Trying to spice up your Discord server? 🤖⌨️💬 Join \
  us for ICSSC’s Discord Bot Workshop, where you'll be guided through \
  making your own bot that responds to messages and custom commands!",
        aspectRatio: "1/1",
    },
    {
        src: "event_network.jpg",
        title: "Networking Night",
        time: "2023-02-01T00:00",
        location: "DBH 6011",
        description:
            "Have you thought about your career goals🤔? Want to \
  hear from your peers? It’s ICSSC Networking Night—come make some new \
  connections🤝! Ask questions to other students and gain insight into \
  what career path might be right for you!",
        aspectRatio: "1/1",
    },
    {
        src: "event_socialdeduct.jpg",
        title: "Social Deduction Night",
        time: "2023-01-25T00:00",
        location: "DBH 6011",
        description:
            "BOOM💣💥 The time is ticking🕚, and we need YOU to \
  help save the future! Join us for Social Deduction Night this \
  Wednesday, where you use your and your teammates use social skills to \
  negotiate your win, protect your king, and most importantly: have \
  fun! Come play Two Rooms and Boom, and save ICSSC!",
        aspectRatio: "1/1",
    },
    {
        src: "event_origami.jpg",
        title: "Origami Night",
        time: "2023-01-18T00:00",
        location: "DBH 6011",
        description:
            "*flip* *fold* BAM! 🐇Now you have an origami rabbit! \
  Come join us down the origami rabbit hole as we celebrate the Lunar \
  New Year! 🧧 Learn to make lanterns, envelopes, and more on your \
  journey to become an origami master. No scissors or tape allowed 🚫",
        aspectRatio: "1/1",
    },
    {
        src: "event_gingerbread.jpg",
        title: "Gingerbread House Making",
        time: "2022-11-30T00:00",
        location: "DBH 6011",
        description:
            "Mariah Carey is playing at the shopping malls, and what \
  does this mean? The holidays! Take shelter from the cold and the \
  incoming Finals and join us at DBH 6011 where we will build \
  Gingerbread Houses to get a kick start with Christmas spirit before we \
  return home for the holidays. Make sure to fill out the RSVP form! \
  🍪🥛->🎅->🎁🎄->😄",
        aspectRatio: "1/1",
    },
    {
        src: "event_webjam.jpg",
        title: "WebJam",
        time: "2022-11-14T00:00",
        location: "DBH 6011",
        description:
            "Looking for some jam on the web? 🍇 Want to make your \
  first personal project? 🤩 WebJam is an in-person week-long \
  competition where teams of students will develop fully functional web \
  applications about anything they wish! This competition will give \
  students the opportunity to learn how to create and deploy web \
  applications by having workshops hosted by several amazing clubs and \
  by providing mentors eager to assist you. After you present your \
  projects at the end of the week, the web applications that wow us the \
  most will be eligible for a variety of cool prizes! 🏆 The event is \
  open to students of all technical levels! We will be providing \
  workshops to help teach basic and intermediate concepts, so don't be \
  afraid to use this opportunity to advance your skills and add a \
  personal project to your resume 🤝",
        aspectRatio: "1/1",
    },
    {
        src: "event_alumnipanel.jpg",
        title: "Alumni Panel",
        time: "2022-11-09T00:00",
        location: "DBH 6011",
        description:
            "Wondering what your options are after graduation🎓? \
  Want to learn more about the CS field and what a typical day to day of \
  a Software Engineer is? ICSSC is proud to present Life After ICS, an \
  alumni panel 🧑‍🎓👨‍🎓👩‍🎓where you can personally meet and connect \
  with ICS alumni who now work in a variety of different fields. You \
  can learn more about what they do on the job, what skills they found \
  valuable and what they wish they had done before graduating📝. See you \
  there!",
        aspectRatio: "1/1",
    },
    {
        src: "event_karaoke.jpg",
        title: "Karaoke Night",
        time: "2022-10-26T00:00",
        location: "DBH 6011",
        description:
            "Looking to destress from midterms❓ Want to sing all \
  of your worries away🎵🎶🎤 🧑‍🎤Join us at Karaoke Night for fun vibes \
  and a chill time with your friends! Sing along and watch some exciting \
  performances! Don't forget to fill out any song requests you have \
  too📝",
        aspectRatio: "1/1",
    },
    {
        src: "event_famreveal.jpg",
        title: "Bits & Bytes Fam Reveal ",
        time: "2022-10-19T00:00",
        location: "DBH 6011",
        description:
            'Did you sign up to be a "Bit" this year? Join us this \
  WEDNESDAY, October 19th from 7-8 pm for our Bits and Bytes Fam Reveal! \
  Find out who your Byte is and meet the other Bits in your group! We\'ll \
  even be doing a friendly competition against the other fams!',
        aspectRatio: "1/1",
    },
    {
        src: "event_resumereview.jpg",
        title: "Elevator Pitch & Resume Workshop",
        time: "2022-11-09T00:00",
        location: "DBH 428",
        description:
            "Want to get some practice in before the In-Person STEM \
  Career Fair on Thursday? 🤓 Bring your elevator pitch 🗣 and a \
  physical copy of your resume 📄 to receive feedback at our Elevator \
  Pitch and Resume Workshop. You can also learn an overview on what to \
  expect before, during and after the career fair!🤵📋",
        aspectRatio: "1/1",
    },
];
