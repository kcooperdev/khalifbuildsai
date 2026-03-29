import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem | BLK Tech Connect — Beyond Limits & Knowledge",
  description:
    "Explore the BLK Tech Connect ecosystem — community, events, education, and career pathways all in one platform.",
};

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community & Connection",
    description:
      "Join the BLK Tech Community — connect with members, grow your network, and be part of a support system that goes beyond the screen.",
    color: "bg-amber-400/10 border-amber-400/20 text-amber-400",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    title: "Events & Workshops",
    description:
      "Monthly meetups, panels, happy hours, and hands-on workshops. Connect with industry leaders and grow your network — both in-person and virtual.",
    color: "bg-violet-400/10 border-violet-400/20 text-violet-400",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Academy & Education",
    description:
      "Hands-on courses in web development, UI/UX design, data science, and tech leadership. Building the skills and confidence needed to thrive.",
    color: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Career Pathways",
    description:
      "Direct access to opportunities from partner companies. Resume reviews, interview prep, and a talent pipeline connecting community to career.",
    color: "bg-rose-400/10 border-rose-400/20 text-rose-400",
  },
];

const values = [
  {
    title: "Access",
    description:
      "We remove barriers to entry in tech by providing free and low-cost resources, mentorship, and community support to anyone ready to grow.",
  },
  {
    title: "Innovation",
    description:
      "We support emerging technologists, aspiring founders, and problem-solvers who want to shape the future of their communities and industries.",
  },
  {
    title: "Economic Mobility",
    description:
      "We build direct pathways from community to career, strengthening local economies and creating opportunity at every stage.",
  },
];

export default function EcosystemPage() {
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
              Our Ecosystem
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Everything you need,
              <br />
              <span className="text-gradient-warm">one platform.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              BLK Tech Connect is building the most comprehensive innovation
              and workforce development ecosystem — expanding access to
              technology, education, and entrepreneurial opportunity.
            </p>
          </div>
        </section>

        {/* Pillars grid */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="flex flex-col hover-lift">
                <CardIcon>
                  <div className={`flex h-full w-full items-center justify-center rounded-lg border ${pillar.color}`}>
                    {pillar.icon}
                  </div>
                </CardIcon>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Our Values
            </p>
            <h2 className="mb-12 text-2xl font-bold tracking-tight text-white md:text-3xl">
              What drives us{" "}
              <span className="text-gradient-muted">forward.</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {values.map((value) => (
                <div key={value.title}>
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
