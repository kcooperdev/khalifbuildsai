import Link from "next/link";

export function BackHome() {
  return (
    <div className="px-5 pt-6 sm:px-8 sm:pt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-white/30 transition-colors hover:text-white/60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back
      </Link>
    </div>
  );
}
