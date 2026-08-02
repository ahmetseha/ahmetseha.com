'use client';

import { AsciiReveal } from '@ascii-reveal/react';

export function AsciiRevealDemo() {
  return (
    <a
      href="https://github.com/ahmetseha/ascii-reveal"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex cursor-pointer text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <AsciiReveal
        text="MAKE TEXT FEEL ALIVE"
        trigger="mount"
        direction="random"
        duration={700}
        characters="ascii"
        seed={42}
        className="font-mono text-xs tracking-[0.16em]"
      />
    </a>
  );
}
