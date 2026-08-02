// Central content source for Khalif's Console.
// Everything here is plain text. Edit freely to make the site your own.

export const site = {
  name: "Khalif's Console",
  author: "Khalif",
  intro:
    "Khalif is a community and ecosystem builder and a self taught software engineer with over a decade of experience. He creates spaces where people and ideas come together, and builds the tools that bring them to life.",
  email: "hello@kcooperdev.com",
  speaking:
    "Available for talks and panels on early-stage building, focus, and the founder mindset.",
}

export type NavItem = { label: string; href: string; note: string }

export const nav: NavItem[] = [
  { label: "Home", href: "/", note: "Start here." },
  { label: "Projects", href: "/projects", note: "Things I'm building." },
  { label: "Books", href: "/books", note: "What I read and why." },
  { label: "Tools", href: "/tools", note: "What I use to work." },
  { label: "About", href: "/about", note: "A short bio." },
  { label: "Thoughts", href: "/thoughts", note: "Raw notes and founder logs." },
]

export type Project = {
  slug: string
  name: string
  description: string
  link: string
  body: string[]
}

export const projects: Project[] = [
  {
    slug: "tokenlens",
    name: "Tokenlens",
    description:
      "A CLI tool that shows you exactly where your tokens go so you can cut waste and lower AI costs.",
    link: "https://github.com/kcooperdev/tokenlens",
    body: [
      "AI bills grow quietly. Every prompt, every retry, every over-stuffed context window costs tokens, and most of that spend is invisible until the invoice arrives.",
      "Tokenlens is a TypeScript CLI that breaks the spend down: it shows exactly where your tokens go, so you can spot the waste and cut it before it compounds.",
      "It's a work in progress and in active development. It's the kind of small, sharp tool I like building for problems I run into myself.",
    ],
  },
  {
    slug: "whats-for-dinner",
    name: "What's for Dinner",
    description:
      "Scans the leftover items in your fridge and generates recipes from what's actually there.",
    link: "https://github.com/kcooperdev/whats-for-dinner",
    body: [
      "Open the fridge. Stare. Close the fridge. Order takeout. Repeat. What's for Dinner exists to kill that loop: the decision fatigue that hits at the worst time of day.",
      "You snap a photo of your fridge or pantry, and a vision model identifies what you have and proposes a recipe you can actually cook tonight. No meal-prep apps, no shopping lists. Just the food in front of you, turned into a plan in under ten seconds.",
      "Built with Next.js and Gemini, shipped on Vercel. It's the project that best captures how I like to build: a small, real problem, solved end to end.",
    ],
  },
  {
    slug: "pdf-reader-ai",
    name: "PDF Reader AI",
    description:
      "An AI-powered PDF reader that extracts, summarizes, and explains documents in seconds.",
    link: "https://github.com/kcooperdev/pdf-reader-ai",
    body: [
      "Most PDFs are where information goes to hide. Contracts, research papers, reports: dense pages you have to fight through to find the one thing you need.",
      "PDF Reader AI takes any document and automatically extracts, summarizes, and explains its content, so you can understand the file in seconds instead of an afternoon.",
      "It started as a tool for my own reading pile and turned into a study in making AI output feel trustworthy: clear sources, plain language, no hand-waving.",
    ],
  },
  {
    slug: "docmint",
    name: "Docmint",
    description: "A tool for generating better READMEs, because docs are the first impression.",
    link: "https://github.com/kcooperdev/docmint",
    body: [
      "A README is the front door of a project, and most of them are either empty or written in a hurry at 2am. Docmint helps you create better ones.",
      "It looks at what a project actually does and drafts documentation that a stranger could follow: setup, usage, and the why behind the code.",
      "The deeper idea: if writing good docs takes minutes instead of hours, more small projects get finished properly instead of abandoned at 90%.",
    ],
  },
  {
    slug: "findtechnearme",
    name: "Find Tech Near Me",
    description: "A web app for finding tech events happening near you.",
    link: "https://github.com/kcooperdev/findtechnearme",
    body: [
      "The best things in a tech scene happen in rooms, and most people never hear about them. Find Tech Near Me is a simple answer to a simple question: what's happening around me this week?",
      "It grew directly out of my community work in Baltimore. It's the same instinct behind Baltimore Tech Week, pointed at the everyday calendar instead of one big week.",
      "It's deliberately boring technology: a fast page, a clear list, and a map. The value is in the completeness, not the cleverness.",
    ],
  },
]

export type Book = { title: string; author: string; note: string; link: string }

export const books: Book[] = [
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    note: "A reminder that wealth and peace can be built the same way: patiently.",
    link: "https://www.navalmanack.com/",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    note: "Made me comfortable with going in a direction no one else is looking.",
    link: "https://www.goodreads.com/book/show/18050143-zero-to-one",
  },
  {
    title: "Letters to a Young Poet",
    author: "Rainer Maria Rilke",
    note: "The best writing about doubt I have ever read.",
    link: "https://www.goodreads.com/book/show/46199.Letters_to_a_Young_Poet",
  },
  {
    title: "The Practice",
    author: "Seth Godin",
    note: "Shipping is a habit, not a moment of courage.",
    link: "https://www.goodreads.com/book/show/52690005-the-practice",
  },
]

export type Tool = { name: string; use: string; slug: string }

// Brand logos are self-hosted in /public/logos (originally from theSVG.org).
export const tools: Tool[] = [
  { name: "Cursor", slug: "cursor", use: "Where most of the code gets written now. AI as a pair, not a crutch." },
  { name: "Next.js", slug: "nextjs", use: "The framework every idea gets shipped on." },
  { name: "TypeScript", slug: "typescript", use: "Guardrails that let me move fast without breaking things." },
  { name: "Figma", slug: "figma", use: "For thinking in pixels before a single line of code." },
  { name: "Canva", slug: "canva", use: "Quick visuals, decks, and social posts without the overhead." },
  { name: "Vercel", slug: "vercel", use: "One push and it's live. The calmest deploy I know." },
]

export type Thought = {
  slug: string
  date: string
  title: string
  excerpt: string
  readingTime: string
  body: string[]
}

export const thoughts: Thought[] = [
  {
    slug: "momentum-is-self-trust",
    date: "2026-07-30",
    title: "Momentum is just self-trust that hasn't been interrupted",
    excerpt:
      "Why the hardest part of a streak isn't starting it: it's not breaking the promise you quietly made to yourself.",
    readingTime: "3 min read",
    body: [
      "For a long time I thought momentum was about energy. If I could just get excited enough, motivated enough, caffeinated enough, the work would carry itself. It never worked for very long.",
      "What I actually feel when I have momentum is trust. I trust that if I sit down, I'll do the thing. That trust is built one kept promise at a time, and it's fragile in a very specific way: a single skipped day rarely hurts, but the story I tell myself about the skipped day does.",
      "The interruption is never the missed session. It's the sentence that follows: \"I guess I'm the kind of person who stops.\" Once that sentence is in the room, the streak isn't really about the streak anymore.",
      "So I've stopped optimizing for motivation and started protecting the story instead. Miss a day? Fine. Just don't narrate it. Show up the next morning like nothing happened, because as far as the work is concerned, nothing did.",
    ],
  },
  {
    slug: "sleep-and-a-morning-walk",
    date: "2026-07-22",
    title: "The overnight test for ideas",
    excerpt:
      "If an idea survives a night of sleep and a morning walk, it's probably worth building. Most don't.",
    readingTime: "2 min read",
    body: [
      "I get a lot of ideas at 11pm. Almost all of them feel like the best idea I've ever had. Almost none of them are.",
      "The filter I trust now is time, not judgment. I write the idea down and go to sleep. If I still care about it on the morning walk, if it's pulling me instead of me pushing it, that's signal. If I have to remind myself why it was exciting, that's the answer too.",
      "This costs nothing and saves weeks. The ideas that don't survive the night were usually just my ego looking for something to do.",
    ],
  },
  {
    slug: "deciding-what-not-to-do",
    date: "2026-07-11",
    title: "The hardest part of the work is deciding what not to do",
    excerpt:
      "Focus isn't a feeling you summon. It's a stack of small, deliberate refusals.",
    readingTime: "3 min read",
    body: [
      "Every interesting person I know has a graveyard of good ideas they chose not to pursue. Not bad ideas, good ones. That's what makes it hard.",
      "Saying no to a bad idea is easy; it barely registers as a decision. Saying no to a genuinely good idea because it isn't the idea is the actual discipline. It feels like loss, every time.",
      "I've started treating my todo list as a list of things I've agreed not to do yet. Three items. If a fourth shows up, something has to leave. The constraint hurts, and that's how I know it's working.",
    ],
  },
  {
    slug: "the-email-youre-afraid-to-send",
    date: "2026-06-28",
    title: "Write the email you're afraid to send",
    excerpt:
      "The message that scares you is usually the one that matters. Write it now. Send it later.",
    readingTime: "2 min read",
    body: [
      "There's a specific kind of email I used to avoid for days: the honest one. Asking for the thing directly. Admitting the mistake. Following up when the silence has gotten uncomfortable.",
      "The trick that finally worked was separating writing from sending. I write the scary email immediately, while the fear is sharp enough to make it honest. Then I close the laptop.",
      "An hour later I read it back as an editor, not a nervous person. Ninety percent of the time it's fine and I send it. The other ten percent, the wait saved me. Either way, the fear did its job and then got out of the way.",
    ],
  },
  {
    slug: "calm-is-a-competitive-advantage",
    date: "2026-06-15",
    title: "Calm is a competitive advantage",
    excerpt:
      "Almost no one is willing to be patient. That's exactly why patience wins.",
    readingTime: "3 min read",
    body: [
      "Most of the advantages people chase are crowded. Everyone wants to be faster, louder, first. The market for those things is efficient, which is another way of saying it's brutal.",
      "Patience is different. Almost no one is willing to do the boring version of the plan for long enough to see it work. The field clears out on its own, not because you got better, but because everyone else got bored.",
      "Calm isn't passive. It's the active refusal to be rushed into a worse decision. When you're the only steady person in a room full of urgency, you tend to get the last word, and often the best one.",
    ],
  },
]

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
