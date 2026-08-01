'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type NavigationLink = {
  href: string;
  label: string;
};

export function ActiveNavigation({ links }: { links: NavigationLink[] }) {
  const pathname = usePathname();
  const visiblePathname = pathname.replace(/^\/en(?=\/|$)/, '') || '/';

  return (
    <div className="overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
      <nav className="flex items-center gap-3 sm:gap-6 font-mono text-xs sm:text-sm uppercase tracking-wider">
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? visiblePathname === link.href
              : visiblePathname === link.href || visiblePathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'rounded-md transition-colors duration-200 whitespace-nowrap py-1 px-1.5 sm:px-0',
                'hover:text-foreground',
                isActive ? 'text-primary' : 'text-muted-foreground'
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
