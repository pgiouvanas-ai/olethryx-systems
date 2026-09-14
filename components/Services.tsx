import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/components/ServiceCard";

// The three services offered
const services: Service[] = [
  {
    name: "AI engineering and development",
    stack: ["TODO: stack"],
    description: "Building AI directly into real systems, from intelligent features to automated workflows.",
  },
  {
    name: "Software engineering and development",
    stack: ["TODO: stack"],
    description: "Full-stack web apps and platforms, built end to end with a layered architecture.",
  },
  {
    name: "Product development",
    stack: ["TODO: stack"],
    description: "Scoping an idea into a real, buildable product before a line of code gets written.",
  },
  
  
];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-24">
      <h2 className="font-display text-2xl text-bone mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}