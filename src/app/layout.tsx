import type { Metadata } from 'next';

import './globals.css';

import { Inter as FontSans } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from '@/components/provider/theme-provider';
import { TopHeader } from '@/components/shared/top-header';

import './globals.css';

import PageTransition from '@/components/shared/page-transition';
import { TooltipProvider } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Seha Acar',
  description: "Seha Acar's personal website",
};
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 pt-24 sm:pt-32 pb-32 sm:pb-24',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="theme"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <TopHeader />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
