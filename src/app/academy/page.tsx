import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses | khalifbuildsai",
  description:
    "AI courses for self-taught builders. Start with a free intro course, then go deeper.",
};

const categoryColors: Record<string, string> = {
  AI: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  Business: "border-violet-400/20 bg-violet-400/10 text-violet-400",
};

export default function CoursesPage() {
  const freeCourses = courses.filter((c) => c.price === 0);
  const paidCourses = courses.filter((c) => c.price > 0);

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-gradient-warm">Courses.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/35 md:text-lg">
            Learn AI from scratch. Start with a free course, then go deeper
            with hands-on projects and real-world skills.
          </p>
        </div>
      </section>

      {/* Free Course — Hero Card */}
      {freeCourses.map((course) => (
        <section key={course.slug} className="px-5 sm:px-8">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/academy/free"
              className="group block rounded-xl border border-emerald-400/20 bg-emerald-400/[0.03] p-5 sm:p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                    FREE
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-white">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-white/30">
                    {course.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-[12px] text-white/20">
                    <span>{course.lessons.length} lessons</span>
                    <span className="text-white/10">·</span>
                    <span className="font-medium text-emerald-400/60">Free — just enter your email</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-emerald-400/30 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400/50"><path d="m9 18 6-6-6-6" /></svg>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* Paid Courses */}
      <section className="px-5 pt-10 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-lg font-bold text-white">Go Deeper</h2>
          <p className="mb-6 text-[14px] text-white/25">
            Coming soon — these courses build on the free intro with hands-on projects and real-world skills.
          </p>
          <div className="space-y-4">
            {paidCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/academy/${course.slug}`}
                className="group block rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#111]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${categoryColors[course.category]}`}
                      >
                        {course.category}
                      </span>
                      <span className="inline-flex rounded-md border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                        COMING SOON
                      </span>
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold text-white">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/30">
                      {course.description}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[12px] text-white/20">
                      <span>{course.lessons.length} lessons</span>
                      <span className="text-white/10">·</span>
                      <span className="font-medium text-white/40">${course.price}</span>
                      <span className="text-white/10">·</span>
                      <span>First lesson free</span>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-white/15 transition-transform group-hover:translate-x-1 group-hover:text-white/30"><path d="m9 18 6-6-6-6" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="pb-14 sm:pb-24 md:pb-32" />
    </main>
  );
}
