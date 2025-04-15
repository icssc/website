type Event = {
    src: string;
    title: string;
    description: string;
    time: string;
    location: string;
    aspectRatio?: string;
};

export const EVENTS_DATA: Event[] = [
    {
        src: "event_aux-battle.png",
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
        src: "event_chapman-mixer.png",
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
        src: "event_squid-game.png",
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
        src: "event_research-panel.png",
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
        src: "event_planning-your-academic-journey.png",
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
        src: "event_cupids-mailbox-crafts.png",
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
        src: "event_intro-to-ai-workshop.png",
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
        src: "event_resume-workshop.png",
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
        src: "event_icssc-faculty-panel.png",
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
        src: "event_ics-club-fair-2025.png",
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
        src: "event_sliding-into-the-new-year.png",
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
        src: "event_cookie-decorating.png",
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
        src: "event_hackathon-101.png",
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
        src: "event_ics-pathways.png",
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
        src: "event_two-rooms-and-a-boom.png",
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
        src: "event_mock-interviews.png",
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
        src: "event_bits-and-bytes-reveal.png",
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
        src: "event_internship-panel.png",
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
        src: "spacex.png",
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
        src: "Webjam-IG.PNG",
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
        src: "Artsy_Autumn_IG.png",
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
        src: "Bits&BytesFamReveal2023_InstagramSquare.png",
        title: "Bits & Bytes Fam Reveal",
        time: "2024-10-25T00:00",
        location: "DBH 6011",
        description:
            "Meet your bytes, celebrate with your co-bits, and \
  compete against other families with your new friends and mentors!🏁",
        aspectRatio: "1/1",
    },
    {
        src: "ROUND1_IG.png",
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
        src: "event_microtalk.png",
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
