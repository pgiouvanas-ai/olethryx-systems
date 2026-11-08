"use client";

import { useEffect } from "react";

// Modal render
type ProjectDetail = {
  name: string;
  logo: string;
  status: "LIVE" | "IN DEV";
  problem: string;
  solution: string;
  build: string;
};

type ProjectModalProps = {
  project: ProjectDetail;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Closes the modal with escape key and prevents page from scrolling.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-panel border border-panel-line max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-bone hover:text-blue transition-colors duration-200 mb-6 font-mono text-sm"
        >
          × CLOSE
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-6">
          <img src={project.logo} alt={`${project.name} logo`} className="h-9 w-auto shrink-0" />
          <span className="font-display text-xl text-bone">{project.name}</span>
        </div>

        {/* Problem */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Problem</h3>
        <p className="text-sm text-bone mb-6">{project.problem}</p>

        {/* Solution */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Solution</h3>
        <p className="text-sm text-bone mb-6">{project.solution}</p>

        {/* Build */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Build</h3>
        <p className="text-sm text-bone mb-6">{project.build}</p>

        
      </div>
    </div>
  );
}