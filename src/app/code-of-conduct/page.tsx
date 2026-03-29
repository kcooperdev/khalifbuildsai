import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct | BLK Tech Connect",
  description:
    "Our community guidelines and code of conduct for all BLK Tech Connect spaces, events, and programs.",
};

const principles = [
  {
    title: "Respect & Dignity",
    description:
      "Treat every person with respect regardless of race, gender, sexual orientation, disability, age, religion, or background. We celebrate our differences and learn from each other.",
  },
  {
    title: "Inclusivity",
    description:
      "Our spaces are for everyone. We actively work to ensure that all voices are heard, valued, and uplifted — especially those that have been historically marginalized in tech.",
  },
  {
    title: "Collaboration Over Competition",
    description:
      "We believe in lifting as we climb. Share knowledge freely, support one another, and celebrate each other's wins. Your success does not diminish someone else's.",
  },
  {
    title: "Accountability",
    description:
      "Own your words and actions. If you make a mistake, acknowledge it, learn from it, and do better. We hold ourselves and each other to a high standard.",
  },
  {
    title: "Safety & Well-Being",
    description:
      "Every member deserves to feel safe — physically, emotionally, and mentally. Harassment, intimidation, and discrimination of any kind will not be tolerated.",
  },
  {
    title: "Growth Mindset",
    description:
      "We are all learning. Ask questions without fear, offer help without judgment, and approach every interaction with curiosity and openness.",
  },
];

const unacceptable = [
  "Harassment, bullying, or intimidation in any form",
  "Discriminatory jokes, language, or imagery",
  "Unwelcome sexual attention or advances",
  "Deliberate misgendering or use of deadnames",
  "Publishing others' private information without consent",
  "Sustained disruption of events, talks, or discussions",
  "Threats of violence or encouraging self-harm",
  "Retaliation against anyone who reports a concern",
];

export default function CodeOfConductPage() {
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
              Community Guidelines
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Code of{" "}
              <span className="text-gradient-warm">Conduct.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              BLK Tech Connect is built on trust, respect, and shared purpose.
              This code of conduct applies to all our spaces — online and
              in-person — including events, the BLK Tech Community, social media, and any
              community interaction.
            </p>
          </div>
        </section>

        {/* Our Pledge */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Our Pledge
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
              We are committed to building a community where everyone belongs.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              <p>
                As members, contributors, and leaders of BLK Tech Connect, we
                pledge to make participation in our community a
                harassment-free experience for everyone. We are dedicated to
                providing a welcoming, safe, and supportive environment where
                people of all backgrounds can learn, grow, and connect.
              </p>
              <p>
                We pledge to act and interact in ways that contribute to an
                open, diverse, inclusive, and healthy community. Going beyond
                limits and knowledge means nothing if we don&apos;t go beyond
                for each other.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Our Principles
            </p>
            <h2 className="mb-12 text-2xl font-bold tracking-tight text-white md:text-3xl">
              What we stand for.
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift"
                >
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/40">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unacceptable Behavior */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400/80">
              Zero Tolerance
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Unacceptable behavior.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              The following behaviors are not tolerated in any BLK Tech Connect
              space. Violations may result in removal from the community.
            </p>
            <ul className="space-y-4">
              {unacceptable.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-white/50 md:text-lg"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reporting & Enforcement */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
                  Reporting
                </p>
                <h3 className="mb-4 text-xl font-bold text-white">
                  See something? Say something.
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-white/40">
                  If you experience or witness behavior that violates this code
                  of conduct, please report it. All reports are taken seriously
                  and handled confidentially.
                </p>
                <a
                  href="mailto:hello@blktechconnect.com"
                  className="text-[15px] font-medium text-amber-400/80 transition-colors hover:text-amber-400"
                >
                  hello@blktechconnect.com
                </a>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80">
                  Enforcement
                </p>
                <h3 className="mb-4 text-xl font-bold text-white">
                  Fair, consistent, transparent.
                </h3>
                <p className="text-[15px] leading-relaxed text-white/40">
                  Community leaders will review all reports and respond in a way
                  that is appropriate to the circumstances. Actions may include
                  a warning, temporary suspension, or permanent removal from
                  BLK Tech Connect spaces. We prioritize the safety of our
                  community above all else.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
