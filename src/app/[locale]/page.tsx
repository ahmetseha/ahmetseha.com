'use client';

import { useTranslations } from 'next-intl';
import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';
import About from './about/page';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty font-sans text-base text-foreground dark:prose-invert">
            <About />
          </div>
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('mail')}
            </a>
            <a
              href={DATA.contact.social.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('twitter')}
            </a>
            <a
              href={DATA.contact.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('instagram')}
            </a>
            <a
              href={DATA.contact.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('github')}
            </a>
            <a
              href={DATA.contact.social.bookmarks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('bookmarks')}
            </a>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
