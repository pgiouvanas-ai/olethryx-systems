"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/components/ProjectCard";

type ProjectDetail = Project & {
  problem: string;
  solution: string;
  howItWasCreated: string;
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
    problem: "Today, farms that want to use more sustainable and traditional farming methods often face a difficult trade off. Producing higher quality products while protecting the land and using more responsible farming practices can require more time, labour and resources, which can make the farm much more expensive to run. This puts pressure on both farmers and consumers. Farmers can struggle to make their businesses financially viable, while consumers are often left choosing between expensive products from smaller sustainable farms or cheaper products from large scale production, where quality and environmental impact can be very different.",
    solution: "Gaia was created to enhance traditional farming methods with technology, data and AI. The aim is to help farms improve the quality of what they produce while using their resources more sustainably and keeping the business financially viable. Farmers will be able to receive recommendations tailored to their own farm, helping them understand where they can use fewer resources, improve their farming practices and reduce unnecessary costs. The goal is to support the farmer rather than replace the knowledge and experience that comes from traditional farming. By making sustainable farming more practical and viable, Gaia aims to support a better quality of life for farmers in the countryside while helping consumers have access to fresher, higher quality and healthier products.",
    howItWasCreated: "Gaia is being built with Next.js and TypeScript on the frontend, Python and FastAPI for the backend, and Supabase for PostgreSQL, authentication and row level security. The different parts of the system are kept separate so the application, backend services and AI capabilities can be developed and improved independently as Gaia grows. The system is being built around the needs of each individual farm. Farm data will be used to understand its specific conditions and requirements, allowing Gaia to provide customised recommendations on how to use resources more efficiently, improve sustainability and reduce unnecessary costs.",
  },
  {
    name: "Retro Routes Dublin",
    logo: "/retro_logo_new.png",
    status: "LIVE",
    industry: ["Tourism", "AI", "Culture"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "An AI-powered travel platform connecting tourists with Dublin's vintage scene and culture.",
    problem: "",
    solution: "",
    howItWasCreated: "",
  },
  {
    name: "Olethryx AI Systems",
    logo: "/logo.png",
    status: "IN DEV",
    industry: ["Portfolio", "AI", "Engineering"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "An AI-powered portfolio showcasing intelligent software solutions for real-world applications.",
    problem: "",
    solution: "",
    howItWasCreated: "",
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