"use client";

export function Paywall({
  courseTitle,
}: {
  courseTitle: string;
  coursePrice: number;
}) {
  return (
    <div className="relative my-8">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[#050505]/80 backdrop-blur-md">
        <div className="mx-auto max-w-sm px-5 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-400">
            COMING SOON
          </span>

          <h3 className="mb-2 text-lg font-bold text-white">
            {courseTitle}
          </h3>
          <p className="text-[14px] leading-relaxed text-white/35">
            This course isn&apos;t available yet. Check back soon.
          </p>
        </div>
      </div>

      {/* Blurred preview content */}
      <div className="pointer-events-none select-none blur-md">
        <div className="space-y-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-6">
          <div className="h-4 w-3/4 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-5/6 rounded bg-white/5" />
          <div className="h-4 w-2/3 rounded bg-white/5" />
          <div className="mt-6 h-4 w-3/4 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-4/5 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}
