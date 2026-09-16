"use client";

import { useEffect } from "react";
import type { Service } from "@/components/ServiceCard";

type ServiceModalProps = {
  service: Service;
  onClose: () => void;
  onContactClick: () => void;
};

export default function ServiceModal({ service, onClose, onContactClick }: ServiceModalProps) {
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
        <span className="font-display text-xl text-bone mb-6 block">{service.name}</span>

        {/* Full description */}
        <p className="text-sm text-bone mb-6">{service.description}</p>

        {/* Contact button */}
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-4 py-2 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200"
        >
          GET STARTED →
        </button>
      </div>
    </div>
  );
}