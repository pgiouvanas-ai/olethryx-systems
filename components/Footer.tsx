import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-ink border-t border-panel-line pt-10 pb-6">
            <div className="px-6 grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-10 items-start">
                {/* Logo + Title */}
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
            </div>
        </footer>
    );
}