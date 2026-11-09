"use client";

import { useEffect } from "react";

// Modal render
type ServiceDetail = {
  name: string;
  description: string;
};

type ServiceModalProps = {
  service: ServiceDetail;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
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
        <div className= "mb-6">
          <span className="font-display text-xl text-bone">{service.name}</span>
        </div>

        {/* Problem */}
        <h3 className="font-mono text-xs text-blue uppercase tracking-wider mb-2">Description</h3>
        <p className="text-sm text-bone mb-6">{service.description}</p>
        
      </div>
    </div>
  );
}