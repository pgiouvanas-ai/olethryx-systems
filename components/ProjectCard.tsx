// defines each project card
export type Project = {
  name: string;
  logo: string;
  status: "LIVE" | "IN DEV";
  role: string;
  industry: string;
  stack: string[];
  description: string;
};

// card loads with project
type ProjectCardProps = {
  project: Project;
};

// card rendering projects
export default function ProjectCard({ project }: ProjectCardProps) {
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
            isLive ? "border-blue text-blue" : "border-panel-line text-panel-line"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-blue" : "bg-panel-line"}`} />
          {project.status}
        </span>
      </div>

      {/* role */}
      <p className="font-mono text-xs text-panel-line mb-4">{project.role}</p>

      {/* industry*/}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="rounded-full px-3 py-1 border border-panel-line font-mono text-[11px] text-bone">
          {project.industry}
        </span>
      </div>

      {/* tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full px-3 py-1 border border-panel-line font-mono text-[11px] text-bone"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* short description */}
      <p className="text-sm text-bone mb-6">{project.description}</p>

      {/* modal button */}
      <button className="inline-flex items-center gap-2 px-4 py-2 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200">
        VIEW DETAILS →
      </button>
    </div>
  );
}