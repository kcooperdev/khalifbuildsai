import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy | khalifbuildsai",
  description:
    "AI courses for self-taught builders. Prompt engineering, building with AI, and more. Launching fall 2026.",
};

const courses = [
  {
    title: "Introduction to AI",
    description:
      "Understand the fundamentals of artificial intelligence — what it is, how it works, and how to use it to level up your career and projects.",
    category: "AI",
  },
  {
    title: "Prompt Engineering & AI Tools",
    description:
      "Master the art of prompting. Learn to use ChatGPT, Claude, Midjourney, and other AI tools to 10x your productivity and creativity.",
    category: "AI",
  },
  {
    title: "Building with AI",
    description:
      "Go from idea to product. Learn to build AI-powered applications using APIs, no-code tools, and modern AI frameworks.",
    category: "AI",
  },
  {
    title: "AI for Business & Founders",
    description:
      "Leverage AI to launch, automate, and scale your business. Strategy, tools, and real-world case studies for entrepreneurs.",
    category: "Business",
  },
];

const categoryColors: Record<string, string> = {
  AI: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  Business: "border-violet-400/20 bg-violet-400/10 text-violet-400",
};

export default function AcademyPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-glow" />
            Launching Fall &apos;26
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            The{" "}
            <span className="text-gradient-warm">Academy.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/35 md:text-lg">
            Hands-on AI courses for self-taught builders. Learn the skills,
            build real projects, level up your career.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-xl font-bold text-white">Courses</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5"
              >
                <span
                  className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${categoryColors[course.category]}`}
                >
                  {course.category}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-white">
                  {course.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-white/30">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
