"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Button from "@/components/ui/Button";
import { capture } from "@/lib/posthog";

const courses = [
  {
    title: "Introduction to AI",
    description:
      "Understand the fundamentals of artificial intelligence — what it is, how it works, and how to use it to level up your career and projects.",
    category: "AI",
  },
  {
    title: "Building Your Personal Brand",
    description:
      "Stand out in tech. LinkedIn, portfolio, public speaking, and networking strategies.",
    category: "Leadership",
  },
];

const categoryColors: Record<string, string> = {
  AI: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  Leadership: "border-amber-400/20 bg-amber-400/10 text-amber-400",
};

export default function AcademyPage() {
  const handleNotifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;

    capture("academy_notify_submitted", {
      email_provided: !!email,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-glow" />
              Coming Fall &apos;26
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              BLK Tech Connect
              <br />
              <span className="text-gradient-warm">Academy.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg md:leading-relaxed">
              Hands-on courses in coding, design, and leadership — taught by
              industry professionals. Building the skills, confidence, and
              knowledge needed to thrive in a rapidly changing world.
            </p>
            <div className="mt-10">
              <Button
                variant="primary"
                as="a"
                href="#notify"
                className="px-8 py-3.5 text-base"
              >
                Get Notified at Launch
              </Button>
            </div>
          </div>
        </section>

        {/* Planned courses */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
                Curriculum
              </p>
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Courses
              </h2>
              <p className="mt-2 text-sm text-white/35">
                Our first courses to help you break into tech and stand out.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift"
                >
                  <span
                    className={`inline-flex rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${categoryColors[course.category]}`}
                  >
                    {course.category}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/40">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notify form */}
        <section id="notify" className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Be the first to know.
            </h2>
            <p className="mt-3 text-[15px] text-white/40">
              Drop your email and we&apos;ll notify you when the Academy
              launches.
            </p>
            <form onSubmit={handleNotifySubmit} className="mt-8 flex gap-2">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm text-white placeholder:text-white/25 focus:border-amber-400/30 focus:outline-none transition-colors duration-200"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]"
              >
                Notify Me
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
