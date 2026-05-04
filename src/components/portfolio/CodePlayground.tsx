"use client";

import { useRef, useState, type KeyboardEvent } from "react";

type LineKind = "log" | "info" | "err";
type OutLine = { kind: LineKind; text: string };

const LOG_LIMIT = 200;
const SEEN = new WeakSet<object>();

function fmt(v: unknown): string {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (typeof v === "bigint") return `${v}n`;
  if (typeof v === "function")
    return `[Function${v.name ? `: ${v.name}` : ""}]`;
  if (typeof v === "symbol") return v.toString();
  try {
    SEEN.add(v as object);
    const out = JSON.stringify(
      v,
      (_, val) => {
        if (typeof val === "bigint") return `${val}n`;
        if (typeof val === "function")
          return `[Function${val.name ? `: ${val.name}` : ""}]`;
        if (val && typeof val === "object") {
          if (SEEN.has(val)) return "[Circular]";
          SEEN.add(val);
        }
        return val;
      },
      2,
    );
    return out ?? String(v);
  } catch {
    return String(v);
  }
}

export function CodePlayground({
  initialCode,
  label = "playground.js",
}: {
  initialCode: string;
  label?: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<OutLine[]>([]);
  const [running, setRunning] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  function run() {
    const logs: OutLine[] = [];
    const push = (kind: LineKind, args: unknown[]) => {
      if (logs.length >= LOG_LIMIT) {
        if (logs.length === LOG_LIMIT)
          logs.push({
            kind: "err",
            text: `(output truncated at ${LOG_LIMIT} lines)`,
          });
        return;
      }
      logs.push({ kind, text: args.map(fmt).join(" ") });
    };
    const sandboxConsole = {
      log: (...args: unknown[]) => push("log", args),
      info: (...args: unknown[]) => push("info", args),
      warn: (...args: unknown[]) => push("info", args),
      error: (...args: unknown[]) => push("err", args),
      debug: (...args: unknown[]) => push("log", args),
    };
    setRunning(true);
    try {
      const result = new Function("console", `"use strict";\n${code}`)(
        sandboxConsole,
      );
      if (result !== undefined) push("info", ["⤷", result]);
    } catch (e) {
      push("err", [
        e instanceof Error ? `${e.name}: ${e.message}` : String(e),
      ]);
    } finally {
      setOutput(logs);
      setRunning(false);
    }
  }

  function reset() {
    setCode(initialCode);
    setOutput([]);
    requestAnimationFrame(() => taRef.current?.focus());
  }

  function clearOutput() {
    setOutput([]);
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      run();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const next = code.slice(0, start) + "  " + code.slice(end);
      setCode(next);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
  }

  const lineCount = Math.min(Math.max(code.split("\n").length, 6), 22);

  return (
    <div className="playground" onClick={(e) => e.stopPropagation()}>
      <div className="playground-bar">
        <span className="playground-meta">
          <span className="playground-dot" />
          <span className="playground-dot" />
          <span className="playground-dot" />
          <span className="playground-label">{label}</span>
        </span>
        <span className="playground-actions">
          <button
            className="playground-btn"
            onClick={reset}
            type="button"
            title="Restore the original code"
          >
            ↻ reset
          </button>
          <button
            className="playground-btn primary"
            onClick={run}
            type="button"
            disabled={running}
            title="Run (⌘/Ctrl + ↵)"
          >
            ▶ run
          </button>
        </span>
      </div>
      <textarea
        ref={taRef}
        className="playground-code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={onKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        rows={lineCount}
        aria-label={`code editor: ${label}`}
      />
      <div className="playground-out">
        <div className="playground-out-bar">
          <span className="playground-out-label">output</span>
          {output.length > 0 && (
            <button
              className="playground-clear"
              onClick={clearOutput}
              type="button"
            >
              clear
            </button>
          )}
        </div>
        {output.length === 0 ? (
          <div className="playground-empty">
            {"// "}hit <kbd>run</kbd> or <kbd>⌘/Ctrl + ↵</kbd> to evaluate
          </div>
        ) : (
          <div className="playground-stream">
            {output.map((l, i) => (
              <pre key={i} className={`playground-line ${l.kind}`}>
                <span className="playground-prefix" aria-hidden>
                  ›
                </span>
                {l.text}
              </pre>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
