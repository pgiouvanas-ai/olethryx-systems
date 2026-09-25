"use client";

import { useEffect, useState } from "react";

type ContactModalProps = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
  const [mode, setMode] = useState<"hire" | "collaborate">("hire");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // the modal closes with escape and when open the page can't be scrolled.
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, fullName, email, phone, message }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please email panagiotisgiouvanas@gmail.com directly.");
      }
    } catch {
      alert("Something went wrong. Please email panagiotisgiouvanas@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-panel border border-panel-line max-w-md w-full max-h-[85vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-bone hover:text-blue transition-colors duration-200 mb-6 font-mono text-sm"
        >
          × CLOSE
        </button>

        {/* Hire and Collaborate toggle in the request a meeting form */}
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setMode("hire")}
            className={`flex-1 px-4 py-2 border font-mono text-xs tracking-widest ${
              mode === "hire" ? "border-blue text-blue" : "border-panel-line text-bone"
            }`}
          >
            HIRE
          </button>
          <button
            type="button"
            onClick={() => setMode("collaborate")}
            className={`flex-1 px-4 py-2 border font-mono text-xs tracking-widest ${
              mode === "collaborate" ? "border-blue text-blue" : "border-panel-line text-bone"
            }`}
          >
            COLLABORATE
          </button>
        </div>

      {sent ? (
          <p className="text-blue font-mono text-sm">Thanks, your request is on its way.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-ink border border-panel-line placeholder:text-bone font-mono text-sm px-3 py-2"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-ink border border-panel-line placeholder:text-bone font-mono text-sm px-3 py-2"
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-ink border border-panel-line placeholder:text-bone font-mono text-sm px-3 py-2"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-ink border border-panel-line placeholder:text-bone font-mono text-sm px-3 py-2"
          />
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200"
          >
            {sending ? "SENDING..." : "SUBMIT REQUEST"}
          </button>
        </form>
      )}
      </div>
    </div>
  );
}