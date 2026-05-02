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
];

export const NOW: NowItem[] = [
  { k: "building", v: "AI tools and automations · workshop curriculum v2" },
  { k: "exploring", v: "Agent frameworks, on-device LLMs, voice interfaces" },
  { k: "community", v: "Hosting monthly meetups + AI workshops" },
  { k: "stack", v: "JavaScript / TypeScript · Node · Next · Claude · OpenAI" },
  { k: "open to", v: "Workshops · advisory · interesting AI projects" },
  { k: "not doing", v: "Cold outreach · pitch decks · hype-cycle thinkpieces" },
];
