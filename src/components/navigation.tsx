"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Anasayfa", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Hakkımda", href: "/about" },
  { name: "Yer İmleri", href: "/bookmarks" },
  { name: "Work", href: "/work" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="font-bold text-xl text-black dark:text-white">
        AS
      </Link>
      <nav className="flex items-center space-x-6">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
              pathname === item.href
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            {item.name}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  )
}
