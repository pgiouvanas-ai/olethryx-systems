"use client";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import type { Service } from "@/components/ServiceCard";

// The three services offered
const services: Service[] = [
  {
    name: "Software engineering & development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Supabase", "Vercel", "CI/CD", "Resend"],
    description: "Building full-stack applications and platforms from architecture through deployment.",
  },
  {
    name: "AI engineering & development",
    stack: ["Python", "FastAPI"],
    description: "Building intelligent software and integrating AI into existing systems.",
  },
  
  {
    name: "Product development",
    stack: ["Notion", "ChatGPT", "Claude"],
    description: "Bring us your idea or a real-world problem, and we'll turn it into the right product solution.",
  },
  
  
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="bg-ink px-6 py-24">
      <h2 className="font-display text-2xl text-bone mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard 
          key={service.name} 
          service={service} 
          onViewDetails={() => setSelectedService(service)}
          />
        ))}
      </div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onContactClick={() => {}}
        />
      )}
    </section>
  );
}