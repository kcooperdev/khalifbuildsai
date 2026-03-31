"use client";

import Link from "next/link";
import { useEmail } from "@/lib/email-context";
import { EmailGate } from "@/components/academy/EmailGate";
import { getCourse } from "@/lib/courses";

export default function FreeCourseePage() {
  const { hasEmail } = useEmail();
  const course = getCourse("introduction-to-ai");

  if (!course) return null;

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-400">
            100% FREE
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Learn AI.
            <br />
            <span className="text-gradient-warm">From zero.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/35 md:text-lg">
            A free, hands-on course that takes you from &quot;what is AI?&quot; to
            actually understanding how it works. {course.lessons.length} lessons.
            No fluff. No credit card.
          </p>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-lg font-bold text-white">What you&apos;ll learn</h2>
          <div className="space-y-3">
            {course.lessons.map((lesson, i) => (
              <div
                key={lesson.slug}
                className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-4 sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] font-mono text-[13px] text-white/30">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    {lesson.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-white/25">
                    {lesson.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email gate or start button */}
      <section className="px-5 pb-14 pt-10 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          {hasEmail ? (
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.03] p-6 text-center sm:p-8">
              <p className="mb-4 text-[15px] text-white/40">
                You&apos;re in! Start learning:
              </p>
              <Link
                href={`/academy/${course.slug}/${course.lessons[0].slug}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                Start Lesson 1
              </Link>
            </div>
          ) : (
            <EmailGate>
              <div />
            </EmailGate>
          )}
        </div>
      </section>
    </main>
  );
}
