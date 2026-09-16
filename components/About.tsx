"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function About() {
  const [showContact, setShowContact] = useState(false);
    return (
        <section id="about" className="bg-ink px-6 py-20 ">
          <div>
            <h2 className="font-display text-2xl text-bone mb-6">What we are</h2>
            <p className="font-body text-base text-bone leading-relaxed max-w-2xl">
              Olethryx AI Systems is the software engineering portfolio of Panagiotis Giouvanas (Panos), focused on full-stack software development, AI engineering and product development.
              <br />
              <br />
              I build intelligent software systems, full-stack web applications and AI-powered products with focus on scalable architecture.
              <br />
              <br />
              Whether you&apos;re looking to build a new product, improve an existing system, or collaborate on something ambitious, I&apos;m always open to a conversation. I&apos;d love to hear from founders and businesses with a project in mind, as well as developers, designers and other intelligent software focused professionals interested in working together.
            </p>
            <button 
            onClick={() => setShowContact(true)}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200">
              REQUEST A MEETING →
            </button>
          </div>
          {showContact && <ContactModal onClose={() => setShowContact(false) } />}
        </section>
    )
}