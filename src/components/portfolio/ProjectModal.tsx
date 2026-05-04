"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "@/lib/portfolio-data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="post-overlay" onClick={onClose}>
      <article
        className="post-window project-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <header className="post-bar">
          <span className="post-bar-meta">
            <span className="accent">{project.tag}</span>
            <span className="dim">
              {" "}
              · {project.status} · {project.year}
            </span>
          </span>
          <button
            className="post-close"
            onClick={onClose}
            aria-label="close project"
          >
            ×
          </button>
        </header>
        <div className="post-body">
          <div className="post-eyebrow">{`// readme.md`}</div>
          <h1 id="project-title" className="post-title">
            {project.title}
          </h1>
          <div className="post-excerpt">{project.blurb}</div>
          <div className="project-links">
            {project.repo && (
              <a
                className="project-link"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="lk">repo</span>
                <span className="lv">{project.repo.replace(/^https?:\/\//, "")}</span>
                <span className="lar">↗</span>
              </a>
            )}
            {project.demo && (
              <a
                className="project-link"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="lk">demo</span>
                <span className="lv">{project.demo.replace(/^https?:\/\//, "")}</span>
                <span className="lar">↗</span>
              </a>
            )}
          </div>
          <div className="post-rule" />
          {project.readme ? (
            <div className="readme-md">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.readme}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="post-prose">
              <p>{project.blurb}</p>
            </div>
          )}
          <div className="post-foot">
            <span className="dim">— khalif</span>
            <button className="post-close-btn" onClick={onClose}>
              close ←
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
