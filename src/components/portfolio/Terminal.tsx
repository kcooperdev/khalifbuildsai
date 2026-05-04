"use client";

import { useState, useEffect, useRef, useCallback, KeyboardEvent } from "react";
import {
  PROJECTS,
  FOLDERS,
  type Project,
  type Post,
  type Folder,
} from "@/lib/portfolio-data";

type Theme = "dark" | "light";

type Ctx = {
  clear: () => void;
  close: () => void;
  setTheme: (t: Theme) => void;
  scrollTo: (id: string) => void;
  openProject: (p: Project) => void;
  openPost: (p: Post) => void;
  openFolder: (folderId: string | null) => void;
  cwd: string | null;
  setCwd: (id: string | null) => void;
};

type HistoryEntry =
  | { type: "in"; lines: string[]; prompt: string }
  | { type: "out"; lines: string[] };

const HELP_LINES = [
  "available commands:",
  "  help              show this",
  "  about             who is khalif",
  "  ls                list current dir (projects + folders at root)",
  "  ls <folder>       peek into a folder without entering it",
  "  cd <folder>       enter a folder",
  "  cd ..             back to root",
  "  pwd               print current path",
  "  open <name>       open a project or post (fuzzy match)",
  "  projects          list projects",
  "  contact           how to reach me",
  "  theme <name>      dark | light",
  "  whoami            you, presumably",
  "  date              current ts",
  "  echo <text>       repeat back",
  "  sudo <anything>   nice try",
  "  clear             wipe the buffer",
  "  exit              close this thing (or hit esc)",
];

function norm(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function findProject(q: string): Project | undefined {
  return PROJECTS.find((p) => p.id === q || norm(p.title) === q);
}

function findFolder(q: string): Folder | undefined {
  return FOLDERS.find(
    (f) => f.id === q || f.name === q || norm(f.title) === q,
  );
}

function findPostInFolder(folder: Folder, q: string): Post | undefined {
  return folder.posts.find((p) => p.id === q || norm(p.title) === q);
}

function findPostAnywhere(q: string) {
  for (const f of FOLDERS) {
    const post = findPostInFolder(f, q);
    if (post) return { folder: f, post };
  }
  return undefined;
}

function pad(s: string, n: number): string {
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

function pathFor(cwd: string | null): string {
  if (!cwd) return "~";
  const f = FOLDERS.find((x) => x.id === cwd);
  return f ? `~/notes/${f.name}` : "~";
}

function lsRoot(): string[] {
  const lines: string[] = [];
  lines.push("projects/");
  if (PROJECTS.length === 0) {
    lines.push("  (empty)");
  } else {
    PROJECTS.forEach((p) => {
      lines.push(`  ${pad(p.id, 22)} ${pad(p.status, 8)} ${p.title}`);
    });
  }
  lines.push("");
  lines.push("notes/");
  if (FOLDERS.length === 0) {
    lines.push("  (empty)");
  } else {
    FOLDERS.forEach((f) => {
      const count = `${f.posts.length} ${f.posts.length === 1 ? "post" : "posts"}`;
      lines.push(`  ${pad(f.name + "/", 22)} ${pad(count, 10)} ${f.title}`);
    });
  }
  lines.push("");
  lines.push("`cd <folder>` to enter · `open <project>` to view.");
  return lines;
}

function lsFolderListing(folder: Folder): string[] {
  const lines: string[] = [`notes/${folder.name}/`];
  if (folder.posts.length === 0) {
    lines.push("  (empty)");
  } else {
    folder.posts.forEach((p) => {
      lines.push(`  ${pad(p.id, 20)} ${pad(p.date, 12)} ${p.title}`);
    });
  }
  if (folder.posts[0]) {
    lines.push("");
    lines.push(`use \`open ${folder.posts[0].id}\` to read.`);
  }
  return lines;
}

function lsArg(arg: string): string[] {
  const q = norm(arg);
  const folder = findFolder(q);
  if (!folder) return [`ls: no such folder: ${arg}`];
  return lsFolderListing(folder);
}

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
          (p) => `${pad(p.id, 22)} ${pad(p.status, 8)} ${p.title}`,
        ),
        "",
        "use `open <name>` to view (id or title works).",
      ];
    case "contact":
      return [
        "github     github.com/khalifbuildsai",
        "linkedin   linkedin.com/in/khalifbuildsai",
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
  if (cmd === "pwd") return [pathFor(ctx.cwd)];

  if (cmd === "cd") {
    if (!arg || arg === ".." || arg === "~" || arg === "/") {
      ctx.setCwd(null);
      ctx.openFolder(null);
      return [];
    }
    const q = norm(arg);
    const folder = findFolder(q);
    if (!folder) return [`cd: no such folder: ${arg}`];
    ctx.setCwd(folder.id);
    ctx.openFolder(folder.id);
    ctx.scrollTo("notes");
    return [];
  }

  if (cmd === "ls") {
    if (arg) return lsArg(arg);
    if (ctx.cwd) {
      const folder = FOLDERS.find((f) => f.id === ctx.cwd);
      return folder ? lsFolderListing(folder) : lsRoot();
    }
    return lsRoot();
  }

  if (cmd === "open") {
    if (!arg) return ["usage: open <name>. try `ls` to see what's open-able."];
    const q = norm(arg);

    if (ctx.cwd) {
      const folder = FOLDERS.find((f) => f.id === ctx.cwd);
      if (folder) {
        const post = findPostInFolder(folder, q);
        if (post) {
          ctx.openPost(post);
          ctx.close();
          return null;
        }
      }
    }

    const proj = findProject(q);
    if (proj) {
      ctx.openProject(proj);
      ctx.scrollTo(`project-${proj.id}`);
      ctx.close();
      return null;
    }

    const hit = findPostAnywhere(q);
    if (hit) {
      ctx.setCwd(hit.folder.id);
      ctx.openFolder(hit.folder.id);
      ctx.openPost(hit.post);
      ctx.close();
      return null;
    }

    if (findFolder(q))
      return [`open: \`${arg}\` is a folder. use \`cd ${arg}\` to enter it.`];

    return [`no match: ${arg}. try \`ls\`.`];
  }

  const out = staticOutput(cmd);
  if (out) return out;
  return [`command not found: ${cmd}. try \`help\`.`];
}

type TerminalProps = {
  open: boolean;
  onClose: () => void;
  setTheme: (t: Theme) => void;
  onOpenProject: (p: Project) => void;
  onOpenPost: (p: Post) => void;
  onOpenFolder: (folderId: string | null) => void;
};

export function Terminal({
  open,
  onClose,
  setTheme,
  onOpenProject,
  onOpenPost,
  onOpenFolder,
}: TerminalProps) {
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
  const [cwd, setCwd] = useState<string | null>(null);
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
    const promptAtEntry = pathFor(cwd);
    const next: HistoryEntry[] = [
      ...history,
      { type: "in", lines: [raw], prompt: promptAtEntry },
    ];
    const ctx: Ctx = {
      clear: () => setHistory([]),
      close: onClose,
      setTheme,
      scrollTo: (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      },
      openProject: onOpenProject,
      openPost: onOpenPost,
      openFolder: onOpenFolder,
      cwd,
      setCwd,
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
  }, [
    value,
    history,
    cwd,
    onClose,
    setTheme,
    onOpenProject,
    onOpenPost,
    onOpenFolder,
  ]);

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

  const livePrompt = pathFor(cwd);

  return (
    <div className="term-overlay" onClick={onClose}>
      <div
        className="term-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true">
        <div className="term-titlebar">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-title">guest@khalifbuildsai — {livePrompt}</span>
          <button
            className="term-close"
            onClick={onClose}
            aria-label="close terminal">
            ×
          </button>
        </div>
        <div
          className="term-body"
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}>
          {history.map((h, i) => (
            <div key={i} className={`term-line ${h.type}`}>
              {h.type === "in" && (
                <span className="term-prompt">
                  guest@khalifbuildsai:{h.prompt}$&nbsp;
                </span>
              )}
              <span>{h.lines.join("\n")}</span>
            </div>
          ))}
          <div className="term-line in">
            <span className="term-prompt">
              guest@khalifbuildsai:{livePrompt}$&nbsp;
            </span>
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
