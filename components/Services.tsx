"use client";
import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/components/ServiceCard";


// Services content
const services: Service[] = [
  {
    name: "Software engineering & development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase", "CI/CD"],
    description: "Building websites, applications and software systems around the needs of each business. From planning how something should work to designing the interface, developing the frontend and backend, setting up databases and connecting external services, I work across the different parts of a product to bring it to life. The goal is to build software that works well, is easy to maintain and can grow as the business develops.",
  },
  {
    name: "AI engineering & development",
    stack: ["Python", "FastAPI", "LLMs", "RAG", "AI Agents"],
    description: "Building AI powered software systems that bring intelligent capabilities into real applications, from integrating language models and developing RAG systems to creating AI agents and automated workflows. We start by identifying where AI can provide real value, then design and build the surrounding software, APIs and data flows needed to make it useful, reliable and scalable in practice.",
  },
  
  {
    name: "Product development",
    stack: ["UI/UX", "Agile/Scrum", "Prototyping", "Product Strategy", "Product Roadmaping"],
    description: "Helping turn an idea into something that can actually be built. This starts with understanding the problem, the people who will use the product and what they need. From there, I help define the features, work out priorities and plan how the product should take shape, keeping business goals and technical possibilities in mind.",
  },
  
  
];

export default function Services() {
  const handleExploreService = (service: Service) => {
  console.log("Explore service:", service.name);
};
  return (
    <section id="services" className="bg-ink px-6 py-24">
      <h2 className="font-display text-2xl text-bone mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} onExploreService={() => handleExploreService(service)}/>
        ))}
      </div>
    </section>
  );
}