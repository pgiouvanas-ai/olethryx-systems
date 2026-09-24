import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/components/ServiceCard";


// Services content
const services: Service[] = [
  {
    name: "Software engineering & development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase", "CI/CD", "Vercel", "Resend"],
    description: "Building full stack applications and software systems tailored to real business needs, from understanding what needs to be built and designing the architecture to developing the frontend, backend, APIs, databases, authentication, integrations and responsive interfaces. The focus is on creating clean, reliable software that can grow with the product, whether it is a new application, a custom software system or an improvement to an existing product.",
  },
  {
    name: "AI engineering & development",
    stack: ["Python", "FastAPI", "LLMs", "RAG", "AI Agents"],
    description: "Building AI powered software systems that bring intelligent capabilities into real applications, from integrating language models and developing RAG systems to creating AI agents and automated workflows. We start by identifying where AI can provide real value, then design and build the surrounding software, APIs and data flows needed to make it useful, reliable and scalable in practice.",
  },
  
  {
    name: "Product development",
    stack: ["Notion", "ChatGPT", "Claude"],
    description: "Turning ideas and real world problems into clear, buildable software products, from defining the problem and shaping the product to planning the core features and technical direction. We work closely with founders and businesses to understand what they need, decide what should be built and create a practical path from the initial idea to a working product.",
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