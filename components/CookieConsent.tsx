"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const updateGoogleConsent = (analyticsGranted: boolean) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");

    if (!choice) {
      setVisible(true);
    } else {
      updateGoogleConsent(choice === "accepted");
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    updateGoogleConsent(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    updateGoogleConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-panel border-t border-panel-line px-6 py-5">
      <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-bone text-sm leading-relaxed flex-1">
          We use essential cookies to run this site and, with your consent, analytics cookies to understand how visitors use it. See our{" "}
          <Link href="/cookies" className="text-blue hover:underline">
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-bone font-mono text-xs tracking-widest border border-panel-line px-5 py-2 hover:border-blue hover:text-blue transition-colors duration-200"
          >
            DECLINE
          </button>

          <button
            onClick={accept}
            className="text-blue font-mono text-xs tracking-widest border border-blue px-5 py-2 hover:bg-blue hover:text-ink transition-colors duration-200"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}