import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Project Name",
    year: "2024",
    description:
      "A brief description of the project and its key features. What problems does it solve?",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    projectUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Another Project",
    year: "2024",
    description:
      "Description of another interesting project. What makes it special?",
    technologies: ["React", "Node.js", "MongoDB"],
    projectUrl: "#",
    sourceUrl: "#",
  },
];

export function Projects() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
