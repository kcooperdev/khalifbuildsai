import Link from "next/link";

export interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "footer";
}

const sizes = {
  full: "text-lg",
  icon: "text-base",
  footer: "text-base",
};

export function Logo({ className = "", variant = "full" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="kcooperdev homepage"
    >
      <span className={`font-bold tracking-tight ${sizes[variant]}`}>
        <span className="text-white">k</span>
        <span className="text-gradient-warm">cooper</span>
        <span className="text-white/60">dev</span>
      </span>
    </Link>
  );
}
