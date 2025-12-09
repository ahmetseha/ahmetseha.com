'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('AboutPage');

  return (
    <main className="space-y-6 mt-[-12px]">
      <article className="space-y-4">
        <p className="text-sm text-muted-foreground font-sans leading-relaxed">
          {t('paragraph1')}
        </p>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed">
          {t('paragraph2')}
        </p>
      </article>
    </main>
  );
}
