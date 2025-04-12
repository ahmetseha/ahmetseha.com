import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
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
  title: "Ahmet Seha",
  description: "Personal website of Ahmet Seha",
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
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container
              size="large"
              className="prose prose-zinc dark:prose-invert container animate-enter"
            >
              <div className="flex h-16 items-center">
                <Navigation />
              </div>
            </Container>
          </header>
          <main className="flex-1">
            <Container
              size="large"
              className="prose prose-zinc dark:prose-invert container animate-enter"
            >
              {children}
            </Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
