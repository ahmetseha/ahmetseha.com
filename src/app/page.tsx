import Experience from '@/components/experience';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import projects from '@/components/projects';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { DATA } from '@/data/resume';

import About from './about/page';
import BlogPage from './blog/page';

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(' ')[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border rounded-full">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-full" />
                <AvatarFallback className="rounded-full">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <About />
          </div>
        </BlurFade>
      </section>

      <section id="experience">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Experience delay={BLUR_FADE_DELAY * 5} />
          </div>
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold tracking-tighter font-sans mb-4">Projects</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="space-y-6">
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

      <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <BlogPage />
        </BlurFade>
      </section>
    </main>
  );
}
