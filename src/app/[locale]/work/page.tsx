import { setRequestLocale } from 'next-intl/server';

import Experience from '@/components/experience';
import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-16 sm:px-6 sm:pb-24">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="mb-8 border-b pb-6 sm:mb-10 sm:pb-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                Work / Experience
              </p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                Selected Experience
              </h1>
            </div>
            <span className="mb-1 shrink-0 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              2022—Now
            </span>
          </div>

          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Product-focused frontend work across independent tools, e-commerce, and travel
            platforms.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
            {['Frontend engineering', 'Product thinking', 'UI systems'].map((focus) => (
              <span key={focus} className="inline-flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                {focus}
              </span>
            ))}
          </div>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Experience />
      </BlurFade>
    </main>
  );
}
