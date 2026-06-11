import { setRequestLocale } from 'next-intl/server';

import BlurFade from '@/components/magicui/blur-fade';
import { About } from '@/components/about';

const BLUR_FADE_DELAY = 0.04;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty font-sans text-base text-foreground">
            <About />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
