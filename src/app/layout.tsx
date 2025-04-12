import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "next-themes"

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <Navigation />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border bg-background">
            <div className="container flex h-16 items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © 2024 Ahmet Seha. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
