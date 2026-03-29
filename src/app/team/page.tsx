import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | BLK Tech Connect — Beyond Limits & Knowledge",
  description:
    "Meet the people behind BLK Tech Connect — a team dedicated to expanding access to technology, education, and opportunity.",
};

const leadership = [
  {
    name: "Khalif Cooper",
    role: "Founder & CEO",
    bio: "Software engineer and community builder passionate about expanding access to technology and creating pathways for the next generation of innovators and founders.",
    initials: "KC",
  },
];

const advisors = [
  {
    name: "Advisory Board Member",
    role: "Technology Advisor",
    bio: "Bringing decades of experience in enterprise technology leadership and innovation ecosystem development.",
    initials: "AB",
  },
  {
    name: "Advisory Board Member",
    role: "Community Advisor",
    bio: "Expertise in community building, nonprofit strategy, and grassroots tech education.",
    initials: "AB",
  },
  {
    name: "Advisory Board Member",
    role: "Partnerships Advisor",
    bio: "Background in corporate partnerships, fundraising, and strategic growth for tech organizations.",
    initials: "AB",
  },
];

function TeamCard({
  name,
  role,
  bio,
  initials,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400/20 to-violet-400/20 text-lg font-bold text-white/70">
        {initials}
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 text-[13px] font-medium text-amber-400/70">{role}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-white/40">{bio}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Our Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              The people behind
              <br />
              <span className="text-gradient-warm">the movement.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              A dedicated team building the foundation for inclusive,
              future-ready innovation ecosystems — one community at a time.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse-glow" />
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Leadership
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {leadership.map((person) => (
                <TeamCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse-glow" />
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Advisory Board
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {advisors.map((person, i) => (
                <TeamCard key={`${person.role}-${i}`} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Join our team.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/40">
              We&apos;re always looking for passionate people to help grow
              the BLK Tech Connect ecosystem. Volunteer, mentor, or
              collaborate with us.
            </p>
            <a
              href="https://discord.gg/gWfhQFzbnB"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]"
            >
              Join the Community
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
