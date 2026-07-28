'use client';

import { useState } from 'react';

import Image from 'next/image';

import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Package,
  Smartphone,
  TerminalSquare,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import BlurFade from '@/components/magicui/blur-fade';
import { useProjects, type Project, type ProjectCategory } from '@/components/projects';

const BLUR_FADE_DELAY = 0.04;

const categoryOrder: ProjectCategory[] = ['apps', 'web', 'tools', 'npm'];

const categoryIcons = {
  apps: Smartphone,
  web: Globe2,
  tools: TerminalSquare,
  npm: Package,
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {project.links.map((link) => (
        <a
          key={`${project.id}-${link.type}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:min-h-0 sm:px-2.5 sm:py-1"
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

function AppVisualPreview({ project, mobile = false }: { project: Project; mobile?: boolean }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} on the App Store`}
      className={
        mobile
          ? 'relative mx-3 block min-h-[258px] overflow-hidden rounded-[18px] border border-white/10'
          : 'relative block min-h-[340px] overflow-hidden rounded-2xl border border-white/10'
      }
      style={{ backgroundColor: project.showcaseSurface ?? '#f5f1e8' }}
    >
      <div
        className={`absolute left-1/2 flex -translate-x-1/2 items-end justify-center ${
          mobile ? '-bottom-8 w-[120%] gap-2' : '-bottom-12 w-[116%] gap-3'
        }`}
      >
        {project.screenshots?.map((screenshot, index) => (
          <div
            key={screenshot}
            className={`relative aspect-[600/1300] w-[31%] shrink-0 overflow-hidden rounded-t-[18px] border-[3px] border-[#191720] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 ${
              index === 1 ? '-translate-y-5' : ''
            }`}
          >
            <Image
              src={screenshot}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 640px) 30vw, 150px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <span
        className={`absolute grid size-9 place-items-center rounded-full bg-[#191720] text-white shadow-lg transition-transform duration-300 group-hover:rotate-45 ${
          mobile ? 'right-3 top-3' : 'right-4 top-4'
        }`}
      >
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  );
}

function AppShowcaseCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border bg-[#17151f]"
      style={{ borderColor: `${project.showcaseAccent ?? '#ffe600'}40` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 10%, ${
            project.showcaseAccent ?? '#ffe600'
          }22, transparent 34%), radial-gradient(circle at 85% 80%, ${
            project.showcaseAccent ?? '#ffe600'
          }18, transparent 38%)`,
        }}
      />

      <div className="relative grid gap-0 sm:hidden">
        <div className="flex items-center gap-3 px-4 pb-3 pt-4">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src={project.image}
              alt={`${project.title} app icon`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p
              className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em]"
              style={{ color: project.showcaseAccent ?? '#ffe600' }}
            >
              On the App Store
            </p>
            <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <AppVisualPreview project={project} mobile />

        <p className="px-4 pt-4 text-[13px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="space-y-3 px-4 pb-4 pt-3">
          <ProjectTags project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className="relative hidden gap-8 p-7 sm:grid sm:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative size-20 overflow-hidden rounded-[22px] ring-1 ring-white/10">
                <Image
                  src={project.image}
                  alt={`${project.title} app icon`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p
                  className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: project.showcaseAccent ?? '#ffe600' }}
                >
                  On the App Store
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </div>

          <div className="space-y-3">
            <ProjectTags project={project} />
            <ProjectLinks project={project} />
          </div>
        </div>

        <AppVisualPreview project={project} />
      </div>
    </article>
  );
}

function AppSwitcher({
  apps,
  selectedAppId,
  onSelect,
}: {
  apps: Project[];
  selectedAppId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Published apps"
      className="mb-3 grid grid-cols-4 gap-1.5 sm:mb-4 sm:flex sm:gap-2"
    >
      {apps.map((app) => {
        const isSelected = app.id === selectedAppId;

        return (
          <button
            key={app.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`app-panel-${app.id}`}
            onClick={() => onSelect(app.id)}
            className="group/app flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border bg-card/60 px-1 py-2 text-center transition-all duration-200 hover:border-white/20 sm:flex-1 sm:flex-row sm:justify-start sm:gap-2.5 sm:rounded-2xl sm:p-2.5 sm:text-left"
            style={
              isSelected
                ? {
                    borderColor: `${app.showcaseAccent ?? '#ffe600'}80`,
                    backgroundColor: `${app.showcaseAccent ?? '#ffe600'}10`,
                  }
                : undefined
            }
          >
            <span className="relative size-10 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image src={app.image} alt="" fill sizes="40px" className="object-cover" />
            </span>
            <span className="min-w-0 max-w-full">
              <span
                className="block max-w-full truncate text-[9px] font-semibold leading-tight transition-colors sm:text-xs"
                style={isSelected ? { color: app.showcaseAccent ?? '#ffe600' } : undefined}
              >
                {app.title}
              </span>
              <span className="mt-0.5 hidden font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 sm:block">
                {app.tags[2] ?? 'iOS'}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card/65 transition-colors hover:border-primary/30">
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b bg-muted/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/10 bg-black/60 text-white opacity-100 backdrop-blur transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:-translate-x-1 sm:opacity-0">
            <ExternalLink className="size-3.5" />
          </span>
        </div>
      </a>

      <div className="space-y-3 p-4">
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
        <ProjectTags project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const projects = useProjects();
  const t = useTranslations('ProjectCategories');
  const apps = projects.filter((project) => project.category === 'apps');
  const [selectedAppId, setSelectedAppId] = useState(apps[0]?.id ?? '');
  const selectedApp = apps.find((app) => app.id === selectedAppId) ?? apps[0];

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

      <div className="space-y-12 sm:space-y-20">
        {categoryOrder.map((category, categoryIndex) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          const CategoryIcon = categoryIcons[category];

          return (
            <BlurFade key={category} delay={BLUR_FADE_DELAY * (categoryIndex + 2)}>
              <section id={category} className="scroll-mt-8">
                <div className="mb-4 flex items-start justify-between gap-3 sm:mb-6 sm:items-end sm:gap-4">
                  <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border bg-secondary/80 text-primary sm:size-9 sm:rounded-xl">
                      <CategoryIcon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {t(`${category}.title`)}
                      </h2>
                      <p className="mt-0.5 max-w-md text-xs leading-relaxed text-muted-foreground sm:mt-1 sm:text-sm">
                        {t(`${category}.description`)}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 pt-1 font-mono text-[9px] text-muted-foreground/60 sm:pb-0.5 sm:pt-0 sm:text-[10px]">
                    {String(categoryIndex + 1).padStart(2, '0')} /{' '}
                    {String(categoryProjects.length).padStart(2, '0')}
                  </span>
                </div>

                {category === 'apps' && selectedApp ? (
                  <div>
                    <AppSwitcher
                      apps={categoryProjects}
                      selectedAppId={selectedApp.id}
                      onSelect={setSelectedAppId}
                    />
                    <div key={selectedApp.id} id={`app-panel-${selectedApp.id}`} role="tabpanel">
                      <BlurFade delay={0.01}>
                        <AppShowcaseCard project={selectedApp} />
                      </BlurFade>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {categoryProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </section>
            </BlurFade>
          );
        })}
      </div>
    </main>
  );
}
