'use client';

import ThemeToogle from '@/components/ui/theme-toggle';

export function TopHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4">
      <div className="text-sm font-medium text-foreground"></div>
      <div className="flex items-center space-x-2">
        <ThemeToogle />
      </div>
    </div>
  );
}
