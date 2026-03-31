"use client";

import { ALL_ACCESS_PRICE, courses } from "@/lib/courses";

const totalValue = courses.filter(c => c.price > 0).reduce((acc, c) => acc + c.price, 0);

export function AllAccessCard() {
  return (
    <div className="rounded-xl border border-amber-400/20 bg-linear-to-b from-amber-400/4 to-transparent p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[15px] font-bold text-white">All-Access Pass</h2>
          <p className="mt-1 text-[14px] text-white/30">
            Every paid course. One price. Includes all future courses.
          </p>
        </div>
        <div className="flex items-center gap-3 sm:shrink-0">
          <span className="text-[13px] text-white/20 line-through">
            ${totalValue}
          </span>
          <span className="text-lg font-bold text-white">
            ${ALL_ACCESS_PRICE}
          </span>
          <button
            type="button"
            onClick={() => {
              alert(
                "Payment coming soon! For testing, add ?bypass=khalifbuildsai2026 to the URL."
              );
            }}
            className="rounded-full bg-white px-5 py-2 text-[13px] font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Get Access
          </button>
        </div>
      </div>
    </div>
  );
}
