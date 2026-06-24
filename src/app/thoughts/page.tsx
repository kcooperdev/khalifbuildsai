import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { SectionHead } from "@/components/portfolio/SectionHead";
import {
  THOUGHTS,
  THOUGHT_TOPICS,
  formatThoughtDate,
} from "@/lib/thoughts-data";

export const metadata: Metadata = {
  title: "Thoughts | kcooperdev",
  description: "Notes on AI, tech, and building.",
};

export default function ThoughtsPage() {
  const sorted = [...THOUGHTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PortfolioLayout>
      <main>
        <section className="hero">
          <div className="shell">
            <div className="eyebrow">notes · ai · tech</div>
            <h1>
              notes on ai and <span className="accent">tech</span>
              <span className="cursor" />
            </h1>
            <p className="lede">
              Short notes on AI, tools, and tech. When I write something down,
              it&apos;ll show up here.
            </p>
          </div>
        </section>

        <section>
          <div className="shell">
            <SectionHead
              n="01"
              label="notes"
              tag={
                sorted.length === 0
                  ? "// none yet"
                  : `// ${sorted.length}`
              }
            />

            {sorted.length === 0 ? (
              <p className="thought-empty">Nothing here yet.</p>
            ) : (
              <div className="proj-list">
                {sorted.map((thought, i) => (
                  <Link
                    key={thought.slug}
                    href={`/thoughts/${thought.slug}`}
                    className="proj-row"
                  >
                    <div className="pn">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pmid">
                      <div className="pt">
                        <h3>{thought.title}</h3>
                        {thought.topics.map((topic) => (
                          <span key={topic} className="tag">
                            {THOUGHT_TOPICS[topic]}
                          </span>
                        ))}
                      </div>
                      <div className="pb">{thought.excerpt}</div>
                    </div>
                    <div className="pst shipped">note</div>
                    <div className="py">
                      <time dateTime={thought.date}>
                        {formatThoughtDate(thought.date)}
                      </time>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </PortfolioLayout>
  );
}
