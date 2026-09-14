import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";

// The three real projects shown in this section
const projects: Project[] = [
  {
    name: "Gaia AI Systems",
    logo: "/gaia-logo.png",
    status: "IN DEV",
    industry: ["Agritech", "AI", "Sustainability"],
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "Claude API"],
    description: "An Intelligent, multilayered agritech system transforming the way we farm.",
  },
  {
    name: "Retro Routes Dublin",
    logo: "/retro_logo_new.png",
    status: "LIVE",
    industry: ["Tourism", "AI", "Travel"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "An AI-powered travel platform connecting tourists with Dublin's vintage scene and culture.",
  },
  {
    name: "Olethryx AI Systems",
    logo: "/logo.png",
    status: "IN DEV",
    industry: ["Software", "AI", "Engineering"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "An AI-powered portfolio showcasing intelligent software solutions for real-world applications.",
  },
];

export default function Systems() {
  return (
    <section id="systems" className="bg-ink px-6 py-24">
      <h2 className="font-display text-2xl text-bone mb-12">Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}