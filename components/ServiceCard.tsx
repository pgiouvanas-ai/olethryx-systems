// defines each service card
export type Service = {
  name: string;
  stack: string[];
  description: string;
};

// card rendering services
export default function ServiceCard({ service }: { service: Service }) {
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

      {/*  description */}
      <p className="text-sm text-bone mb-6">{service.description}</p>
    </div>
  );
}