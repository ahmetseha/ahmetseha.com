"use client";

import {
  CodeXmlIcon,
  HomeIcon,
  MailIcon,
  BriefcaseIcon,
  XIcon,
  LinkedinIcon,
  GithubIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import ThemeToogle from "../ui/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  email: MailIcon,
  projects: CodeXmlIcon,
};

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    { href: "/projects", icon: CodeXmlIcon, label: "Projects" },
    { href: "/work", icon: BriefcaseIcon, label: "Work" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahmetseha",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmetseha/",
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/sehaacar",
        icon: Icons.x,
      },
    },
  },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 mx-auto mt-4 flex origin-top h-full max-h-14">
      <div className="fixed top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-background"></div>
      <Dock
        className={cn(
          "z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1",
          "bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 shadow-xl",
          "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] transition-all duration-300 ease-in-out w-full justify-between",
          isScrolled ? "max-w-4xl" : "w-auto"
        )}
      >
        <div className="flex flex-1 gap-2 items-center">
          {DATA.navbar.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: isScrolled ? undefined : "icon",
                    }),
                    isScrolled
                      ? "flex items-center gap-2 px-3 h-12 rounded-full w-auto"
                      : "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                  {isScrolled && (
                    <span className="text-sm font-medium hidden sm:inline-block">
                      {item.label}
                    </span>
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <Separator orientation="vertical" className="h-full mx-2" />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2 mx-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeToogle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
