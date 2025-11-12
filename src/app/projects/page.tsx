import Image from 'next/image';

import { ExternalLink } from 'lucide-react';

import BlurFade from '@/components/magicui/blur-fade';
import projects from '@/components/projects';

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="projects">
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <BlurFade key={idx} delay={BLUR_FADE_DELAY * (idx + 1)}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 items-start hover:bg-accent/30 p-3 -m-3 rounded-lg transition-colors duration-200"
              >
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted border border-border">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  {/* Title & Icon */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-base group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                  </div>

                  {/* Description */}
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
