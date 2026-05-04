export type ProjectStatus = "shipped" | "wip" | "concept" | "beta";

export type Project = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  status: ProjectStatus;
  year: string;
  repo?: string;
  demo?: string;
  readme?: string;
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "playground"; label?: string; code: string };

export type Post = {
  id: string;
  date: string;
  title: string;
  read: string;
  tag: string;
  excerpt: string;
  body: PostBlock[];
};

export type Folder = {
  id: string;
  name: string;
  title: string;
  description: string;
  posts: Post[];
};

const WHATS_FOR_DINNER_README = `# What's for Dinner

### AI-powered fridge scanner. Snap a photo, get a recipe.

![Day](https://img.shields.io/badge/DAY-01_%2F_30-10b981?style=for-the-badge&labelColor=000000)
![Stack](https://img.shields.io/badge/STACK-Next.js_%7C_Tailwind_%7C_Gemini-ffffff?style=for-the-badge&labelColor=000000)
![Status](https://img.shields.io/badge/STATUS-WIP-f59e0b?style=for-the-badge&labelColor=000000)

---

## Demo

![Demo](https://placehold.co/1200x675/0a0a0a/10b981/png?text=DEMO+GIF+HERE&font=roboto)

---

## The Idea

> Open the fridge. Stare. Close the fridge. Order takeout. Repeat.

What's for Dinner kills decision fatigue at the worst time of day. Snap a photo of your fridge or pantry, and Gemini's vision model identifies what you have and proposes a recipe you can actually cook tonight. No meal-prep apps, no shopping lists — just the food in front of you, turned into a plan in under ten seconds.

---

## How It Works

\`\`\`
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   PHOTO     │───▶│   GEMINI    │───▶│   RECIPE    │
│  (fridge,   │    │   (vision   │    │  (steps,    │
│   pantry)   │    │   + flash)  │    │   timing)   │
└─────────────┘    └─────────────┘    └─────────────┘
\`\`\`

1. **Capture** — user uploads or pastes a photo of their fridge.
2. **Detect** — Gemini vision identifies ingredients with rough quantities.
3. **Generate** — a server action prompts Gemini Flash for a single recipe using only what's visible.
4. **Render** — recipe streams back into the UI with steps, timing, and serving size.

---

## Stack

| Layer    | Tool                                         |
| -------- | -------------------------------------------- |
| Frontend | Next.js 16 · App Router · React 19           |
| Styling  | Tailwind CSS v4                              |
| AI       | Gemini 1.5 Flash (\`@google/generative-ai\`)   |
| Hosting  | Vercel                                       |

---

## Run Locally

\`\`\`bash
git clone https://github.com/khalifbuildsai/whats-for-dinner
cd whats-for-dinner
npm install
echo "GEMINI_API_KEY=your_key_here" > .env.local
npm run dev
\`\`\`
`;

export const PROJECTS: Project[] = [
  {
    id: "whats-for-dinner",
    title: "What's for Dinner",
    tag: "day 01",
    blurb:
      "AI-powered fridge scanner. Snap a photo, get a recipe in under ten seconds.",
    status: "wip",
    year: "2026",
    repo: "https://github.com/khalifbuildsai/whats-for-dinner",
    readme: WHATS_FOR_DINNER_README,
  },
];

export const FOLDERS: Folder[] = [
  {
    id: "data-structures",
    name: "data-structures",
    title: "Data Structures Refresher",
    description: "Back to fundamentals — one structure at a time.",
    posts: [
      {
        id: "arrays",
        date: "2026.05.01",
        title: "Arrays",
        read: "5 min",
        tag: "fundamentals",
        excerpt:
          "Contiguous memory, O(1) random access, and why almost every other structure secretly wants to be one.",
        body: [
          {
            type: "p",
            text: "An array is a contiguous block of memory holding elements of the same size. That's the whole pitch. Index i lives at base + i * size. The hardware loves this — caches eat sequential memory for breakfast.",
          },
          {
            type: "p",
            text: "Random access is O(1). Iteration is the fastest you can get on modern CPUs because of cache lines and prefetching. Inserting in the middle is O(n) because you have to slide elements over. Appending to a dynamic array is amortized O(1) because the underlying buffer doubles.",
          },
          {
            type: "p",
            text: 'Most languages\' "list" or "vector" type is a dynamic array, not a linked list. If you reach for a linked list reflexively, ask: do I actually need O(1) splice? Usually no.',
          },
          {
            type: "playground",
            label: "arrays.js",
            code: `// edit and hit run (or ⌘/Ctrl + ↵)
const arr = [1, 2, 3, 4, 5];

// O(1) random access
console.log("first:", arr[0]);
console.log("length:", arr.length);

// O(1) amortized — append
arr.push(6);
console.log("after push:", arr);

// O(n) — middle insert shifts everything right
arr.splice(2, 0, 99);
console.log("after splice:", arr);

// O(n) — search
console.log("indexOf 99:", arr.indexOf(99));

// try your own:
// const squared = arr.map(n => n * n);
// console.log(squared);
`,
          },
        ],
      },
    ],
  },
];
