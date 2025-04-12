import Link from "next/link"
import { ExternalLink } from "lucide-react"

// Sample work data
const projects = [
  {
    title: "Kişisel Web Sitesi",
    description:
      "Next.js, TypeScript ve Tailwind CSS ile geliştirilmiş kişisel web sitesi",
    url: "https://ahmetseha.com",
    image: "/images/projects/personal-website.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Ticaret Uygulaması",
    description: "React ve Node.js ile geliştirilmiş e-ticaret uygulaması",
    url: "https://github.com/ahmetseha/ecommerce",
    image: "/images/projects/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Blog Uygulaması",
    description: "Next.js ve MDX ile geliştirilmiş blog uygulaması",
    url: "https://github.com/ahmetseha/blog",
    image: "/images/projects/blog.png",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
  },
]

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Çalışmalarım</h1>
        <p className="text-lg text-muted-foreground">
          Geliştirdiğim projeler ve çalışmalarım.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.url}
            className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    {project.title}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
