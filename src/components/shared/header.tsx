"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToogle from "../ui/theme-toggle";

const navItems = {
  Home: "/",
  Blog: "/blog",
  Work: "/work",
  About: "/about",
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav
        className="flex flex-col fade items-center md:items-start justify-start py-8 tracking-tight w-full sm:pr-0 md:pr-6 lg:pr-0"
        aria-label="Main navigation"
      >
        <div className="flex flex-row items-center">
          <Link href="/">
            <Image
              className="rounded-full"
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority={true}
            />
            <span className="sr-only">Seha Acar</span>
          </Link>

          <div className="flex flex-col ml-4">
            <span className="text-medium inline-block font-medium">
              Seha Acar
            </span>
            <span className="opacity-60">developer</span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between sm:justify-end w-full mt-8 sm:mt-4 mb-0 sm:mb-4 tracking-tight">
          <div className="inline-flex items-center">
            {Object.entries(navItems).map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  pathname === href ? "font-semibold" : "font-normal",
                  "transition-all hover:text-gray-400 dark:hover:text-white-800 flex align-middle relative py-1 px-2"
                )}
              >
                {name}
              </Link>
            ))}
          </div>
          <ThemeToogle />
        </div>
      </nav>
    </header>
  );
}
