"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

// Colorful background colors for skills
const skillColors = [
  "bg-gradient-to-r from-blue-500 to-cyan-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-green-500 to-emerald-500",
  "bg-gradient-to-r from-orange-500 to-red-500",
  "bg-gradient-to-r from-indigo-500 to-purple-500",
  "bg-gradient-to-r from-teal-500 to-blue-500",
  "bg-gradient-to-r from-pink-500 to-rose-500",
  "bg-gradient-to-r from-yellow-500 to-orange-500",
  "bg-gradient-to-r from-cyan-500 to-teal-500",
  "bg-gradient-to-r from-violet-500 to-purple-500",
  "bg-gradient-to-r from-emerald-500 to-green-500",
  "bg-gradient-to-r from-rose-500 to-pink-500",
  "bg-gradient-to-r from-blue-500 to-indigo-500",
  "bg-gradient-to-r from-orange-500 to-yellow-500",
];

export function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden">
      <Marquee className="py-4" pauseOnHover={true} repeat={2}>
        {DATA.skills.map((skill, index) => (
          <div key={skill} className="mx-2">
            <Badge
              className={cn(
                "px-4 py-2 text-sm font-medium text-white border-0 shadow-lg hover:scale-105 transition-transform duration-200 whitespace-nowrap",
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
