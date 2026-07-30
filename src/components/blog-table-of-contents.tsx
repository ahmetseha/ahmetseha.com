'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import type { BlogHeading } from '@/types/blog';

interface BlogTableOfContentsProps {
  headings: BlogHeading[];
  variant?: 'desktop' | 'mobile';
}

export function BlogTableOfContents({ headings, variant = 'desktop' }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    let frameId = 0;

    const updateActiveHeading = () => {
      const activationLine = Math.min(160, window.innerHeight * 0.25);
      let nextActiveId = elements[0].id;

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= activationLine) {
          nextActiveId = element.id;
        } else {
          break;
        }
      }

      const isAtPageEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (isAtPageEnd) {
        nextActiveId = elements[elements.length - 1].id;
      }

      setActiveId((currentId) => (currentId === nextActiveId ? currentId : nextActiveId));
      frameId = 0;
    };

    const scheduleUpdate = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateActiveHeading);
      }
    };

    updateActiveHeading();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [headings]);

  return (
    <nav aria-label="Table of contents">
      <ol className={variant === 'desktop' ? 'space-y-3.5' : 'space-y-3'}>
        {headings.map((heading) => {
          const isActive = heading.id === activeId;

          return (
            <li key={heading.id} className={cn('relative', heading.level === 3 && 'pl-3')}>
              {variant === 'desktop' && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -left-[21px] top-1/2 h-4 w-px -translate-y-1/2 bg-primary transition-opacity duration-200',
                    isActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              )}
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setActiveId(heading.id)}
                className={cn(
                  'block leading-relaxed transition-all duration-200 focus-visible:text-primary focus-visible:outline-none',
                  variant === 'desktop' ? 'font-mono text-[10px]' : 'text-sm',
                  isActive
                    ? 'translate-x-1 font-medium text-primary'
                    : 'text-zinc-400 hover:text-zinc-200'
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
