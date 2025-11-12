import type { Metadata } from 'next';

import './globals.css';

import { Inter as FontSans } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from '@/components/provider/theme-provider';
import { PageHero } from '@/components/shared/page-hero';

import './globals.css';

import { TooltipProvider } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Seha Acar',
  description: "Seha Acar's personal website",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
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
          'min-h-screen bg-background font-sans antialiased',
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
            <PageHero />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
