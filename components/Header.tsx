import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-ink border-b border-panel-line">
            <div className="flex items-center gap-2.5">
                <Image src={logo} alt="Olethryx AI Systems" className="h-7 w-7 shrink-0" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase bg-linear-to-r/srgb from-blue to-violet bg-clip-text text-transparent">
                  OLETHRYX AI SYSTEMS
                </span>
            </div>
        </nav>
    );
}