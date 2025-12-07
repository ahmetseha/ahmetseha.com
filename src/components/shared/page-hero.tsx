'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

import { DATA } from '@/data/resume';

const navLinks = [
  { href: '/', label: 'intro' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/thoughts', label: 'thougts' },
  { href: '/work', label: 'work' },
];

const BLUR_FADE_DELAY = 0.04;

export function PageHero() {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-2xl mx-auto px-6 pt-12 sm:pt-32 pb-6 sm:pb-8">
      {/* Hero Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col item-center text-center">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1.5 sm:mb-2"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(' ')[1]}`}
            />
            <BlurFadeText
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              delay={BLUR_FADE_DELAY * 2}
              text={'Software Developer'}
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              Yeni fırsatlara açık
            </div>
          </div>
          <div className="relative flex flex-col items-end gap-2">
            <Link href="/" aria-label="Back to intro" className="rounded-full">
              <Avatar className="size-16 sm:size-20 border-2 rounded-full ring-2 ring-transparent hover:ring-primary/20 transition-all duration-200 flex-shrink-0">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-full" />
                <AvatarFallback className="rounded-full">{DATA.initials}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-4 sm:gap-6 text-sm pb-2 overflow-x-auto scrollbar-hide">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md transition-colors duration-200 whitespace-nowrap py-1',
                'hover:text-foreground hover:bg-accent/50',
                isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
