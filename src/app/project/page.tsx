import BlurFade from '@/components/magicui/blur-fade';
import projects from '@/components/projects';

const BLUR_FADE_DELAY = 0.04;

export default function ProjectPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="projects" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold tracking-tighter font-sans mb-4">Projects</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
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
    </main>
  );
}
