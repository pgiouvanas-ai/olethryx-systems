"use client";

import { useEffect } from "react";

// One product under a project (a project can have more than one)
type ModalProduct = {
  name: string;
  status: "LIVE" | "IN DEV";
};

// Everything the modal needs to render one project's full case study
type ProjectDetail = {
  name: string;
  logo: string;
  status: "LIVE" | "IN DEV";
  detailedDescription: string;
  products: ModalProduct[];
  problem: string;
  solution: string;
  howItWasCreated: string;
  futurePlans: string;
};

type ProjectModalProps = {
  project: ProjectDetail;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key, and lock page scroll while modal is open
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
          className="text-panel-line hover:text-bone transition-colors duration-200 mb-6 font-mono text-sm"
        >
          × CLOSE
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-6">
          <img src={project.logo} alt="" className="h-9 w-auto shrink-0" />
          <span className="font-display text-xl text-bone">{project.name}</span>
        </div>

        {/* Detailed description */}
        <p className="text-sm text-bone mb-6">{project.detailedDescription}</p>

        {/* Products */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Products</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.products.map((p) => (
            <span key={p.name} className="rounded-full px-3 py-1 border border-panel-line font-mono text-[11px] text-bone">
              {p.name} — {p.status}
            </span>
          ))}
        </div>

        {/* Problem */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Problem</h3>
        <p className="text-sm text-bone mb-6">{project.problem}</p>

        {/* Solution */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Solution</h3>
        <p className="text-sm text-bone mb-6">{project.solution}</p>

        {/* How it was created */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">How it was created</h3>
        <p className="text-sm text-bone mb-6">{project.howItWasCreated}</p>

        {/* Future plans */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Future plans</h3>
        <p className="text-sm text-bone">{project.futurePlans}</p>
      </div>
    </div>
  );
}