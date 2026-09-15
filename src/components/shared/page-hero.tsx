import Image from 'next/image';
import Link from 'next/link';

import { getTranslations } from 'next-intl/server';

import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ActiveNavigation } from '@/components/shared/active-navigation';
import { HoverBeam } from '@/components/ui/hover-beam';

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
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-12 sm:pt-32 pb-6 sm:pb-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col items-start text-left">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1.5 sm:mb-2"
              yOffset={8}
              text={tHero('greeting', { name: DATA.name.split(' ')[1] })}
            />
            <BlurFadeText
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              delay={BLUR_FADE_DELAY * 2}
              text={tHero('role')}
            />
          </div>
          <div className="relative flex flex-col items-end gap-2">
            <HoverBeam
              preset="control"
              borderRadius={999}
              className="size-16 rounded-full sm:size-20"
            >
              <Link
                href="/"
                aria-label="Back to intro"
                className="relative block size-16 flex-shrink-0 overflow-hidden rounded-full border-2 ring-2 ring-transparent transition-all duration-200 hover:ring-primary/20 sm:size-20"
              >
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-cover"
                />
              </Link>
            </HoverBeam>
          </div>
        </div>
      </div>

      <ActiveNavigation links={navLinks} />
    </div>
  );
}
