import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | khalifbuildsai — Self-Taught Engineer Building with AI",
  description:
    "I taught myself to code, fell in love with AI, and built what I wished I had — a community where anyone can learn, build, and grow.",
};

const values = [
  {
    title: "Access",
    description:
      "I remove barriers to entry in AI by providing free and low-cost resources, mentorship, and community support to anyone ready to grow.",
    icon: "🔓",
  },
  {
    title: "Innovation",
    description:
      "I support emerging builders, aspiring founders, creatives, and problem-solvers who want to shape the future with AI — not just watch it happen.",
    icon: "💡",
  },
  {
    title: "Economic Mobility",
    description:
      "I build direct pathways from community to career, strengthening local economies and transforming overlooked cities into hubs of opportunity.",
    icon: "📈",
  },
];

export default function AboutPage() {
  return (
    <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              About Me
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Self-Taught.
              <br />
              <span className="text-gradient-warm">AI-Obsessed.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              I&apos;m Khalif — a self-taught software engineer who fell in
              love with AI and built what I wished I had: a community where
              anyone can learn, build, and grow.
            </p>
          </div>
        </section>

        {/* The Journey */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              The Journey
            </p>
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              No degree required.{" "}
              <span className="text-gradient-warm">Just building.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              I didn&apos;t take the traditional path. I taught myself
              everything — and that&apos;s exactly why I believe anyone can
              do this. Here&apos;s what drives me.
            </p>

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#141414] hover-lift">
                <span className="mb-4 inline-block text-4xl font-black text-amber-400 md:text-5xl">
                  01
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">Self-Taught</h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  No CS degree — just curiosity, late nights,
                  and the internet. I learned to code from scratch and
                  proved that access beats pedigree.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#141414] hover-lift">
                <span className="mb-4 inline-block text-4xl font-black text-violet-400 md:text-5xl">
                  02
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">Found AI</h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  When I discovered AI, everything clicked. I saw a
                  technology that could level the playing field for anyone
                  willing to learn — and I went all in.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#141414] hover-lift">
                <span className="mb-4 inline-block text-4xl font-black text-amber-400 md:text-5xl">
                  03
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">Built This</h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  I built what I wished I had — a community, courses, and
                  events all focused on AI. Because the biggest barrier to
                  AI isn&apos;t intelligence — it&apos;s access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Why */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
                  The Why
                </p>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Because talent is everywhere.{" "}
                  <span className="text-gradient-muted">Opportunity is not.</span>
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
                  <p>
                    I taught myself to code. No CS degree — just
                    curiosity, late nights, and the internet. When I discovered
                    AI, everything changed. I saw a technology that could
                    level the playing field for anyone willing to learn. But
                    across the country, communities full of ambition are locked
                    out — not because of a lack of ability, but a lack of access.
                  </p>
                  <p>
                    khalifbuildsai exists because I refuse to accept that
                    zip code should determine who gets to build with AI. When
                    you equip people with knowledge and surround them with
                    community, limits dissolve and futures open up.
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80">
                  My Purpose
                </p>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Build. Launch. Keep going.
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
                  <p>
                    My purpose is to create the infrastructure — events,
                    courses, mentorship, and community — that turns
                    potential into progress. I don&apos;t just inspire; I equip.
                    I don&apos;t just connect; I catalyze.
                  </p>
                  <p>
                    Every workshop, live session, and meetup I host is designed
                    to move someone one step closer to building with AI, a
                    launched startup, or a community that has their back. This
                    is a movement you carry with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I've Done */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Track Record
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
              What I&apos;ve built so far.
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
                <h3 className="text-[15px] font-semibold text-white">Scaled a tech community from 0 to 900+ members offline</h3>
                <p className="mt-1 text-[14px] text-white/30">Built and grew an in-person tech community in less than a year.</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
                <h3 className="text-[15px] font-semibold text-white">Speaker & panelist</h3>
                <p className="mt-1 text-[14px] text-white/30">Spoke at American University and participated in panels on AI, community building, and self-teaching.</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
                <h3 className="text-[15px] font-semibold text-white">AI workshops</h3>
                <p className="mt-1 text-[14px] text-white/30">Host hands-on AI workshops teaching people how to use and build with artificial intelligence.</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
                <h3 className="text-[15px] font-semibold text-white">Chapter Organizer, AI Collective — Baltimore</h3>
                <p className="mt-1 text-[14px] text-white/30">Organizing the Baltimore chapter of AI Collective, bringing AI builders together locally.</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
                <h3 className="text-[15px] font-semibold text-white">Founder, Baltimore Tech Week</h3>
                <p className="mt-1 text-[14px] text-white/30">Created the first ever Baltimore Tech Week — bringing the city&apos;s tech community together for a week of events, panels, and connection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 hover-lift transition-all duration-300">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
                  Mission
                </p>
                <p className="text-base leading-relaxed text-white/60 md:text-lg md:leading-relaxed">
                  To make AI accessible to everyone — through education,
                  community, and real-world building. I want to empower people
                  to develop skills, unlock new career pathways, and build
                  things that matter with artificial intelligence.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 hover-lift transition-all duration-300">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80">
                  Vision
                </p>
                <p className="text-base leading-relaxed text-white/60 md:text-lg md:leading-relaxed">
                  A world where every city — regardless of size or resources —
                  has the talent, infrastructure, and community support needed
                  to become a thriving hub of innovation, entrepreneurship,
                  and opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              What Drives Me
            </p>
            <h2 className="mb-12 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Unlocking talent.{" "}
              <span className="text-gradient-muted">Expanding opportunity.</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3 md:gap-10">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift"
                >
                  <div className="mb-4 text-3xl">{value.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/40">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </main>
  );
}
