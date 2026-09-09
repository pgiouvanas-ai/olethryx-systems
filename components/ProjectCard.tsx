//defines each project card

type Project = {
    name: string;
    logo: string;
    status: "LIVE" | "IN DEV";
    role: string;
    industry: string;
    stack: string[];
    description: string;
};

//card loads with project
type ProjectCardProps = {
    project: Project;
};

// card component, renders a project into a card

export default function ProjectCard({ project }: ProjectCardProps) {
    const isLive = project.status === "LIVE";

    return (
        <div className="border border-panel-line bg-panel p-6">
            {/* logo, name, status badge */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <img src={project.logo} alt="" className="h-7 w-7 shrink-0" />
                    <span className="font-display text-1g text-bone">{project.name}</span>
                </div>
            </div>
        </div>
    )
}