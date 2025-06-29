"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

// Colorful background colors for skills with 3D effects
const skillColors = [
  "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 shadow-blue-500/50",
  "bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 shadow-purple-500/50",
  "bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 shadow-green-500/50",
  "bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 shadow-orange-500/50",
  "bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-600 shadow-indigo-500/50",
  "bg-gradient-to-r from-teal-500 via-blue-400 to-teal-600 shadow-teal-500/50",
  "bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 shadow-pink-500/50",
  "bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 shadow-yellow-500/50",
  "bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-600 shadow-cyan-500/50",
  "bg-gradient-to-r from-violet-500 via-purple-400 to-violet-600 shadow-violet-500/50",
  "bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 shadow-emerald-500/50",
  "bg-gradient-to-r from-rose-500 via-pink-400 to-rose-600 shadow-rose-500/50",
  "bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600 shadow-blue-500/50",
  "bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 shadow-orange-500/50",
];

export function SkillsMarquee3D() {
  return (
    <div className="w-full overflow-hidden perspective-1000">
      <Marquee className="py-6" pauseOnHover={true} repeat={2}>
        {DATA.skills.map((skill, index) => (
          <div key={skill} className="mx-3 transform-gpu">
            <Badge
              className={cn(
                "px-6 py-3 text-sm font-bold text-white border-0 shadow-xl hover:scale-110 hover:rotate-2 transition-all duration-300 transform-gpu whitespace-nowrap",
                "backdrop-blur-sm bg-opacity-90",
                skillColors[index % skillColors.length]
              )}
              style={{
                boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)`,
              }}
            >
              {skill}
            </Badge>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
