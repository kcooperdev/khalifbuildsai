import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { SectionHead } from "@/components/portfolio/SectionHead";
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

  const topicLine = thought.topics
    .map((t) => THOUGHT_TOPICS[t].toLowerCase())
    .join(" · ");

  return (
    <PortfolioLayout>
      <main>
        <section className="hero">
          <div className="shell">
            <Link href="/thoughts" className="page-back">
              ← thoughts
            </Link>
            <div className="eyebrow">{topicLine}</div>
            <h1>
              {thought.title}
              <span className="cursor" />
            </h1>
            <p className="lede">
              <time dateTime={thought.date}>
                {formatThoughtDate(thought.date)}
              </time>
            </p>
          </div>
        </section>

        <section className="about">
          <div className="shell">
            <SectionHead n="01" label="note" />
            {thought.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
    </PortfolioLayout>
  );
}
