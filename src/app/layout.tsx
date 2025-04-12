import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/lib/theme-context"
import { ThemeProvider as NextThemeProvider } from "next-themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ahmet Seha",
  description: "Personal website of Ahmet Seha",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-200`}
      >
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeProvider>
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
              <div className="container flex h-16 items-center">
                <Navigation />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="container flex h-16 items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2024 Ahmet Seha. All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
