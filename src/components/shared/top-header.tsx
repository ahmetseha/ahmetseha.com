'use client';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Bookmark, BookOpen, PaletteIcon } from 'lucide-react';

import ThemeToogle from '@/components/ui/theme-toggle';

import { DATA } from '@/data/resume';

export function TopHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 lg:p-6 backdrop-blur-md bg-background/80 supports-[backdrop-filter]:bg-background/60 rounded-2xl m-2 mt-0">
      <div className="text-sm font-medium text-foreground">
        <Link href="/" className="flex items-center gap-2">
          <Avatar className="size-8 rounded-full">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-full" />
            <AvatarFallback className="rounded-full">{DATA.initials}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Link
          href="/hobbies"
          className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Hobbies"
        >
          <PaletteIcon className="size-4" />
        </Link>
        <Link
          href="/bookmarks"
          className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Bookmarks"
        >
          <Bookmark className="size-4" />
        </Link>
        <Link
          href="/blog"
          className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Blog"
        >
          <BookOpen className="size-4" />
        </Link>
        <ThemeToogle />
      </div>
    </div>
  );
}
