"use client";

import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useSyncExternalStore,
} from "react";
import { PROJECTS, POSTS, type Post } from "@/lib/portfolio-data";
import { Terminal } from "@/components/portfolio/Terminal";

type Theme = "dark" | "light";

const THEME_EVENT = "kbai-theme-change";

function subscribeTheme(cb: () => void): () => void {
  window.addEventListener(THEME_EVENT, cb);
  return () => window.removeEventListener(THEME_EVENT, cb);
}
function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}
function getServerThemeSnapshot(): Theme {
  return "dark";
}

function useTheme(): [Theme, (t: Theme) => void] {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const setTheme = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      window.localStorage.setItem("kbai-theme", t);
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);
  return [theme, setTheme];
}

const HEADLINE = "Building AI tools, automations, and other cool things.";
const PER_PAGE = 5;

function TopBar({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <nav>
          <a href="#projects">projects</a>
          <a href="#notes">notes</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="toggle theme"
        >
          <span className="dot" />
          <span className="theme-toggle-label">{theme}</span>
        </button>
      </div>
    </header>
  );
}

function SectionHead({
  n,
  label,
  tag,
}: {
  n: string;
  label: string;
  tag?: string;
}) {
  return (
    <div className="sec-head">
      <span className="num">{n}</span>
      <span className="ttl">{label}</span>
      <span className="ln" />
      {tag && <span>{tag}</span>}
    </div>
  );
}

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
          I also built and run a tech community of{" "}
          <span className="accent">1,100+ members</span>, host AI workshops,
          and spend a lot of my free time exploring whatever new model,
          framework, or weird idea is making the rounds. I&apos;m genuinely
          passionate about tech — the craft of it, the people in it, and the
          small useful things you can ship with it.
        </p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const allItems = PROJECTS;
  const tags = useMemo(() => {
    const set = new Set(allItems.map((p) => p.tag));
    return ["all", ...Array.from(set)];
  }, [allItems]);
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
              href="#"
              onClick={(e) => e.preventDefault()}
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

function PostModal({
  post,
  onClose,
}: {
  post: Post | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className="post-overlay" onClick={onClose}>
      <article
        className="post-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="post-title"
      >
        <header className="post-bar">
          <span className="post-bar-meta">
            <span className="accent">{post.date}</span>
            <span className="dim">
              {" "}
              · {post.tag} · {post.read}
            </span>
          </span>
          <button
            className="post-close"
            onClick={onClose}
            aria-label="close post"
          >
            ×
          </button>
        </header>
        <div className="post-body">
          <div className="post-eyebrow">{`// ${post.tag}`}</div>
          <h1 id="post-title" className="post-title">
            {post.title}
          </h1>
          <div className="post-excerpt">{post.excerpt}</div>
          <div className="post-rule" />
          <div className="post-prose">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="post-foot">
            <span className="dim">— khalif</span>
            <button className="post-close-btn" onClick={onClose}>
              close ←
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function NotesSection({ onOpen }: { onOpen: (post: Post) => void }) {
  return (
    <section id="notes">
      <div className="shell">
        <SectionHead n="03" label="notes" tag={`// ${POSTS.length} posts`} />
        <div className="notes">
          {POSTS.map((p, i) => (
            <a
              className="note-row"
              key={i}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onOpen(p);
              }}
            >
              <div className="nd">{p.date}</div>
              <div className="nm">
                <div className="nh">
                  <h3>{p.title}</h3>
                  <span className="ntag">{p.tag}</span>
                </div>
                <div className="nx">{p.excerpt}</div>
              </div>
              <div className="nr">{p.read}</div>
              <div className="narr">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    {
      k: "github",
      v: "github.com/khalifbuildsai",
      href: "https://github.com/khalifbuildsai",
    },
    {
      k: "linkedin",
      v: "linkedin.com/in/khalifbuildsai",
      href: "https://www.linkedin.com/in/khalifbuildsai",
    },
    {
      k: "bluesky",
      v: "@khalifbuildsai.bsky.social",
      href: "https://bsky.app/profile/khalifbuildsai.bsky.social",
    },
    {
      k: "twitter",
      v: "@khalifbuildsai",
      href: "https://twitter.com/khalifbuildsai",
    },
  ];
  return (
    <section id="contact" className="contact">
      <div className="shell">
        <SectionHead n="04" label="contact" tag="// say hi" />
        <h3>
          Say hi — I&apos;m{" "}
          <span className="accent">@khalifbuildsai</span> almost everywhere.
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

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell frow">
        <div>© {new Date().getFullYear()} khalifbuildsai</div>
        <div className="dim">no analytics · no cookies · no popups</div>
        <div>v1.0 · made by hand</div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [theme, setTheme] = useTheme();
  const [termOpen, setTermOpen] = useState(false);
  const [openPost, setOpenPost] = useState<Post | null>(null);

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
        <ProjectsSection />
        <NotesSection onOpen={setOpenPost} />
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
      />
      <PostModal post={openPost} onClose={() => setOpenPost(null)} />
    </>
  );
}
