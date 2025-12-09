'use client';

import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';

import { THOUGHTS } from '@/data/thoughts';

const BLUR_FADE_DELAY = 0.04;

const formatClockTime = (timestamp: string) =>
  new Date(timestamp).toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  });

const formatRelativeTime = (timestamp: string) => {
  const diffMs = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  if (months < 12) return `${months}mo ago`;
  return `${years}y ago`;
};

export default function ThoughtsPage() {
  const sortedThoughts = [...THOUGHTS].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-20 space-y-12">
      <section id="thoughts-list" className="space-y-10">
        {sortedThoughts.map((thought, index) => (
          <BlurFade key={thought.id} delay={BLUR_FADE_DELAY * (2 + index)}>
            <article className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground">{thought.title}</h3>
                <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-normal text-muted-foreground flex-shrink-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {formatClockTime(thought.timestamp)}
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-muted-foreground/80">
                    {formatRelativeTime(thought.timestamp)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {thought.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {thought.description}
                  </p>
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
    </main>
  );
}
