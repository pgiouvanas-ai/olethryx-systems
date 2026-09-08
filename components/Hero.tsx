import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <Image
              src="/olethryx-hero.png"
              alt="Fractured obsidian monolith glowing with electric blue and violet light."
              fill
              priority
              sizes="100vw"
              className="object-cover"
              />
        </section>
    );
}