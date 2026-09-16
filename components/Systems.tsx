"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/components/ProjectCard";

type ProjectDetail = Project & {
  detailedDescription: string;
  products: {
    name: string;
    status: "LIVE" | "IN DEV";
  }[];
  problem: string;
  solution: string;
  howItWasCreated: string;
  futurePlans: string;
};

// The three real projects shown in this section
const projects: ProjectDetail[] = [
  {
    name: "Gaia AI Systems",
    logo: "/gaia-logo.png",
    status: "IN DEV",
    industry: ["Agritech", "AI", "Sustainability"],
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase"],
    description: "An Intelligent, multilayered agritech system transforming the way we farm.",
    detailedDescription: "",
    products: [],
    problem: "",
    solution: "",
    howItWasCreated: "",
    futurePlans: "",
  },
  {
    name: "Retro Routes Dublin",
    logo: "/retro_logo_new.png",
    status: "LIVE",
    industry: ["Tourism", "AI", "Culture"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "An AI-powered travel platform connecting tourists with Dublin's vintage scene and culture.",
    detailedDescription: "",
    products: [],
    problem: "",
    solution: "",
    howItWasCreated: "",
    futurePlans: "",
  },
  {
    name: "Olethryx AI Systems",
    logo: "/logo.png",
    status: "IN DEV",
    industry: ["Portfolio", "AI", "Engineering"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "An AI-powered portfolio showcasing intelligent software solutions for real-world applications.",
    detailedDescription: "",
    products: [],
    problem: "",
    solution: "",
    howItWasCreated: "",
    futurePlans: "",
  },
];

export default function Systems() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  
  return (
    <section id="systems" className="bg-ink px-6 py-24">
      <h2 className="font-display text-2xl text-bone mb-12">Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.name} 
            project={project}
            onViewDetails={() => {
              console.log("VIEW DETAILS CLICKED", project.name);
                setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}