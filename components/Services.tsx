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
    description: "Building software that uses AI to make everyday tasks easier and solve specific problems. This can include connecting language models to applications, working with business data, creating AI assistants and automating workflows. The focus is on finding practical uses for AI and making sure everything works as part of a complete software product.",
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