import type { Metadata } from 'next';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '../globals.css';

import { Inter as FontSans } from 'next/font/google';

import { ThemeProvider } from '@/components/provider/theme-provider';
import { GridBackground } from '@/components/shared/grid-background';
import { PageHero } from '@/components/shared/page-hero';
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          fontSans.variable
        )}
      >
        <GridBackground />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="theme"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              <div className="relative z-10">
                <PageHero />
                {children}
              </div>
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
