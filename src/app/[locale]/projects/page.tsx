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
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
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

      <div className="relative grid gap-8 p-5 sm:grid-cols-[0.9fr_1.1fr] sm:p-7">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative size-16 overflow-hidden rounded-[18px] ring-1 ring-white/10 sm:size-20 sm:rounded-[22px]">
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

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} on the App Store`}
          className="relative block min-h-[285px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[340px]"
          style={{ backgroundColor: project.showcaseSurface ?? '#f5f1e8' }}
        >
          <div className="absolute -bottom-12 left-1/2 flex w-[116%] -translate-x-1/2 items-end justify-center gap-2 sm:gap-3">
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
          <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-[#191720] text-white shadow-lg transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </a>
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
      className="-mx-4 mb-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
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
            className="group/app flex min-w-[148px] flex-1 snap-start items-center gap-2.5 rounded-2xl border bg-card/60 p-2.5 text-left transition-all duration-200 hover:border-white/20 sm:min-w-0"
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
            <span className="min-w-0">
              <span
                className="block truncate text-xs font-semibold transition-colors"
                style={isSelected ? { color: app.showcaseAccent ?? '#ffe600' } : undefined}
              >
                {app.title}
              </span>
              <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
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
          <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:-translate-x-1">
            <ExternalLink className="size-3.5" />
          </span>
        </div>
      </a>

      <div className="space-y-3 p-4">
        <div>
          <div className="mb-1 flex items-start justify-between gap-3">
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
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-16 sm:px-6 sm:pb-24">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="mb-12 border-b pb-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            {t('eyebrow')}
          </p>
          <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('title')}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t('description')}
          </p>
        </header>
      </BlurFade>

      <div className="space-y-16 sm:space-y-20">
        {categoryOrder.map((category, categoryIndex) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          const CategoryIcon = categoryIcons[category];

          return (
            <BlurFade key={category} delay={BLUR_FADE_DELAY * (categoryIndex + 2)}>
              <section id={category} className="scroll-mt-8">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border bg-secondary/80 text-primary">
                      <CategoryIcon className="size-4" />
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">
                        {t(`${category}.title`)}
                      </h2>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {t(`${category}.description`)}
                      </p>
                    </div>
                  </div>
                  <span className="pb-0.5 font-mono text-[10px] text-muted-foreground/60">
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
