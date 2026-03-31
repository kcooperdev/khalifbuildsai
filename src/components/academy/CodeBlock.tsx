"use client";

import { useState } from "react";

export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group my-6 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0A0A0A]">
      <div className="flex items-center justify-between border-b border-white/[0.04] px-4 py-2">
        <span className="text-[11px] font-mono text-white/25">
          {language || "code"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-[11px] text-white/25 transition-colors hover:text-white/50"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-white/60">
        <code>{code}</code>
      </pre>
    </div>
  );
}
