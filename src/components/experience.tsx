'use client';

import { useTranslations } from 'next-intl';
import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

interface ExperienceProps {
  delay?: number;
}

export default function Experience({ delay = BLUR_FADE_DELAY * 5 }: ExperienceProps) {
  const t = useTranslations('Work');

  const experiences = [
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
    <main>
      <section className="mt-[-24px] space-y-8">
        {experiences.map((experience, idx) => (
          <article key={idx}>
            <h3 className="font-semibold text-xl mb-2 text-foreground">{experience.company}</h3>
            <p className="text-base text-muted-foreground mb-3">
              {experience.position}
              {experience.location && `, ${experience.location}`} • {experience.period}
            </p>

            <p className="text-base text-muted-foreground font-sans mb-4 leading-relaxed">{experience.description}</p>

            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground font-sans">
              {experience.highlights.map((highlight, highlightIdx) => (
                <li key={highlightIdx}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
