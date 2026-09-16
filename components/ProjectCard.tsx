// defines each project card
export type Project = {
  name: string;
  logo: string;
  status: "LIVE" | "IN DEV";
  industry: string[];
  stack: string[];
  description: string;
};

// card loads with project
type ProjectCardProps = {
  project: Project;
  onViewDetails: () => void;
};

// card rendering projects
export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const isLive = project.status === "LIVE";

  return (
    <div className="border border-panel-line bg-panel p-6">
      {/* logo, name, status badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <img src={project.logo} alt="" className="h-13 w-auto shrink-0" />
          <span className="font-display text-lg text-bone">{project.name}</span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 border font-mono text-[11px] tracking-wider ${
            isLive ? "border-green text-green" : "border-violet text-violet"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-green" : "bg-violet"}`} />
          {project.status}
        </span>
      </div>

      {/* industry*/}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.industry.map((tech) => (
         <span 
           key={tech}
           className="rounded-full px-3 py-1 border border-green font-mono text-[11px] text-green">  
          {tech} 
        </span>
        ))}
      </div>

      {/* tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full px-3 py-1 border border-violet font-mono text-[11px] text-violet"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* short description */}
      <p className="text-sm text-bone mb-6">{project.description}</p>

      {/* modal button */}
      <button onClick={onViewDetails} className="inline-flex items-center gap-2 px-4 py-2 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200">
        VIEW DETAILS →
      </button>
    </div>
  );
}