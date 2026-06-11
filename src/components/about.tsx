import { getTranslations } from 'next-intl/server';

export async function About() {
  const t = await getTranslations('AboutPage');

  return (
    <article className="space-y-5">
      <p className="text-base text-foreground font-sans leading-relaxed">
        {t('paragraph1')}
      </p>
      <p className="text-base text-foreground font-sans leading-relaxed">
        {t('paragraph2')}
      </p>
    </article>
  );
}
