import { AtSign, ExternalLink, Github, Youtube } from 'lucide-react';

import BlurFade from '@/components/magicui/blur-fade';
import projects from '@/components/projects';

import { DATA } from '@/data/resume';

import About from './about/page';

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pt-[240px] pb-24 space-y-12">
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <About />
          </div>
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-2xl font-bold tracking-tight font-sans mb-6">Projects</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div key={idx} className="flex items-start space-x-4 group">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-base group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-2xl font-bold tracking-tight font-sans mb-6">Get in Touch</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={DATA.contact.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              <Youtube className="size-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Youtube</span>
              <ExternalLink className="ml-auto size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={DATA.contact.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              <Github className="size-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Github</span>
              <ExternalLink className="ml-auto size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={DATA.contact.social.readcv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              <AtSign className="size-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Read.cv</span>
              <ExternalLink className="ml-auto size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </BlurFade>
      </section>

      {/* <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <BlogPage />
        </BlurFade>
      </section> */}
    </main>
  );
}
