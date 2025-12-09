'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('AboutPage');

  const richText = (chunks: any) => <strong>{chunks}</strong>;

  return (
    <main className="space-y-6 mt-[-12px]">
      <header>
        <p className="text-sm text-muted-foreground font-sans">
          {t.rich('intro', { strong: richText })}
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
      </header>

      <section className="space-y-6">
        <article>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            {t.rich('section1.text', { strong: richText })}
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
            <li>{t.rich('section1.list.item1', { strong: richText })}</li>
            <li>{t.rich('section1.list.item2', { strong: richText })}</li>
            <li>{t.rich('section1.list.item3', { strong: richText })}</li>
            <li>{t.rich('section1.list.item4', { strong: richText })}</li>
          </ul>
        </article>

        <article>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            {t.rich('section2.text', { strong: richText })}
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
            <li>{t.rich('section2.list.item1', { strong: richText })}</li>
            <li>{t.rich('section2.list.item2', { strong: richText })}</li>
            <li>{t.rich('section2.list.item3', { strong: richText })}</li>
            <li>{t.rich('section2.list.item4', { strong: richText })}</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
