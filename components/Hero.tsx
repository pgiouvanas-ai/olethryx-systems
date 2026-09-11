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
            <div className="relative z-10 max-w-x1">
                <h1 className="font-display text-4x1 sm:text-5x1 test-bone mb-4">
                    Creative Destruction
                </h1>
                <p className="font-body text-1g text-bone">
                    A new way to create intelligent software systems.
                </p>
            </div>

        </section>
    );
}