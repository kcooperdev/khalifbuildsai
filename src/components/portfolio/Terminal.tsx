"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  KeyboardEvent,
} from "react";
import { PROJECTS, NOW } from "@/lib/portfolio-data";

type Theme = "dark" | "light";

type Ctx = {
  clear: () => void;
  close: () => void;
  setTheme: (t: Theme) => void;
  scrollTo: (id: string) => void;
};

type HistoryEntry = { type: "in" | "out"; lines: string[] };

const HELP_LINES = [
  "available commands:",
  "  help              show this",
  "  about             who is khalif",
  "  projects          list projects",
  "  open <id>         scroll to a project (e.g. open community-01)",
  "  now               what i'm doing right now",
  "  contact           how to reach me",
  "  theme <name>      dark | light",
  "  whoami            you, presumably",
  "  date              current ts",
  "  echo <text>       repeat back",
  "  sudo <anything>   nice try",
  "  clear             wipe the buffer",
  "  exit              close this thing (or hit esc)",
];

function staticOutput(cmd: string): string[] | null {
  switch (cmd) {
    case "help":
      return HELP_LINES;
    case "about":
      return [
        "khalif — software engineer · ai builder.",
        "decade in tech, javascript-first, builds ai tools + automations.",
        "runs a 1,100+ member tech community. hosts ai workshops.",
      ];
    case "projects":
      return [
        "id              status     title",
        "──              ──────     ─────",
        ...PROJECTS.map(
          (p) => `${p.id.padEnd(15)} ${p.status.padEnd(10)} ${p.title}`,
        ),
        "",
        "use `open <id>` to jump to a card.",
      ];
    case "now":
      return NOW.map((n) => `${n.k.padEnd(12)} ${n.v}`);
    case "contact":
      return [
        "github     github.com/khalifbuildsai",
        "linkedin   linkedin.com/in/khalifbuildsai",
        "bluesky    @khalifbuildsai.bsky.social",
      ];
    case "whoami":
      return ["guest@khalifbuildsai"];
    case "date":
      return [new Date().toString()];
    default:
      return null;
  }
}

function runCommand(raw: string, ctx: Ctx): string[] | null {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = rest.join(" ");

  if (cmd === "clear") {
    ctx.clear();
    return null;
  }
  if (cmd === "exit") {
    ctx.close();
    return null;
  }
  if (cmd === "echo") return [arg || ""];
  if (cmd === "sudo")
    return [
      "khalif is not in the sudoers file. this incident will be reported.",
    ];
  if (cmd === "theme") {
    if (arg !== "dark" && arg !== "light")
      return ["theme must be one of: dark, light"];
    ctx.setTheme(arg);
    return [`theme → ${arg}`];
  }
  if (cmd === "open") {
    const p = PROJECTS.find((x) => x.id === arg);
    if (!p) return [`no project: ${arg}. try \`projects\``];
    ctx.scrollTo(`project-${p.id}`);
    ctx.close();
    return null;
  }

  const out = staticOutput(cmd);
  if (out) return out;
  return [`command not found: ${cmd}. try \`help\`.`];
}

type TerminalProps = {
  open: boolean;
  onClose: () => void;
  setTheme: (t: Theme) => void;
};

export function Terminal({ open, onClose, setTheme }: TerminalProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "out",
      lines: [
        "khalifbuildsai terminal · v1.0 · " + new Date().getFullYear(),
        "type `help` for a list of commands.",
        "",
      ],
    },
  ]);
  const [value, setValue] = useState("");
  const [recall, setRecall] = useState<string[]>([]);
  const [recallIdx, setRecallIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history, open]);

  const submit = useCallback(() => {
    const raw = value;
    const next: HistoryEntry[] = [...history, { type: "in", lines: [raw] }];
    const ctx: Ctx = {
      clear: () => setHistory([]),
      close: onClose,
      setTheme,
      scrollTo: (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    };
    const out = runCommand(raw, ctx);
    if (out === null) {
      if (raw.trim() === "clear") setHistory([]);
      else setHistory(next);
    } else {
      setHistory([...next, { type: "out", lines: out.length ? out : [""] }]);
    }
    setRecall((r) => (raw.trim() ? [raw, ...r].slice(0, 30) : r));
    setRecallIdx(-1);
    setValue("");
  }, [value, history, onClose, setTheme]);

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(recallIdx + 1, recall.length - 1);
      if (i >= 0) {
        setRecallIdx(i);
        setValue(recall[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(recallIdx - 1, -1);
      setRecallIdx(i);
      setValue(i === -1 ? "" : recall[i]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="term-overlay" onClick={onClose}>
      <div
        className="term-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="term-titlebar">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-title">guest@khalifbuildsai — ~/site</span>
          <button
            className="term-close"
            onClick={onClose}
            aria-label="close terminal"
          >
            ×
          </button>
        </div>
        <div
          className="term-body"
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((h, i) => (
            <div key={i} className={`term-line ${h.type}`}>
              {h.type === "in" && (
                <span className="term-prompt">guest@khalifbuildsai:~$ </span>
              )}
              <span>{h.lines.join("\n")}</span>
            </div>
          ))}
          <div className="term-line in">
            <span className="term-prompt">guest@khalifbuildsai:~$ </span>
            <input
              ref={inputRef}
              className="term-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKey}
              spellCheck={false}
              autoComplete="off"
              aria-label="terminal input"
            />
            <span className="term-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}
