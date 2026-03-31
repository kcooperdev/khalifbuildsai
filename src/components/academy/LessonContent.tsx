"use client";

import type { LessonSection } from "@/lib/courses";
import { Quiz } from "./Quiz";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";
import { InteractiveCodeEditor } from "./InteractiveCodeEditor";

function TextBlock({ content }: { content: string }) {
  // Simple markdown-like rendering for headings, bold, tables, and paragraphs
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const renderInline = (text: string) => {
    // Handle bold
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-white/70 font-semibold">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const flushTable = () => {
    if (tableRows.length < 2) return;
    const headers = tableRows[0];
    const body = tableRows.slice(2); // skip separator row
    elements.push(
      <div key={`table-${elements.length}`} className="my-4 overflow-x-auto">
        <table className="w-full text-[13px] text-white/40">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {headers.map((h, i) => (
                <th key={i} className="px-3 py-2 text-left font-semibold text-white/60">
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, i) => (
              <tr key={i} className="border-b border-white/[0.03]">
                {row.map((cell, j) => (
                  <td key={j} className="px-3 py-2">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table rows
    if (line.trim().startsWith("|")) {
      inTable = true;
      const cells = line.split("|").filter((c) => c.trim() !== "" || false);
      // Skip separator rows like |---|---|---|
      if (line.match(/^\|[\s-|]+\|$/)) {
        tableRows.push(cells);
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      inTable = false;
      flushTable();
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-6 mb-3 text-[16px] font-bold text-white">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-8 mb-3 text-xl font-bold text-white">
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 list-disc text-[15px] leading-relaxed text-white/35">
          {renderInline(line.slice(2))}
        </li>
      );
    } else {
      elements.push(
        <p key={i} className="mb-3 text-[15px] leading-relaxed text-white/35">
          {renderInline(line)}
        </p>
      );
    }
  }

  if (inTable) flushTable();

  return <div className="wrap-break-word">{elements}</div>;
}

export function LessonContent({ sections }: { sections: LessonSection[] }) {
  return (
    <div className="space-y-2">
      {sections.map((section, i) => {
        switch (section.type) {
          case "text":
            return <TextBlock key={i} content={section.content!} />;
          case "code":
            return (
              <CodeBlock key={i} code={section.content!} language={section.language} />
            );
          case "quiz":
            return <Quiz key={i} quiz={section.quiz!} />;
          case "callout":
            return (
              <Callout key={i} variant={section.variant} content={section.content!} />
            );
          case "exercise":
            return (
              <InteractiveCodeEditor key={i} {...section.exercise!} />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
