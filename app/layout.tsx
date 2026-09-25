import type { Metadata } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

// The three fonts that are used across the site.
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight:["500","700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Metadata used by search engines
export const metadata: Metadata = {
  title: "Olethryx AI Systems",
  description: "Building user focused intelligent software systems and full stack applications. Combining software engineering, AI engineering and product development to turn ideas into working products.",
  other: {
    google: "notranslate",
  },
};

// Shared layout among every page in the application.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone">
        {children}
        <CookieConsent />
        </body>
    </html>
  );
}
