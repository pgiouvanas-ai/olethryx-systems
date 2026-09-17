"use client";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import type { Service } from "@/components/ServiceCard";
import ContactModal from "@/components/ContactModal";

// The three services offered
const services: Service[] = [
  {
    name: "Software engineering & development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase", "CI/CD", "Vercel", "Resend"],
    description: "Building full-stack applications and platforms from architecture through deployment.",
  },
  {
    name: "AI engineering & development",
    stack: ["Python", "FastAPI", "LLMs", "RAG", "AI Agents"],
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
  const [showContact, setShowContact] = useState(false);
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
          onContactClick={() => setShowContact(true)}
        />
      )}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  );
}