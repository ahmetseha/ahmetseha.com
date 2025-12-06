'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Bookmark, BookOpen, Briefcase, Menu, PaletteIcon, X } from 'lucide-react';

import ThemeToogle from '@/components/ui/theme-toggle';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { DATA } from '@/data/resume';

import { cn } from '@/lib/utils';

const navItems = [
  { href: '/work', label: 'Work', icon: Briefcase },
  { href: '/hobbies', label: 'Hobbies', icon: PaletteIcon },
  { href: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
  { href: '/thoughts', label: 'Thougts', icon: BookOpen },
  { href: '/blog', label: 'Blog', icon: BookOpen },
];

export function TopHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Header */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6 py-4">
        <div className="flex justify-between items-center px-4 py-3 backdrop-blur-md bg-background/80 supports-[backdrop-filter]:bg-background/60 rounded-xl border border-border/20">
          {/* Logo */}
          <div className="text-sm font-medium text-foreground">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Avatar className="size-8 rounded-full ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-200">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-full" />
              <AvatarFallback className="rounded-full">{DATA.initials}</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'p-2 rounded-md transition-all duration-200 relative group',
                      'hover:bg-accent hover:text-accent-foreground hover:scale-110',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    aria-label={item.label}
                  >
                    <Icon
                      className={cn(
                        'size-4 transition-transform duration-200',
                        'group-hover:scale-110',
                        isActive && 'scale-110'
                      )}
                    />
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
          <ThemeToogle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToogle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="size-5 transition-transform duration-200" />
            )}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
            <div className="bg-card/95 backdrop-blur-sm border border-border/40 rounded-xl shadow-lg p-3 animate-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                      'hover:bg-accent/50 hover:text-accent-foreground',
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-muted-foreground'
                    )}
                  >
                    <Icon className="size-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
