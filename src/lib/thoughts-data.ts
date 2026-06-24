export const THOUGHT_TOPICS = {
  ai: "AI",
  tech: "Tech",
  building: "Building",
  tools: "Tools",
  misc: "Misc",
} as const;

export type ThoughtTopic = keyof typeof THOUGHT_TOPICS;

export type Thought = {
  slug: string;
  title: string;
  date: string;
  topics: ThoughtTopic[];
  excerpt: string;
  body: string[];
};

export const THOUGHTS: Thought[] = [];

export function getThought(slug: string): Thought | undefined {
  return THOUGHTS.find((t) => t.slug === slug);
}

export function formatThoughtDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
