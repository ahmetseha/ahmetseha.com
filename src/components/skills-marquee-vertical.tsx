"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

// Colorful background colors for skills
const skillColors = [
  "bg-gradient-to-b from-blue-500 to-cyan-500",
  "bg-gradient-to-b from-purple-500 to-pink-500",
  "bg-gradient-to-b from-green-500 to-emerald-500",
  "bg-gradient-to-b from-orange-500 to-red-500",
  "bg-gradient-to-b from-indigo-500 to-purple-500",
  "bg-gradient-to-b from-teal-500 to-blue-500",
  "bg-gradient-to-b from-pink-500 to-rose-500",
  "bg-gradient-to-b from-yellow-500 to-orange-500",
  "bg-gradient-to-b from-cyan-500 to-teal-500",
  "bg-gradient-to-b from-violet-500 to-purple-500",
  "bg-gradient-to-b from-emerald-500 to-green-500",
  "bg-gradient-to-b from-rose-500 to-pink-500",
  "bg-gradient-to-b from-blue-500 to-indigo-500",
  "bg-gradient-to-b from-orange-500 to-yellow-500",
];

export function SkillsMarqueeVertical() {
  return (
    <div className="w-full h-64 overflow-hidden">
      <Marquee
        className="h-full"
        vertical={true}
        pauseOnHover={true}
        repeat={3}
      >
        {DATA.skills.map((skill, index) => (
          <div key={skill} className="my-2">
            <Badge
              className={cn(
                "px-4 py-2 text-sm font-medium text-white border-0 shadow-lg hover:scale-105 transition-transform duration-200 w-full text-center whitespace-nowrap",
                skillColors[index % skillColors.length]
              )}
            >
              {skill}
            </Badge>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
