"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/components/ProjectCard";

type ProjectDetail = Project & {
  problem: string;
  solution: string;
  build: string;
};

// The three real projects shown in this section
const projects: ProjectDetail[] = [
  {
    name: "Gaia AI Systems",
    logo: "/gaia-logo.png",
    status: "IN DEV",
    industry: ["Agritech", "AI", "Sustainability"],
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase"],
    description: "Helping farms produce better food while becoming more sustainable and financially viable.",
    problem: "Today, farms that want to use more sustainable and traditional farming methods often face a difficult trade off. Producing higher quality products while protecting the land and using more responsible farming practices can require more time, labour and resources, which can make the farm much more expensive to run. This puts pressure on both farmers and consumers. Farmers can struggle to make their businesses financially viable, while consumers are often left choosing between expensive products from smaller sustainable farms or cheaper products from large scale production, where quality and environmental impact can be very different.",
    solution: "Gaia was created to enhance traditional farming methods with technology, data and AI. The aim is to help farms improve the quality of what they produce while using their resources more sustainably and keeping the business financially viable. Farmers will be able to receive recommendations tailored to their own farm, helping them understand where they can use fewer resources, improve their farming practices and reduce unnecessary costs. The goal is to support the farmer rather than replace the knowledge and experience that comes from traditional farming. By making sustainable farming more practical and viable, Gaia aims to support a better quality of life for farmers in the countryside while helping consumers have access to fresher, higher quality and healthier products.",
    build: "Gaia is being built with Next.js and TypeScript on the frontend, Python and FastAPI for the backend, and Supabase for PostgreSQL, authentication and row level security. The different parts of the system are kept separate so the application, backend services and AI capabilities can be developed and improved independently as Gaia grows. The system is being built around the needs of each individual farm. Farm data will be used to understand its specific conditions and requirements, allowing Gaia to provide customised recommendations on how to use resources more efficiently, improve sustainability and reduce unnecessary costs.",
  },
  {
    name: "Retro Routes Dublin",
    logo: "/retro_logo_new.png",
    status: "LIVE",
    industry: ["Tourism", "AI", "Culture"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "An AI-powered travel platform connecting tourists with Dublin's vintage scene and culture.",
    problem: "Many local businesses, including independent tour guides, did not have a website that properly represented what they offered or gave them a place to build their own identity online. Their services could be difficult for visitors to discover, and potential customers often had to search through different platforms to understand which experience was right for them.",
    solution: "I saw an opportunity to give this business a stronger online presence with a website built specifically around its tours, its identity and what it offers visitors in Dublin. I proposed a three stage approach for Retro Routes Dublin. The first stage was to create a customised website to present the tours and the experience in one place. The second stage will introduce an AI chat that can help visitors decide which tour is right for them, discover things they can do in Dublin and learn more about Irish language and culture. The third stage will introduce online booking connected to the AI experience once the website reaches enough traffic to support it. This will give visitors a direct way to move from discovering a tour to booking it.",
    build: "Retro Routes Dublin was built with Next.js and TypeScript, with Tailwind CSS used to create the interface and Resend used for transactional email. The site was designed around the business and its tours, with the structure built to support the planned AI chat and future booking system as the project develops. The first version focuses on creating a strong foundation for the business online. The system can then be extended with the AI experience and, later, the booking functionality without having to rebuild the website from the ground up.",
  },
  {
    name: "Olethryx AI Systems",
    logo: "/logo.png",
    status: "IN DEV",
    industry: ["Portfolio", "AI", "Engineering"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    description: "An AI-powered portfolio showcasing intelligent software solutions for real-world applications.",
    problem: "Olethryx started with a simple idea: create a place where I could bring my software projects, services and ideas together and give them room to grow. I wanted the platform to represent the work I am building today while creating a foundation for the studio I want to build in the future.",
    solution: "Olethryx is being developed in three stages. The first stage is the website, bringing my projects, services and software engineering work together in one place and giving each system its own story. The second stage will introduce an AI chat that can help clients and collaborators explore the studio, understand the services and find the right way for us to work together. As the studio grows, Olethryx will bring clients and collaborators together around new projects and ideas. The third stage will turn that experience into a smart client and studio platform. Clients will have their own space where they can follow their projects, see progress and interact with the work, while collaborators can work alongside the studio in the same environment.",
    build: "Olethryx is being built with Next.js, TypeScript and Tailwind CSS using a component based structure. The first stage is being developed from the ground up as a real software project, with reusable components and structured project data that make the platform easy to expand. The foundation is being designed with the future stages in mind, giving the AI experience and client platform a natural place to grow within the same system.",
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