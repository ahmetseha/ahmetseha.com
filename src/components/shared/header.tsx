"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToogle from "../ui/theme-toggle";

const navItems = {
  About: "/",
  Work: "/work",
  Components: "/components",
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
      </nav>
    </header>
  );
}
