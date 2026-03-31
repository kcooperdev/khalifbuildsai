"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getLesson } from "@/lib/courses";
import { useAcademy } from "@/lib/academy-context";
import { useEmail } from "@/lib/email-context";
import { LessonContent } from "@/components/academy/LessonContent";
import { Paywall } from "@/components/academy/Paywall";
import { EmailGate } from "@/components/academy/EmailGate";

export default function LessonPage() {
  const params = useParams();
  const courseSlug = params.courseSlug as string;
  const lessonSlug = params.lessonSlug as string;

  const result = getLesson(courseSlug, lessonSlug);
  const { hasCourseAccess } = useAcademy();
  const { hasEmail } = useEmail();

  if (!result) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Lesson not found</h1>
          <Link href="/academy" className="mt-4 inline-block text-[14px] text-amber-400/80 hover:text-amber-400">
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  const { course, lesson, lessonIndex } = result;
  const isFreeCourse = course.price === 0;
  const isPaidCourse = course.price > 0;

  // Paid courses are locked — coming soon
  if (isPaidCourse) {
    return (
      <main>
        <section className="flex min-h-[60vh] items-center justify-center px-5">
          <div className="mx-auto max-w-sm text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="mb-3 inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-400">
              COMING SOON
            </span>
            <h2 className="mt-3 text-xl font-bold text-white">{course.title}</h2>
            <p className="mt-3 text-[14px] text-white/35">
              This course isn&apos;t available yet. Check back soon.
            </p>
            <Link
              href={`/academy/${course.slug}`}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-[13px] text-white/60 transition-all hover:bg-white/5"
            >
              Back to course overview
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const canView = isFreeCourse && hasEmail;

  // Free course requires email
  if (isFreeCourse && !hasEmail) {
    return (
      <main>
        <section className="px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pt-28">
          <div className="mx-auto max-w-2xl">
            <Link
              href={`/academy/${course.slug}`}
              className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-white/30 transition-colors hover:text-white/60"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
              {course.title}
            </Link>
          </div>
        </section>
        <EmailGate><></></EmailGate>
      </main>
    );
  }

  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < course.lessons.length - 1
      ? course.lessons[lessonIndex + 1]
      : null;

  // CTA for last lesson of free course
  const isLastFreeLesson = isFreeCourse && !nextLesson;

  return (
    <main className="overflow-x-hidden">
      <section className="px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pt-28">
        <div className="mx-auto max-w-2xl">
          <Link
            href={`/academy/${course.slug}`}
            className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-white/30 transition-colors hover:text-white/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
            {course.title}
          </Link>

          <div className="mb-2 text-[12px] text-white/20">
            Lesson {lessonIndex + 1} of {course.lessons.length}
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {lesson.title}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-white/35">
            {lesson.description}
          </p>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          {canView ? (
            <LessonContent sections={lesson.sections} />
          ) : (
            <Paywall courseTitle={course.title} coursePrice={course.price} />
          )}

          {/* CTA at end of free course */}
          {isLastFreeLesson && canView && (
            <div className="mt-12 rounded-xl border border-amber-400/20 bg-amber-400/[0.03] p-6 sm:p-8 text-center">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                You finished the course!
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/35">
                You now know more about AI than most people. Ready to start
                building real things with what you&apos;ve learned?
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/academy/building-with-ai"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
                >
                  Preview: Building with AI
                </Link>
                <Link
                  href="https://discord.gg/ecQDYq8Apv" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:border-white/25 active:scale-[0.98]"
                >
                  Join the Community
                </Link>
              </div>
              <p className="mt-4 text-[13px] text-white/20">
                Building with AI is coming soon. We&apos;ll email you when it launches.
              </p>
            </div>
          )}

          {/* Lesson navigation */}
          {canView && !isLastFreeLesson && (
            <div className="mt-12 flex items-center justify-between border-t border-white/[0.06] pt-8">
              {prevLesson ? (
                <Link
                  href={`/academy/${course.slug}/${prevLesson.slug}`}
                  className="group flex items-center gap-2 text-[14px] text-white/30 transition-colors hover:text-white/60"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-1"><path d="m15 18-6-6 6-6" /></svg>
                  <span className="hidden sm:inline">{prevLesson.title}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {nextLesson ? (
                <Link
                  href={`/academy/${course.slug}/${nextLesson.slug}`}
                  className="group flex items-center gap-2 text-[14px] text-white/30 transition-colors hover:text-white/60"
                >
                  <span className="hidden sm:inline">{nextLesson.title}</span>
                  <span className="sm:hidden">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              ) : (
                <Link
                  href="/academy"
                  className="text-[14px] text-amber-400/60 transition-colors hover:text-amber-400"
                >
                  Back to all courses
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
