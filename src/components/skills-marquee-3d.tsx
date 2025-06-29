"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

// Professional muted colors for skills with subtle effects
const skillColors = [
  "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-gray-800/20",
  "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-slate-800/20",
  "bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 shadow-zinc-800/20",
  "bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 shadow-neutral-800/20",
  "bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 shadow-stone-800/20",
  "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-gray-800/20",
  "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-slate-800/20",
  "bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 shadow-zinc-800/20",
  "bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 shadow-neutral-800/20",
  "bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700 shadow-stone-800/20",
  "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-gray-800/20",
  "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-slate-800/20",
  "bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 shadow-zinc-800/20",
  "bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 shadow-neutral-800/20",
];

export function SkillsMarquee3D() {
  return (
    <div className="w-full overflow-hidden perspective-1000">
      <Marquee className="py-6" pauseOnHover={true} repeat={2}>
        {DATA.skills.map((skill, index) => (
          <div key={skill} className="mx-3 transform-gpu">
            <Badge
              className={cn(
                "px-6 py-3 text-sm font-bold text-gray-100 border border-gray-600 shadow-md hover:scale-102 hover:rotate-0.5 transition-all duration-200 transform-gpu whitespace-nowrap",
                "bg-opacity-100",
                skillColors[index % skillColors.length]
              )}
              style={{
                boxShadow: `0 4px 12px -2px rgba(0, 0, 0, 0.25), 0 1px 3px -1px rgba(0, 0, 0, 0.1)`,
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
