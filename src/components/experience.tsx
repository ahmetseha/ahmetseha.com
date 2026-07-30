'use client';

import { useTranslations } from 'next-intl';

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
    <section className="border-y">
      {experiences.map((experience, index) => (
        <article
          key={experience.id}
          className="group grid gap-4 border-b py-7 last:border-b-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6 sm:py-9"
        >
          <aside className="flex items-start justify-between gap-4 sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              {String(index + 1).padStart(2, '0')} / Role
            </p>
            <p className="max-w-32 text-right font-mono text-[9px] uppercase leading-relaxed tracking-wide text-muted-foreground sm:mt-3 sm:text-left">
              {experience.period}
            </p>
          </aside>

          <div className="min-w-0">
            <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {experience.company}
                </h2>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-primary/80">
                  {experience.position}
                </p>
              </div>
              {experience.location && (
                <span className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {experience.location}
                </span>
              )}
            </header>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[15px]">
              {experience.description}
            </p>

            <div className="mt-5">
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/60">
                Selected contributions
              </p>
              <ul className="space-y-2.5">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-[13px] leading-relaxed text-foreground/80 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-3 shrink-0 bg-primary/70"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
