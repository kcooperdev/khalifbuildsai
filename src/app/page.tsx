"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { CATEGORIES, PROJECTS, type Project } from "@/lib/portfolio-data";
import { SectionHead } from "@/components/portfolio/SectionHead";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { Terminal } from "@/components/portfolio/Terminal";
import { TopBar } from "@/components/portfolio/TopBar";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { useTheme } from "@/components/portfolio/useTheme";

const HEADLINE = "Building AI tools, automations, and other cool things.";
const PER_PAGE = 5;

function Hero() {
  const words = HEADLINE.trim().split(/\s+/);
  const last = words.pop();
  const lead = words.join(" ");
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="eyebrow">software engineer · ai builder</div>
        <h1>
          {lead} <span className="accent">{last}</span>
          <span className="cursor" />
        </h1>
        <p className="lede">
          Software engineer. AI tinkerer. Community builder. I write JavaScript
          for a living and ship small AI tools and automations on the side —
          plus the occasional workshop and meetup.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="shell">
        <SectionHead n="01" label="about" tag="// who" />
        <p>
          Hi — I&apos;m <span className="accent">Khalif</span>. I&apos;ve been
          in tech for a decade and work as a software engineer, primarily in
          JavaScript. On the side I build AI tools, automations, and other
          things that scratch an itch.
        </p>
        <p>
          I also built and run a{" "}
          <a
            href="https://techafterdark.live"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-link"
          >
            tech community
          </a>{" "}
          of <span className="accent">1,100+ members</span>, host AI workshops,
          and spend a lot of my free time exploring whatever new model,
          framework, or weird idea is making the rounds. I&apos;m genuinely
          passionate about tech — the craft of it, the people in it, and the
          small useful things you can ship with it.
        </p>
      </div>
    </section>
  );
}

function ProjectsSection({
  onOpen,
}: {
  onOpen: (project: Project) => void;
}) {
  const allItems = PROJECTS;
  const tags = useMemo(() => ["all", ...CATEGORIES], []);
  const [filter, setFilterState] = useState("all");
  const [pageState, setPage] = useState(0);

  const items =
    filter === "all" ? allItems : allItems.filter((p) => p.tag === filter);
  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const page = Math.min(Math.max(0, pageState), totalPages - 1);

  const setFilter = (tg: string) => {
    setFilterState(tg);
    setPage(0);
  };

  const start = page * PER_PAGE;
  const slice = items.slice(start, start + PER_PAGE);

  return (
    <section id="projects">
      <div className="shell">
        <SectionHead
          n="02"
          label="what i build"
          tag={`// ${items.length} of ${allItems.length}`}
        />
        <div className="filter-bar">
          {tags.map((tg) => (
            <button
              key={tg}
              className={`fb-chip ${filter === tg ? "on" : ""}`}
              onClick={() => setFilter(tg)}
            >
              {tg}
            </button>
          ))}
        </div>
        <div className="proj-list">
          {slice.map((p, i) => (
            <a
              className="proj-row"
              id={`project-${p.id}`}
              key={p.id}
              href={p.repo ?? "#"}
              onClick={(e) => {
                e.preventDefault();
                onOpen(p);
              }}
            >
              <div className="pn">
                {String(start + i + 1).padStart(2, "0")}
              </div>
              <div className="pmid">
                <div className="pt">
                  <h3>{p.title}</h3>
                  <span className="tag">{p.tag}</span>
                </div>
                <div className="pb">{p.blurb}</div>
              </div>
              <div className={`pst ${p.status}`}>{p.status}</div>
              <div className="py">{p.year}</div>
            </a>
          ))}
        </div>
        <div className="pager">
          <div className="info">
            showing {start + 1}–{Math.min(start + PER_PAGE, items.length)} of{" "}
            {items.length}
          </div>
          <div className="pgs">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={i === page ? "on" : ""}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="nav">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              ← prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
            >
              next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    {
      k: "github",
      v: "github.com/kcooperdev",
      href: "https://github.com/kcooperdev",
    },
    {
      k: "linkedin",
      v: "linkedin.com/in/kcooperdev",
      href: "https://www.linkedin.com/in/kcooperdev",
    },
    {
      k: "bluesky",
      v: "@kcooperdev.bsky.social",
      href: "https://bsky.app/profile/kcooperdev.bsky.social",
    },
    {
      k: "x",
      v: "x.com/kcooperdev",
      href: "https://x.com/kcooperdev",
    },
  ];
  return (
    <section id="contact" className="contact">
      <div className="shell">
        <SectionHead n="04" label="contact" tag="// say hi" />
        <h3>
          Say hi — I&apos;m{" "}
          <span className="accent">@kcooperdev</span> almost everywhere.
        </h3>
        <div className="links">
          {links.map((l) => (
            <a key={l.k} href={l.href} target="_blank" rel="noopener noreferrer">
              <span className="lk">{l.k}</span>
              <span className="lv">{l.v}</span>
              <span className="lar">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [theme, setTheme] = useTheme();
  const [termOpen, setTermOpen] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // ` or / opens terminal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = (target?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "`" || (e.key === "/" && !e.metaKey && !e.ctrlKey)) {
        e.preventDefault();
        setTermOpen((o) => !o);
      } else if (e.key === "Escape") {
        setTermOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <ProjectsSection onOpen={setOpenProject} />
        <Contact />
      </main>
      <SiteFooter />

      <button
        className="hint"
        onClick={() => setTermOpen(true)}
        aria-label="open terminal"
      >
        <span>terminal</span>
        <span className="kbd">`</span>
      </button>

      <Terminal
        open={termOpen}
        onClose={() => setTermOpen(false)}
        setTheme={setTheme}
        onOpenProject={setOpenProject}
      />
      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </>
  );
}
