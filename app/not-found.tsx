import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-ink flex flex-col items-start justify-start px-6 text-left pt-20 pl-16 overflow-hidden">
      <img
       src="/olethryx_404.gif"
       alt=""
       className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="relative z-10">404</h1>
      <h2 className="relative z-10">Page not found</h2>
      <p className="relative z-10">LOST IN OLETHROS</p>
      <Link
        href="/"
        className=" relative z-10 mt-6 inline-flex items-center gap-2 px-6 py-3 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200"
      >
        GO BACK TO OLETHRYX →
      </Link>
    </main>
  );
}