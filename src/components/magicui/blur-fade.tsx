import type { CSSProperties, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

type BlurFadeStyle = CSSProperties & {
  '--blur-fade-delay': string;
  '--blur-fade-duration': string;
  '--blur-fade-offset': string;
  '--blur-fade-blur': string;
};

/**
 * A CSS-only entrance effect. Content is server-rendered and immediately
 * readable; the animation no longer waits for React hydration.
 */
export default function BlurFade({
  children,
  className,
  duration = 0.26,
  delay = 0,
  yOffset = 6,
  blur = '4px',
}: BlurFadeProps) {
  const style: BlurFadeStyle = {
    '--blur-fade-delay': `${Math.min(delay, 0.12)}s`,
    '--blur-fade-duration': `${duration}s`,
    '--blur-fade-offset': `${yOffset}px`,
    '--blur-fade-blur': blur,
  };

  return (
    <div className={cn('blur-fade', className)} style={style}>
      {children}
    </div>
  );
}
