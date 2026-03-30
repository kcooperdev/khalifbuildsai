import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Button from "@/components/ui/Button";

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
                href="https://luma.com/blk-tech-connect"
                className="px-8 py-3.5 text-base"
              >
                Stay Updated on Events
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

      </main>
      <Footer />
    </div>
  );
}
