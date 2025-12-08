import Image from 'next/image';

import { ExternalLink } from 'lucide-react';

import BlurFade from '@/components/magicui/blur-fade';
import projects from '@/components/projects';

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <BlurFade key={idx} delay={BLUR_FADE_DELAY * (idx + 1)}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted/20 shadow-sm transition-all group-hover:shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-base tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <ExternalLink className="size-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
