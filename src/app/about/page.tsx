import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stat } from "@/components/ui/Stat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BLK Tech Connect — Beyond Limits & Knowledge",
  description:
    "BLK Tech Connect was created to bring world-class technology, education, and innovation to communities that have been historically overlooked in the digital economy.",
};

const stats = [
  { value: "750+", label: "Community Members" },
  { value: "10+", label: "Events Hosted" },
  { value: "10+", label: "Partner Organizations" },
  { value: "100+", label: "Career Connections" },
];

const values = [
  {
    title: "Access",
    description:
      "We remove barriers to entry in tech by providing free and low-cost resources, mentorship, and community support to anyone ready to grow.",
    icon: "🔓",
  },
  {
    title: "Innovation",
    description:
      "We support emerging technologists, aspiring founders, creatives, and problem-solvers who want to shape the future — not just watch it happen.",
    icon: "💡",
  },
  {
    title: "Economic Mobility",
    description:
      "We build direct pathways from community to career, strengthening local economies and transforming overlooked cities into hubs of opportunity.",
    icon: "📈",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              About Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Beyond Limits
              <br />
              <span className="text-gradient-warm">& Knowledge.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              BLK Tech Connect was created to bring world-class technology,
              education, and innovation to communities that have been
              historically overlooked in the digital economy.
            </p>
          </div>
        </section>

        {/* What BLK Stands For */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              The Meaning Behind the Name
            </p>
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              B.L.K. —{" "}
              <span className="text-gradient-warm">Beyond Limits &amp; Knowledge</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              BLK is more than initials — it&apos;s a declaration. It stands for
              the belief that no barrier is permanent and no ceiling is final.
              When you move beyond limits and knowledge, you refuse to be
              defined by what you don&apos;t yet have and instead build toward
              what&apos;s possible.
            </p>

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {/* Beyond */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#141414] hover-lift">
                <span className="mb-4 inline-block text-4xl font-black text-amber-400 md:text-5xl">
                  B
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">Beyond</h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  Go past every boundary — geographic, economic, or
                  systemic — that says you don&apos;t belong in tech. Beyond
                  is a mindset: there is always further to reach.
                </p>
              </div>

              {/* Limits */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#141414] hover-lift">
                <span className="mb-4 inline-block text-4xl font-black text-violet-400 md:text-5xl">
                  L
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">Limits</h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  The ceilings placed on underserved communities are real —
                  but they are not permanent. We exist to dismantle them
                  through access, education, and relentless support.
                </p>
              </div>

              {/* Knowledge */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#141414] hover-lift">
                <span className="mb-4 inline-block text-4xl font-black text-amber-400 md:text-5xl">
                  K
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">Knowledge</h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  Knowledge is the great equalizer. When communities gain
                  skills, mentorship, and real-world experience, they don&apos;t
                  just participate in the future — they build it.
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
                    Across the country, communities full of ambition and
                    creativity are locked out of the innovation economy — not
                    because of a lack of ability, but a lack of access. The
                    digital divide isn&apos;t just about Wi-Fi; it&apos;s about who
                    gets invited to the table, who gets trained, and who gets
                    funded.
                  </p>
                  <p>
                    BLK Tech Connect exists because we refuse to accept that
                    zip code should determine destiny. We believe that when you
                    equip people with knowledge and surround them with
                    community, limits dissolve and futures open up.
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80">
                  Our Purpose
                </p>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Build. Launch. Keep going.
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
                  <p>
                    Our purpose is to create the infrastructure — events,
                    programs, mentorship, and partnerships — that turns
                    potential into progress. We don&apos;t just inspire; we equip.
                    We don&apos;t just connect; we catalyze.
                  </p>
                  <p>
                    Every workshop, hackathon, and meetup we host is designed
                    to move someone one step closer to a career in tech, a
                    launched startup, or a community that has their back. This
                    is a movement you carry with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        {/* Brand Story */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Our Story
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Closing the gap, one community at a time.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              <p>
                In many cities, the tech ecosystem is small, under-resourced,
                or still emerging. Yet the talent, creativity, and ambition are
                already there — they simply need access, connection, and a
                place to grow. We exist to close that gap.
              </p>
              <p>
                Through consistent programming, hands-on learning, and
                community-driven events, BLK Tech Connect helps residents
                build the skills, confidence, and networks needed to thrive in
                a rapidly changing world. We support emerging technologists,
                aspiring founders, creatives, and problem-solvers who want to
                shape the future — not just watch it happen.
              </p>
              <p>
                Our work strengthens local economies, builds innovation
                pipelines, and transforms overlooked cities into hubs of
                creativity and opportunity. BLK Tech Connect is more than a
                community — it&apos;s a catalyst for growth, a launchpad for
                talent, and a movement to ensure every city has a place in the
                future of technology.
              </p>
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
                  To push communities beyond every limit by expanding access
                  to technology, education, and innovation — empowering people
                  to build knowledge, develop skills, and unlock new pathways
                  for economic mobility and future-ready careers.
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
              What Drives Us
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
      <Footer />
    </div>
  );
}
