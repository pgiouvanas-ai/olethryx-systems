// defines each service card
export type Service = {
  name: string;
  stack: string[];
  description: string;
};

// card loads with service
type ServiceCardProps = {
  service: Service;
};

// card rendering services
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="border border-panel-line bg-panel p-6 flex flex-col h-full">
      {/* title */}
      <span className="font-display text-lg text-bone">{service.name}</span>

      {/* tech stack */}
      <div className="min-h-19 mb-4">
      <div className="flex flex-wrap gap-2 mt-4">
        {service.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full px-3 py-1 border border-violet font-mono text-[11px] text-violet"
          >
            {tech}
          </span>
        ))}
      </div>
      </div>

      {/* short description */}
      <p className="text-sm text-bone mb-6">{service.description}</p>

      {/* modal button */}
      <button className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 border border-blue text-blue font-mono text-xs tracking-widest hover:bg-blue hover:text-ink transition-colors duration-200">
        VIEW DETAILS →
      </button>
    </div>
  );
}