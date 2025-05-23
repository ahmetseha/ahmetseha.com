import Link from "next/link";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  sourceUrl?: string;
}

export function ProjectCard({
  title,
  year,
  description,
  technologies,
  projectUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-foreground/50 transition-colors">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex gap-2 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-secondary px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          {projectUrl && (
            <Link
              href={projectUrl}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View Project →
            </Link>
          )}
          {sourceUrl && (
            <Link
              href={sourceUrl}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Source Code →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
