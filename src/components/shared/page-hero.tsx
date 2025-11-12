'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

import { DATA } from '@/data/resume';

const navLinks = [
  { href: '/', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: '/bookmarks', label: 'bookmarks' },
  { href: '/work', label: 'work' },
];

const BLUR_FADE_DELAY = 0.04;

export function PageHero() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6 pt-12 pb-6 bg-background">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl font-bold tracking-tight mb-2"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(' ')[0]}`}
            />
            <BlurFadeText
              className="text-base text-muted-foreground leading-relaxed"
              delay={BLUR_FADE_DELAY * 2}
              text={DATA.description}
            />
          </div>
          <Avatar className="size-20 border-2 rounded-full ring-2 ring-transparent hover:ring-primary/20 transition-all duration-200">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-full" />
            <AvatarFallback className="rounded-full">{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-3 text-sm  pb-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md transition-colors duration-200',
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
