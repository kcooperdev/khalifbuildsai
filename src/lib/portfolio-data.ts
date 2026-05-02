export type ProjectStatus = "shipped" | "wip" | "concept" | "beta";

export type Project = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  status: ProjectStatus;
  year: string;
};

export type Post = {
  date: string;
  title: string;
  read: string;
  tag: string;
  excerpt: string;
  body: string[];
};

export type NowItem = { k: string; v: string };

export const PROJECTS: Project[] = [
  {
    id: "ai-tool-01",
    title: "Untitled AI Tool",
    tag: "ai tool",
    blurb:
      "An AI-powered something. Drop in real description, screenshot, and link when ready.",
    year: "2026",
    status: "wip",
  },
  {
    id: "ai-tool-02",
    title: "Untitled AI Tool",
    tag: "ai tool",
    blurb:
      "Another small AI tool I'm building. Replace this card with a real one.",
    year: "2026",
    status: "wip",
  },
  {
    id: "automation-01",
    title: "Untitled Automation",
    tag: "automation",
    blurb:
      "An n8n / Make / custom automation that saves a real person real time. Add details.",
    year: "2026",
    status: "wip",
  },
  {
    id: "automation-02",
    title: "Untitled Automation",
    tag: "automation",
    blurb:
      "Another workflow / pipeline / cron-job kind of thing. Replace with real copy.",
    year: "2026",
    status: "wip",
  },
  {
    id: "workshop-01",
    title: "AI Workshop Series",
    tag: "workshop",
    blurb:
      "Hands-on AI workshops for the community — practical, no-fluff, ship-something-by-the-end format.",
    year: "2025–26",
    status: "shipped",
  },
  {
    id: "community-01",
    title: "Tech Community",
    tag: "community",
    blurb:
      "A 1,100+ member community of engineers, builders, and curious people. Mostly software, some hardware, all signal.",
    year: "ongoing",
    status: "shipped",
  },
  {
    id: "experiment-01",
    title: "Untitled Experiment",
    tag: "experiment",
    blurb:
      "A small thing I built in a weekend. Placeholder — swap in something real.",
    year: "2026",
    status: "concept",
  },
  {
    id: "experiment-02",
    title: "Untitled Experiment",
    tag: "experiment",
    blurb:
      "Another half-formed idea I'm noodling on. Will document if it survives the week.",
    year: "2026",
    status: "concept",
  },
];

export const POSTS: Post[] = [
  {
    date: "2026.04.22",
    title: "Building AI tools as a solo engineer",
    read: "6 min",
    tag: "essay",
    excerpt:
      "What I've learned shipping AI-powered side projects after a decade in software. Less hype, more glue code.",
    body: [
      "There's a particular kind of self-doubt that hits when you ship an AI tool alone. The model is doing 90% of the work. The wrapper around it is 200 lines of glue code. And yet, somehow, it took you three weeks.",
      "After a decade in software and the last two years exclusively shipping AI-powered things on the side, I've made peace with the math. The model is the engine. You are the chassis, the dashboard, the seat, the smell of the interior, and most importantly, the thing that decides where the car is going.",
      "The interesting work isn't the prompt. It's the choices around the prompt: what context to pass, what to strip out, what to do when the model is wrong, how to make the wrong-ness recoverable. That's not glue code. That's the entire product.",
      "Three rules I've settled on: (1) ship the smallest version that's honest about its limits. (2) build for the day the model gets ten times cheaper, not the day it gets ten times smarter. (3) give the user a way to overrule the AI by typing one sentence.",
      "None of this is novel. All of it is hard-won. That's the gig.",
    ],
  },
  {
    date: "2026.03.30",
    title: "Running a 1,100+ person tech community",
    read: "5 min",
    tag: "community",
    excerpt:
      "Lessons from growing a local tech community from a Discord channel of 12 to over a thousand engineers, designers, and founders.",
    body: [
      "We started in a Discord with twelve people, most of whom I knew personally. Three years later we crossed eleven hundred members and I had to write a code of conduct for the first time. Here's what I'd tell past me.",
      "Stop optimizing for growth. Start optimizing for the median Tuesday. A community lives or dies on what happens when nothing exciting is going on — when there's no event, no launch, no drama. If the channel is quiet on Tuesday, you have a problem.",
      "Reply to the first message of every new member, by hand, even when there are forty a week. It's the single highest-leverage thing I do. Most people never write a second message until someone responds to their first.",
      "In-person events are an unfair advantage. Nothing online beats forty people in a room with bad pizza and a projector. Run them on a predictable cadence and protect that cadence with your life.",
      "Lastly: the community is not your audience. It's not a funnel. It's a place. Treat it like a place — like a corner shop you happen to keep the keys to — and the rest gets easier.",
    ],
  },
  {
    date: "2026.03.11",
    title: "Notes from my last AI workshop",
    read: "4 min",
    tag: "field notes",
    excerpt:
      "What worked, what flopped, and what I changed for the next one. Hands-on workshops are a different game than talks.",
    body: [
      "Ran an AI workshop last weekend. Twenty-three people, ninety minutes, one borrowed projector. Here's the post-mortem.",
      "What worked: starting with a working demo on screen before anyone touched their laptop. People need to see the destination before they'll trust the route.",
      "What worked: a strict 'no slides past minute five' rule. The moment someone is reading words on a wall, they've stopped building.",
      "What flopped: assuming everyone had API keys. Three people lost the first twenty minutes to billing pages. Next time I'm bringing a pool of pre-paid keys to hand out.",
      "What flopped: my pacing. I had eight exercises planned. We got through five. Cut early, not late — nobody remembers the bonus exercise, everyone remembers running out of time.",
      "Change for next workshop: open with the smallest possible 'hello world' AI call — ten lines of code, one curl command — and only after that's working on every laptop, move on. Momentum is the whole game.",
    ],
  },
  {
    date: "2026.02.18",
    title: "Automations that actually save time",
    read: "7 min",
    tag: "automation",
    excerpt:
      "Five small automations I built for myself this year that paid back their build time within a week. With code.",
    body: [
      "Most automations are theatrical. They look like they're saving time, but if you do the math, the build cost dwarfs anything they save. Here are five that didn't.",
      "1. Inbox triage. A small script that reads my email every morning, classifies it into 'reply', 'read', 'ignore', and writes a one-paragraph summary of the 'read' pile. Two hours to build. Saves about thirty minutes a day.",
      "2. Receipt-to-spreadsheet. Photo of a receipt goes into a folder, a vision model pulls vendor / total / date / category, a row appears in a Google Sheet. My accountant sends fewer follow-ups. Both of us are happier.",
      "3. Meeting prep. Fifteen minutes before any calendar event with another human, a script DMs me a short brief: who they are, what we last talked about, three open threads. Embarrassingly useful.",
      "4. Workshop reminders. Custom reminders for every workshop attendee at T-24h, T-2h, and T+1h with three different messages. Show-up rate went from 60% to 84%.",
      "5. Idea capture. Voice note hits a folder, a model transcribes it, summarizes it, files it under the right project. Takes the friction out of having an idea on a walk.",
      "None of these are clever. All of them are boring. That's the point. The good automations are boring.",
    ],
  },
  {
    date: "2026.01.27",
    title: "On-device LLMs are weirdly fun",
    read: "5 min",
    tag: "tech",
    excerpt:
      "Running a 3B model on an old M1 changed how I think about feature scope. Tiny tools deserve tiny brains.",
    body: [
      "I spent a weekend running small models locally on an M1 from 2020 and came out the other side with opinions.",
      "The first thing you notice is how fast a 3B model is when there is no network in the loop. Token streaming feels like typing. There is something deeply unserious and delightful about an LLM that responds before you've finished blinking.",
      "The second thing you notice is how often you don't need a frontier model. For classification, summarization, structured extraction — ninety percent of what I actually use AI for in tools — a small local model does the job for free, offline, and without sending the user's data anywhere.",
      "The third thing you notice is what gets unlocked. Tools that run on a plane. Tools that work when the wifi is bad. Tools that don't have a 'what about privacy' footnote.",
      "I'm not going to pretend small models are a free lunch. They lose at reasoning, long context, and tool use. But the design space they open up for tiny, opinionated, single-purpose tools is genuinely exciting, and I think it's where a lot of the next wave of useful AI software is going to come from.",
    ],
  },
  {
    date: "2026.01.09",
    title: "A decade in JavaScript",
    read: "8 min",
    tag: "essay",
    excerpt:
      "Ten years of writing JS for a living. What stuck, what I'd unlearn, and why I'm still here when half my friends moved to Go.",
    body: [
      "I wrote my first paid line of JavaScript in 2015. It was inside a jQuery callback, on a CMS that no longer exists, for a client who paid in checks. Ten years later, I'm still here, and I've thought about why.",
      "What stuck: the language is a moving target in the best way. Every year there's a new thing that makes some old pattern obsolete. The Promise. async/await. Optional chaining. Top-level await. Each one quietly raised the floor.",
      "What I'd unlearn: the addiction to abstractions. I spent years building towers of indirection that I would now happily replace with three plain functions and a comment. The intermediate me wrote 'clever' code. The current me writes obvious code.",
      "Why I'm still here when half my friends moved to Go or Rust: because the place I want to ship is the browser, and JavaScript is the language of the browser. That's not romantic. That's the deal.",
      "The thing nobody tells you about a decade in one language is how much of the work is unrelated to the language. It's about modeling, naming, debugging, deleting. JavaScript is the keyboard, not the song.",
    ],
  },
  {
    date: "2025.12.14",
    title: "How I prep for an AI workshop",
    read: "4 min",
    tag: "workshop",
    excerpt:
      "My exact playbook for running a 90-minute, hands-on workshop where everyone leaves with something working on their laptop.",
    body: [
      "Here is the literal checklist I run through the day before any AI workshop. Steal it.",
      "Three days before: send a setup email. One paragraph. 'Bring a laptop. Install Node 20+. Sign up for an API key here. If you can run hello-world before showing up, you'll get more out of the workshop.' That's the whole email.",
      "One day before: build the demo I'm going to open with, from a clean folder, on a different laptop than usual. If it doesn't work on someone else's machine, it doesn't work.",
      "Day of, two hours before: arrive early. Test the projector. Find the wifi password. Note where the outlets are. Boring logistics is half of why a workshop feels professional.",
      "Day of, fifteen minutes in: stop teaching. Walk the room. Sit next to the person who has not typed anything yet. They are not stupid. They are stuck. The faster you find them, the better the workshop goes.",
      "After: send a one-email follow-up with the repo, the slides (if any), and one homework problem. Most attendees will not do the homework. Some will. Those are your future regulars.",
    ],
  },
  {
    date: "2025.11.20",
    title: "Why I build in public",
    read: "3 min",
    tag: "essay",
    excerpt:
      "The short version: feedback loops are everything, and shipping with the door open beats shipping with it closed.",
    body: [
      "I used to build with the door closed. I'd disappear for six months, emerge with a thing, and watch nobody care. I've stopped doing that.",
      "Building in public, to me, isn't about audience. It's about feedback loops. When the door is open, every screenshot is a tiny user test. Every offhand reply is a roadmap hint. The cost of being wrong drops, because you find out you're wrong on day three instead of day eighty.",
      "It's also — and I think people undersell this — a forcing function for honesty. It's hard to lie to yourself about progress when you've been posting screenshots all month. The work has to be real.",
      "Two warnings. One: don't confuse posting with shipping. The post is not the product. Two: protect the early stuff. Some ideas need to be ugly in private for a while before they're ready for daylight.",
      "That's the whole pitch. Open the door earlier than feels comfortable. Take the feedback. Keep going.",
    ],
  },
];

export const NOW: NowItem[] = [
  { k: "building", v: "AI tools and automations · workshop curriculum v2" },
  { k: "exploring", v: "Agent frameworks, on-device LLMs, voice interfaces" },
  { k: "community", v: "Hosting monthly meetups + AI workshops" },
  { k: "stack", v: "JavaScript / TypeScript · Node · Next · Claude · OpenAI" },
  { k: "open to", v: "Workshops · advisory · interesting AI projects" },
  { k: "not doing", v: "Cold outreach · pitch decks · hype-cycle thinkpieces" },
];
