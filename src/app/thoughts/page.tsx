'use client';

import { useMemo, useState } from 'react';

import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';

import { THOUGHTS, THOUGHT_CATEGORIES, type ThoughtCategory } from '@/data/thoughts';

import { cn } from '@/lib/utils';

const BLUR_FADE_DELAY = 0.04;

type FilterValue = 'all' | ThoughtCategory;

const formatClockTime = (timestamp: string) =>
  new Date(timestamp).toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  });

const formatRelativeTime = (timestamp: string) => {
  const formatter = new Intl.RelativeTimeFormat('tr', { numeric: 'auto' });
  const diffMs = new Date(timestamp).getTime() - Date.now();
  const minutes = Math.round(diffMs / (1000 * 60));

  if (Math.abs(minutes) < 60) {
    return formatter.format(minutes, 'minute');
  }

  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) {
    return formatter.format(hours, 'hour');
  }

  const days = Math.round(hours / 24);
  if (Math.abs(days) < 30) {
    return formatter.format(days, 'day');
  }

  const months = Math.round(days / 30);
  return formatter.format(months, 'month');
};

export default function ThoughtsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all');

  const sortedThoughts = useMemo(
    () =>
      [...THOUGHTS].sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ),
    []
  );

  const filteredThoughts = useMemo(
    () =>
      sortedThoughts.filter((thought) =>
        activeCategory === 'all' ? true : thought.category === activeCategory
      ),
    [sortedThoughts, activeCategory]
  );

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-40 space-y-12">
      <section id="thoughts-intro" className="pt-4 sm:pt-0">
        <div className="space-y-3">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tight"
            text="Kısa düşünceler"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tasarım notlarım, kod parçaları ve ufak deneylerimi burada topluyorum. Uzun yazılar
              yazmadan da paylaşmaya değer bir şeyler var.
            </p>
          </BlurFade>
        </div>
      </section>


      <section id="thoughts-list" className="space-y-10">
        {filteredThoughts.map((thought, index) => (
          <BlurFade key={thought.id} delay={BLUR_FADE_DELAY * (3 + index)}>
            <article className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                <span>{thought.label}</span>
                <div className="flex items-center gap-2 text-[0.7rem] tracking-normal uppercase">
                  <span className="font-mono text-xs text-muted-foreground">
                    {formatClockTime(thought.timestamp)}
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-muted-foreground/80">{formatRelativeTime(thought.timestamp)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{thought.title}</h3>
                {thought.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{thought.description}</p>
                )}
                {thought.code && (
                  <pre className="bg-muted border border-border rounded-2xl p-4 text-sm text-muted-foreground/90 whitespace-pre-wrap">
                    <code>{thought.code}</code>
                  </pre>
                )}
              </div>
            </article>
          </BlurFade>
        ))}
      </section>
      <nav
        aria-label="Thoughts filtre menüsü"
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="inline-flex gap-1 rounded-full border border-border/50 bg-background/70 px-1 py-1 text-xs font-medium shadow-lg shadow-black/5 backdrop-blur-2xl dark:bg-black/40">
          {THOUGHT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.value;
            return (
              <button
                key={category.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  'px-3 py-1.5 rounded-full transition-all duration-200',
                  'hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                  isActive
                    ? 'bg-foreground text-background shadow-md'
                    : 'text-muted-foreground'
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
}
