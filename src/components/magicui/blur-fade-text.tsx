import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';

interface BlurFadeTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

type BlurFadeTextStyle = CSSProperties & {
  '--blur-fade-delay': string;
  '--blur-fade-duration': string;
  '--blur-fade-offset': string;
  '--blur-fade-blur': string;
};

export default function BlurFadeText({
  text,
  className,
  containerClassName,
  containerStyle,
  duration = 0.26,
  delay = 0,
  yOffset = 8,
}: BlurFadeTextProps) {
  const style: BlurFadeTextStyle = {
    ...containerStyle,
    '--blur-fade-delay': `${Math.min(delay, 0.12)}s`,
    '--blur-fade-duration': `${duration}s`,
    '--blur-fade-offset': `${yOffset}px`,
    '--blur-fade-blur': '4px',
  };

  return (
    <div className={cn('flex', containerClassName)} style={style}>
      <span className={cn('blur-fade inline-block', className)}>{text}</span>
    </div>
  );
}
