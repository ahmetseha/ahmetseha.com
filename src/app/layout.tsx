import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import { ThemeProvider } from "next-themes";
import Container from "@/components/shared/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://onurhan.dev"
  ),
  title: {
    default: "Ahmet Seha - Software Developer",
    template: "%s | Ahmet Seha",
  },
  description:
    "Ahmet Seha - Software Developer at Insider, focused on building comprehensive applications and micro products.",
  openGraph: {
    title: "Ahmet Seha - Software Developer",
    description:
      "Software Developer at AlışGidiş, focused on building comprehensive applications and micro products.",
    url: "https://onurhan.dev",
    siteName: "Ahmet Seha",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ahmetseha.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "Onurhan Demir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ahmet Seha",
    card: "summary_large_image",
    site: "@onurhan1337",
    creator: "@onurhan1337",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="antialiased lg:max-w-2xl md:max-w-full mx-4 mb-40 flex flex-col md:flex-row  mt-2 sm:mt-8 lg:mx-auto">
            <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Header />

              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
