'use client';

import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { HoverBeam } from '@/components/ui/hover-beam';

export default function Experience() {
  const t = useTranslations('Work');

  const experiences = [
    {
      id: 'seha-studio',
      company: 'Seha Studio',
      position: t('seha-studio.position'),
      period: '2025 – Present',
      location: 'Personal',
      description: t('seha-studio.description'),
      highlights: [
        t('seha-studio.highlights.0'),
        t('seha-studio.highlights.1'),
        t('seha-studio.highlights.2'),
        t('seha-studio.highlights.3'),
      ],
    },
    {
      id: 'alisgidis',
      company: 'Alışgidiş',
      position: t('alisgidis.position'),
      period: 'February 2025 – October 2025',
      description: t('alisgidis.description'),
      highlights: [
        t('alisgidis.highlights.0'),
        t('alisgidis.highlights.1'),
        t('alisgidis.highlights.2'),
        t('alisgidis.highlights.3'),
      ],
    },
    {
      id: 'gordion',
      company: 'Gordion',
      position: t('gordion.position'),
      period: 'December 2022 – January 2025',
      location: 'Remote',
      description: t('gordion.description'),
      highlights: [
        t('gordion.highlights.0'),
        t('gordion.highlights.1'),
        t('gordion.highlights.2'),
        t('gordion.highlights.3'),
        t('gordion.highlights.4'),
      ],
    },
  ];

  return (
    <section className="space-y-4">
      {experiences.map((experience) => (
        <HoverBeam key={experience.id} className="rounded-xl">
          <article className="group rounded-xl border bg-card/35 p-5 transition-colors hover:bg-card/60 sm:p-6">
            <header className="flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {experience.company}
                </h2>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {experience.position}
                </p>
              </div>
              <div className="text-right font-mono text-[9px] uppercase leading-relaxed tracking-wide text-muted-foreground">
                <p>{experience.period}</p>
                {experience.location && (
                  <p className="mt-1 text-primary/70">{experience.location}</p>
                )}
              </div>
            </header>

            <p className="mt-4 text-sm leading-7 text-foreground/80">{experience.description}</p>

            <details className="group/details mt-5 border-t pt-4">
              <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                <span>Selected contributions · {experience.highlights.length}</span>
                <ChevronDown className="size-4 transition-transform group-open/details:rotate-180" />
              </summary>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.65em] size-1 shrink-0 rounded-full bg-primary"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </details>
          </article>
        </HoverBeam>
      ))}
    </section>
  );
}
