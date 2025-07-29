'use client';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

import ThemeToogle from '@/components/ui/theme-toggle';

import { DATA } from '@/data/resume';

export function TopHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4">
      <div className="text-sm font-medium text-foreground">
        <Link href="/" className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToogle />
      </div>
    </div>
  );
}
