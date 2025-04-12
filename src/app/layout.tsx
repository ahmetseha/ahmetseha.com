import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

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
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <Navigation />
          </div>
        </header>
        <main className="container py-8 max-w-5xl mx-auto">{children}</main>
        <footer className="border-t py-6 mt-16">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahmet Seha. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ahmetseha"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:contact@ahmetseha.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                E-posta
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
