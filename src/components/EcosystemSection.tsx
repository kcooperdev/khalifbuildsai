import Link from "next/link";
import {
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/Card";

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const jobListings = [
  { title: "Senior Product Designer" },
  { title: "Full Stack Engineer" },
];

export function EcosystemSection() {
  return (
    <section className="bg-black px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
              An ecosystem built for growth.
            </h2>
            <p className="mt-3 text-[15px] text-white/40 md:text-base">
              Everything you need to accelerate your career or startup, all in
              one platform.
            </p>
          </div>
          <Link
            href="/ecosystem"
            className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors duration-200 hover:text-white md:shrink-0"
          >
            View all programs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Card grid: top row 60/40, bottom row 2 equal */}
        <div className="mt-10 grid gap-4 md:gap-5">
          {/* Top row */}
          <div className="grid gap-4 md:grid-cols-5 md:gap-5">
            {/* Community & Networking - wider */}
            <Card className="flex flex-col md:col-span-3">
              <CardIcon>
                <UsersIcon />
              </CardIcon>
              <CardTitle>Community & Networking</CardTitle>
              <CardDescription>
                Join the BLK Tech Community — connect with members, grow your
                network, access mentorship circles, job boards, event tickets,
                and resources.
              </CardDescription>
              <CardFooter>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[#111111] bg-white/[0.08]"
                      aria-hidden
                    />
                  ))}
                  <div className="flex h-8 items-center justify-center rounded-full border-2 border-[#111111] bg-white/[0.08] px-2.5 text-[11px] font-medium text-white/50">
                    +750
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Talent Recruitment - narrower */}
            <Card className="flex flex-col md:col-span-2">
              <CardIcon>
                <BriefcaseIcon />
              </CardIcon>
              <CardTitle>Talent Recruitment</CardTitle>
              <CardDescription>
                Direct access to job listings from top tech partners committed
                to diversity.
              </CardDescription>
              <CardFooter>
                <div className="space-y-2">
                  {jobListings.map((job) => (
                    <div
                      key={job.title}
                      className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span className="text-sm text-white/50">{job.title}</span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Bottom row - 2 cards */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {/* Events */}
            <Card className="flex flex-col md:col-span-2">
              <CardIcon>
                <CalendarIcon />
              </CardIcon>
              <CardTitle>Events</CardTitle>
              <CardDescription>
                Monthly online tech events, panels, happy hours, and workshops.
              </CardDescription>
              <CardFooter>
                <Link
                  href="/events"
                  className="text-sm text-white/40 underline decoration-white/10 underline-offset-4 transition-colors hover:text-white hover:decoration-white/30"
                >
                  View Calendar
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
