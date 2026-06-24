import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackHome } from "@/components/BackHome";
import {
  THOUGHTS,
  THOUGHT_TOPICS,
  formatThoughtDate,
  getThought,
} from "@/lib/thoughts-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return THOUGHTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thought = getThought(slug);
  if (!thought) return { title: "Not found | kcooperdev" };

  return {
    title: `${thought.title} | kcooperdev`,
    description: thought.excerpt,
  };
}

export default async function ThoughtPage({ params }: Props) {
  const { slug } = await params;
  const thought = getThought(slug);
  if (!thought) notFound();

  return (
    <main>
      <BackHome />

      <article className="px-5 pb-14 pt-8 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/thoughts"
            className="mb-10 inline-flex items-center gap-1.5 text-[13px] text-white/30 transition-colors hover:text-white/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            All thoughts
          </Link>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <time
                dateTime={thought.date}
                className="font-mono text-[12px] text-white/25"
              >
                {formatThoughtDate(thought.date)}
              </time>
              {thought.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[11px] text-white/30"
                >
                  {THOUGHT_TOPICS[topic]}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {thought.title}
            </h1>
          </header>

          <div className="section-divider mb-10" />

          <div className="space-y-5 text-[15px] leading-relaxed text-white/40">
            {thought.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
