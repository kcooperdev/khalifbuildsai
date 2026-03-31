"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface InteractiveCodeEditorProps {
  language: "javascript" | "python";
  starterCode: string;
  solution?: string;
  expectedOutput?: string;
  instructions: string;
  hints?: string[];
}

const JS_SANDBOX = `<!DOCTYPE html><html><body><script>
  const output = [];
  const origLog = console.log;
  console.log = (...args) => output.push(args.map(a =>
    typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)
  ).join(' '));
  console.error = console.log;

  window.addEventListener('message', async (e) => {
    if (e.data.type !== 'run') return;
    output.length = 0;
    try {
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const fn = new AsyncFunction(e.data.code);
      const result = await fn();
      if (result !== undefined) output.push(String(result));
      parent.postMessage({ type: 'result', output: output.join('\\n'), error: null }, '*');
    } catch (err) {
      parent.postMessage({ type: 'result', output: output.join('\\n'), error: err.message }, '*');
    }
  });
  parent.postMessage({ type: 'ready' }, '*');
<\/script></body></html>`;

const PY_SANDBOX = `<!DOCTYPE html><html><body><script>
  window.addEventListener('message', async (e) => {
    if (e.data.type !== 'run') return;
    if (!window.pyodide) {
      try {
        parent.postMessage({ type: 'status', message: 'Loading Python...' }, '*');
        importScripts && false;
      } catch(e) {}
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      document.body.appendChild(s);
      await new Promise(r => s.onload = r);
      window.pyodide = await loadPyodide();
    }
    try {
      window.pyodide.runPython('import sys; from io import StringIO; sys.stdout = StringIO(); sys.stderr = StringIO()');
      window.pyodide.runPython(e.data.code);
      const stdout = window.pyodide.runPython('sys.stdout.getvalue()');
      const stderr = window.pyodide.runPython('sys.stderr.getvalue()');
      parent.postMessage({ type: 'result', output: stdout, error: stderr || null }, '*');
    } catch (err) {
      parent.postMessage({ type: 'result', output: '', error: err.message }, '*');
    }
  });
  parent.postMessage({ type: 'ready' }, '*');
<\/script></body></html>`;

export function InteractiveCodeEditor({
  language,
  starterCode,
  solution,
  expectedOutput,
  instructions,
  hints,
}: InteractiveCodeEditorProps) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [hintIndex, setHintIndex] = useState(-1);
  const [passed, setPassed] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleRun = useCallback(() => {
    setRunning(true);
    setOutput(null);
    setError(null);
    setPassed(false);
    setStatus(null);

    const html = language === "python" ? PY_SANDBOX : JS_SANDBOX;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const iframe = document.createElement("iframe");
    iframe.sandbox.add("allow-scripts");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframeRef.current = iframe;
    iframe.src = url;

    const timeout = setTimeout(() => {
      cleanup();
      setError("Timed out — your code took too long. Check for infinite loops.");
      setRunning(false);
    }, language === "python" ? 30000 : 5000);

    function cleanup() {
      clearTimeout(timeout);
      window.removeEventListener("message", handler);
      iframe.remove();
      URL.revokeObjectURL(url);
    }

    function handler(e: MessageEvent) {
      if (e.source !== iframe.contentWindow) return;
      if (e.data.type === "status") {
        setStatus(e.data.message);
        return;
      }
      if (e.data.type === "ready") {
        iframe.contentWindow?.postMessage({ type: "run", code }, "*");
        return;
      }
      if (e.data.type === "result") {
        cleanup();
        setStatus(null);
        setOutput(e.data.output || "");
        if (e.data.error) {
          setError(e.data.error);
        } else if (expectedOutput) {
          const normalizedExpected = expectedOutput.trim();
          const normalizedOutput = (e.data.output || "").trim();
          if (normalizedOutput === normalizedExpected) {
            setPassed(true);
          }
        }
        setRunning(false);
      }
    }

    window.addEventListener("message", handler);
  }, [code, language, expectedOutput]);

  // Handle tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      requestAnimationFrame(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      });
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [code]);

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0A0A0A]">
      {/* Instructions */}
      <div className="border-b border-white/[0.04] bg-amber-400/[0.03] px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
          Exercise
        </p>
        <p className="mt-1 text-[14px] leading-relaxed text-white/50">
          {instructions}
        </p>
      </div>

      {/* Language badge + editor */}
      <div className="border-b border-white/[0.04] px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[11px] text-white/25">
          {language === "python" ? "python" : "javascript"}
        </span>
        <button
          type="button"
          onClick={() => setCode(starterCode)}
          className="text-[11px] text-white/25 transition-colors hover:text-white/50"
        >
          Reset
        </button>
      </div>

      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        className="w-full resize-none bg-transparent p-3 font-mono text-[12px] leading-relaxed text-white/70 outline-none placeholder:text-white/15 sm:p-4 sm:text-[13px]"
        style={{ minHeight: "100px", tabSize: 2 }}
      />

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.04] px-4 py-3">
        <button
          type="button"
          onClick={handleRun}
          disabled={running}
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-[13px] font-medium text-black transition-all hover:bg-emerald-400 active:scale-[0.98] disabled:opacity-50 sm:py-1.5 sm:text-[12px]"
        >
          {running ? (status || "Running...") : "Run Code"}
        </button>

        {hints && hints.length > 0 && hintIndex < hints.length - 1 && (
          <button
            type="button"
            onClick={() => setHintIndex((i) => i + 1)}
            className="rounded-full border border-white/10 px-4 py-1.5 text-[12px] text-white/40 transition-all hover:border-white/20 hover:text-white/60"
          >
            Hint {hintIndex + 2}/{hints.length}
          </button>
        )}

        {solution && (
          <button
            type="button"
            onClick={() => setShowSolution(!showSolution)}
            className="rounded-full border border-white/10 px-4 py-1.5 text-[12px] text-white/40 transition-all hover:border-white/20 hover:text-white/60"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
        )}
      </div>

      {/* Hints */}
      {hints && hintIndex >= 0 && (
        <div className="border-t border-white/[0.04] px-4 py-3">
          {hints.slice(0, hintIndex + 1).map((hint, i) => (
            <p key={i} className="text-[13px] text-violet-400/60 mb-1">
              Hint {i + 1}: {hint}
            </p>
          ))}
        </div>
      )}

      {/* Output */}
      {(output !== null || error) && (
        <div className="border-t border-white/[0.04] bg-[#080808] px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Output
            </span>
            {passed && (
              <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                PASSED
              </span>
            )}
          </div>
          {output && (
            <pre className="font-mono text-[13px] leading-relaxed text-white/50 whitespace-pre-wrap">
              {output}
            </pre>
          )}
          {error && (
            <pre className="font-mono text-[13px] leading-relaxed text-red-400/70 whitespace-pre-wrap">
              {error}
            </pre>
          )}
        </div>
      )}

      {/* Solution */}
      {showSolution && solution && (
        <div className="border-t border-white/[0.04] bg-[#080808] px-4 py-3">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/50">
            Solution
          </p>
          <pre className="font-mono text-[13px] leading-relaxed text-white/50 whitespace-pre-wrap">
            {solution}
          </pre>
        </div>
      )}
    </div>
  );
}
