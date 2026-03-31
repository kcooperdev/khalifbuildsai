import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/courses";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return courses.map((course) => ({ courseSlug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | khalifbuildsai Academy`,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const categoryColors: Record<string, string> = {
    AI: "border-amber-400/20 bg-amber-400/10 text-amber-400",
    Business: "border-violet-400/20 bg-violet-400/10 text-violet-400",
  };

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl">
          <Link
            href="/academy"
            className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-white/30 transition-colors hover:text-white/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
            Back to Academy
          </Link>
          <div className="mb-4 flex items-center gap-2">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${
                categoryColors[course.category] || categoryColors.AI
              }`}
            >
              {course.category}
            </span>
            {course.price > 0 && (
              <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-400">
                COMING SOON
              </span>
            )}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {course.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/35 md:text-lg">
            {course.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-[13px] text-white/20">
            <span>{course.lessons.length} lessons</span>
            <span className="text-white/10">·</span>
            {course.price === 0 ? (
              <span className="font-medium text-emerald-400/60">Free — just enter your email</span>
            ) : (
              <>
                <span className="font-medium text-white/40">${course.price} when it launches</span>
                <span className="text-white/10">·</span>
                <span>Preview lesson 1 now</span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-lg font-bold text-white">Lessons</h2>
          <div className="space-y-3">
            {course.lessons.map((lesson, i) => {
              const isLocked = course.price > 0;

              if (isLocked) {
                return (
                  <div
                    key={lesson.slug}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-4 sm:p-5 opacity-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] font-mono text-[13px] text-white/20">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-semibold text-white/40 truncate">
                        {lesson.title}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-white/15 truncate">
                        {lesson.description}
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/15">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                );
              }

              return (
              <Link
                key={lesson.slug}
                href={`/academy/${course.slug}/${lesson.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#111]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] font-mono text-[13px] text-white/30">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-semibold text-white truncate">
                      {lesson.title}
                    </h3>
                    {lesson.free && course.price === 0 && (
                      <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                        FREE
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] text-white/25 truncate">
                    {lesson.description}
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/15 transition-transform group-hover:translate-x-1 group-hover:text-white/30"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
