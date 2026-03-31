"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/courses";

export function Quiz({ quiz }: { quiz: QuizQuestion }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === quiz.correctIndex;

  return (
    <div className="my-6 rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 sm:p-6">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
        Quiz
      </p>
      <p className="mb-4 text-[15px] font-medium text-white">
        {quiz.question}
      </p>

      <div className="space-y-2">
        {quiz.options.map((option, i) => {
          let optionStyle =
            "border-white/[0.06] bg-[#111] text-white/60 hover:border-white/10 hover:bg-[#161616]";

          if (submitted && i === quiz.correctIndex) {
            optionStyle = "border-emerald-400/30 bg-emerald-400/10 text-emerald-400";
          } else if (submitted && i === selected && !isCorrect) {
            optionStyle = "border-red-400/30 bg-red-400/10 text-red-400";
          } else if (!submitted && i === selected) {
            optionStyle = "border-amber-400/30 bg-amber-400/10 text-amber-400";
          }

          return (
            <button
              key={i}
              type="button"
              disabled={submitted}
              onClick={() => setSelected(i)}
              className={`w-full rounded-lg border p-3 text-left text-[14px] transition-all ${optionStyle} ${
                submitted ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span className="mr-2 font-mono text-[12px] text-white/30">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={selected === null}
          onClick={() => setSubmitted(true)}
          className="mt-4 rounded-full bg-white px-5 py-2 text-[13px] font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      ) : (
        <div
          className={`mt-4 rounded-lg p-4 text-[14px] leading-relaxed ${
            isCorrect
              ? "border border-emerald-400/20 bg-emerald-400/5 text-emerald-300/80"
              : "border border-amber-400/20 bg-amber-400/5 text-amber-300/80"
          }`}
        >
          <p className="mb-1 font-semibold">
            {isCorrect ? "Correct!" : "Not quite."}
          </p>
          <p className="text-white/40">{quiz.explanation}</p>
        </div>
      )}
    </div>
  );
}
