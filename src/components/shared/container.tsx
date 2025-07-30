import React from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Container({ children, size, className }: ContainerProps) {
  return (
    <div
      className={cn(
        `mx-auto px-4 sm:px-6 w-full lg:px-8 sm:max-w-screen-${size || 'lg'}`,
        className
      )}
    >
      {children}
    </div>
  );
}
