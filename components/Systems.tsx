import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";

// The three real projects shown in this section
const projects: Project[] = [
  {
    name: "Gaia AI Systems",
    logo: "/gaia-logo.png",
    status: "IN DEV",
    role: "Founder / Full-Stack Developer",
    industry: "Agritech",
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "Claude API"],
    description: "TODO: one-line description",
  },
  {
    name: "Retro Routes Dublin",
    logo: "/retro_logo.jpg",
    status: "LIVE",
    role: "Sole Developer — Design, Frontend, Backend, Deployment",
    industry: "TODO: industry",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "TODO: one-line description",
  },
  {
    name: "Olethryx AI Systems",
    logo: "/logo.png",
    status: "IN DEV",
    role: "Founder / Full-Stack Developer",
    industry: "TODO: industry",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "TODO: one-line description",
  },
];

export default function Systems() {
  return (
    <section className="bg-ink px-6 py-24">
      <h2 className="font-display text-2xl text-bone mb-12">Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}