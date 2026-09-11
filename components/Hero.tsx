import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center px-6 pt-24">
            <Image
              src="/olethryx-hero.png"
              alt="Fractured obsidian monolith glowing with electric blue and violet light."
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 max-w-xl">
                <h1 className="font-display sm:text-8xl text-bone mb-4">
                    Creative
                    <br />
                    <span className="bg-linear-to-r from-blue to-violet bg-clip-text text-transparent">
                        Destruction
                    </span>
                </h1>
                <p className="font-body text-lg sm:text-1xl text-bone">
                    A new way to create intelligent software systems.
                </p>
            </div>

        </section>
    );
}