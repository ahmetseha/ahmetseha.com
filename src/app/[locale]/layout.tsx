import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import '../globals.css';

import { Inter as FontSans, JetBrains_Mono as FontMono } from 'next/font/google';

import { ThemeProvider } from '@/components/provider/theme-provider';
import { GridBackground } from '@/components/shared/grid-background';
import { PageHero } from '@/components/shared/page-hero';
import { TooltipProvider } from '@/components/ui/tooltip';

import { routing } from '@/i18n/navigation';
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

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Keep next-intl request state fixed for static rendering.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <GridBackground />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
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
