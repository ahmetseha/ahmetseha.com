import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { About } from '@/components/about';
import { AsciiRevealDemo } from '@/components/ascii-reveal-demo';
import BlurFade from '@/components/magicui/blur-fade';
import { HoverBeam } from '@/components/ui/hover-beam';

import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty font-sans text-base text-foreground">
            <About />
          </div>
        </BlurFade>
      </section>

      <section id="now">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <HoverBeam className="rounded-xl">
            <div className="group flex flex-col gap-4 rounded-xl border bg-card/35 px-4 py-4 transition-colors hover:bg-card/60 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-5">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                    {t('now')}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{t('currentFocus')}</p>
              </div>

              <Link
                href="/projects"
                className="group/link inline-flex cursor-pointer items-center gap-1.5 self-start rounded-md border border-zinc-700 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-zinc-300 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary sm:self-end"
              >
                {t('exploreProjects')}
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </HoverBeam>
        </BlurFade>
      </section>

      <section aria-label="ASCII reveal demo">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <AsciiRevealDemo />
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
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
            <a
              href="/ahmet-seha-acar-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('resume')}
            </a>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
