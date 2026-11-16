import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink flex flex-col items-center justify-center px-6 text-center">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200"
      >
        BACK TO HOME →
      </Link>
    </main>
  );
}