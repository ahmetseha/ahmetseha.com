import Image from 'next/image';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import BlurFade from '@/components/magicui/blur-fade';
import { getProjects, type Project, type ProjectCategory } from '@/components/projects';
import { HoverBeam } from '@/components/ui/hover-beam';

const BLUR_FADE_DELAY = 0.04;

const categoryOrder: ProjectCategory[] = ['web', 'apps', 'tools', 'npm'];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.links.map((link) => (
        <a
          key={`${project.id}-${link.type}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground sm:min-h-0 sm:px-2.5 sm:py-1"
        >
          {link.icon}
          {link.type}
        </a>
      ))}
    </div>
  );
}

function ProjectTags({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {project.tags.slice(0, 5).map((tag) => (
        <span
          key={tag}
          className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function AppCard({ project }: { project: Project }) {
  return (
    <HoverBeam className="h-full rounded-xl">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-full min-h-[138px] flex-col rounded-xl border bg-card/45 p-3 transition-colors hover:bg-card/75 sm:min-h-[218px] sm:p-5"
      >
        <div className="flex items-start justify-between gap-2">
          <div className="relative size-11 shrink-0 overflow-hidden rounded-[13px] ring-1 ring-white/10 sm:size-14 sm:rounded-2xl">
            <Image
              src={project.image}
              alt={`${project.title} app icon`}
              fill
              sizes="(max-width: 640px) 44px, 56px"
              className="object-cover"
            />
          </div>
          <span className="grid size-7 shrink-0 place-items-center rounded-full border text-muted-foreground transition-colors group-hover:border-white/20 group-hover:text-foreground sm:size-8">
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>

        <div className="mt-auto pt-3 sm:pt-5">
          <p className="mb-1 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground/60 sm:text-[9px]">
            {project.tags[2] ?? 'iOS'} · App Store
          </p>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug tracking-tight sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-2 hidden line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:block">
            {project.description}
          </p>
        </div>
      </a>
    </HoverBeam>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <HoverBeam className="h-full rounded-xl">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card/45 transition-colors">
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="block shrink-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b bg-muted/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized={project.image.endsWith('.gif')}
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/10 bg-black/60 text-white opacity-100 backdrop-blur transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:-translate-x-1 sm:opacity-0">
              <ExternalLink className="size-3.5" />
            </span>
          </div>
        </a>

        <div className="flex flex-1 flex-col p-4">
          <div>
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <h3 className="font-semibold tracking-tight">{project.title}</h3>
              <span className="shrink-0 font-mono text-[9px] uppercase tracking-wide text-muted-foreground/60">
                {project.dates.replace(' - Present', '—Now')}
              </span>
            </div>
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="mt-3">
            <ProjectTags project={project} />
          </div>
          <div className="mt-auto pt-4">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </HoverBeam>
  );
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [projects, t] = await Promise.all([getProjects(), getTranslations('ProjectCategories')]);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-14 sm:px-6 sm:pb-24">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="mb-9 border-b pb-6 sm:mb-12 sm:pb-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            {t('eyebrow')}
          </p>
          <h1 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-4xl">
            {t('title')}
          </h1>
          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            {t('description')}
          </p>
        </header>
      </BlurFade>

      <div className="space-y-12 sm:space-y-16">
        {categoryOrder.map((category, categoryIndex) => {
          const categoryProjects = projects.filter((project) => project.category === category);

          return (
            <section key={category} id={category} className="scroll-mt-8">
              <div
                className={`mb-4 flex items-end justify-between gap-4 sm:mb-6 ${
                  categoryIndex === 0 ? '' : 'border-t pt-4 sm:pt-5'
                }`}
              >
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {t(`${category}.title`)}
                  </h2>
                  <p className="mt-0.5 max-w-md text-xs leading-relaxed text-muted-foreground sm:mt-1 sm:text-sm">
                    {t(`${category}.description`)}
                  </p>
                </div>
                <span className="shrink-0 pb-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/50 sm:text-[10px]">
                  {categoryProjects.length} {categoryProjects.length === 1 ? 'project' : 'projects'}
                </span>
              </div>

              {category === 'apps' ? (
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {categoryProjects.map((project) => (
                    <AppCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {categoryProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
