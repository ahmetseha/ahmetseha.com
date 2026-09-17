import Image from 'next/image';
import Link from 'next/link';

import { getTranslations } from 'next-intl/server';

import BlurFade from '@/components/magicui/blur-fade';
import { ActiveNavigation } from '@/components/shared/active-navigation';

import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export async function PageHero() {
  const t = await getTranslations('Navigation');
  const tHero = await getTranslations('Hero');
  const navLinks = [
    { href: '/', label: t('intro') },
    { href: '/projects', label: t('projects') },
    { href: '/blog', label: t('blog') },
    { href: '/work', label: t('work') },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-6 sm:pb-8">
      <div className="mb-8 sm:mb-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-6 flex items-center gap-2.5 sm:mb-8">
            <Link
              href="/"
              aria-label="Back to intro"
              className="relative size-9 shrink-0 overflow-hidden rounded-full"
            >
              <Image
                src={DATA.avatarUrl}
                alt={DATA.name}
                fill
                priority
                sizes="36px"
                className="object-contain"
              />
            </Link>
            <span className="font-mono text-[13px] text-muted-foreground">
              {tHero('name')}
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl">
            <span className="block text-foreground">{tHero('titleLine1')}</span>
            <span className="block text-muted-foreground">
              {tHero('titleLine2')}<span className="text-primary">.</span>
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-[15px]">
            {tHero('description')}
          </p>
        </BlurFade>
      </div>

      <ActiveNavigation links={navLinks} />
    </div>
  );
}
