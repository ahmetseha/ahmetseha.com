import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import '../globals.css';

import { JetBrains_Mono as FontMono } from 'next/font/google';
import localFont from 'next/font/local';

import { GridBackground } from '@/components/shared/grid-background';
import { PageHero } from '@/components/shared/page-hero';

import { cn } from '@/lib/utils';

import { routing } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Seha Acar',
  description: "Seha Acar's personal website",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};
const fontSans = localFont({
  src: [
    {
      path: '../fonts/satoshi-variable.woff2',
      weight: '300 900',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi-variable-italic.woff2',
      weight: '300 900',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
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

  return (
    <html lang={locale} className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <GridBackground />
        <div className="relative z-10">
          <PageHero />
          {children}
        </div>
      </body>
    </html>
  );
}
