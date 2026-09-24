import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-ink border-t border-panel-line pt-10 pb-6">
            <div className="px-6 grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-10 items-start">
                {/* Logo and title */}
                <div className="flex flex-row items-center gap-2.5">
                    <Image
                      src="/logo.png"
                      alt="Olethryx AI Systems"
                      width={28}
                      height={28}
                      className="h-7 w-7 shrink-0"
                    />
                    <span className="font-mono text-xs tracking-[0.3em] uppercase bg-linear-to-r/srgb from-blue to-violet bg-clip-text text-transparent">
                      OLETHRYX AI SYSTEMS
                    </span>
                </div>
                {/* Find Us */}
                <div className="flex flex-col gap-4 text-left">
          <h3 id="find-us" className="text-[13px] font-bold text-blue tracking-widest[0.1em] uppercase m-0">Find Us</h3>
          <a href="mailto:panagiotisgiouvanas@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-cream no-underline flex items-center gap-2">
            <FaEnvelope className="text-blue text-[16px]" /> panagiotisgiouvanas@gmail.com
          </a>
          <a href="tel:+353876305609" className="text-[14px] text-bone no-underline flex items-center gap-2">
            <FaPhone className="text-blue text-[16px]" /> +353 87 630 5609
          </a>
          <div className="flex gap-3 mt-2">
            <a href="https://github.com/pgiouvanas-ai" target="_blank" rel="noopener noreferrer" aria-label="Github"
              className="text-[24px] text-blue no-underline w-10 h-10 border border-blue rounded-full flex items-center justify-center hover:bg-blue transition-all duration-200 group">
              <FaGithub className="group-hover:text-ink" />
            </a>
            <a href="https://www.linkedin.com/in/panagiotis-giouvanas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-[24px] text-blue no-underline w-10 h-10 border border-blue rounded-full flex items-center justify-center hover:bg-blue transition-all duration-200 group">
              <FaLinkedin className="group-hover:text-ink" />
            </a>
          </div>
        </div>
        {/* Legal */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-[13px] font-bold text-blue tracking-widest[0.1em] uppercase m-0">Legal</h3>
          <a href="/privacy" className="text-[14px] text-bone no-underline hover:text-blue transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" className="text-[14px] text-bone no-underline hover:text-blue transition-colors duration-200">Terms & Conditions</a>
          <a href="/cookies" className="text-[14px] text-bone no-underline hover:text-blue transition-colors duration-200">Cookie Policy</a>
        </div>
            </div>
            <hr className="border-t border-panel-line w-4/5 mx-auto my-8" />
            <p className="text-[13px] text-bone text-center mt-8">
             © {new Date().getFullYear()} Olethryx AI Systems. All rights reserved.
            </p>
        </footer>
    );
}