import Link from "next/link";

export interface AlertBannerProps {
  text: string;
  href?: string;
}

export function AlertBanner({ text, href = "#" }: AlertBannerProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-white/70 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white/90">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
        aria-hidden
      />
      <span>{text}</span>
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
        className="shrink-0 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/60">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
  );
}
