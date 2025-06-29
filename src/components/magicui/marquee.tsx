"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 1,
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const containerRect = container.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();

    const containerSize = vertical ? containerRect.height : containerRect.width;
    const contentSize = vertical ? contentRect.height : contentRect.width;

    const duration = contentSize / 50; // Adjust speed here

    container.style.setProperty("--duration", `${duration}s`);
    container.style.setProperty("--content-size", `${contentSize}px`);
  }, [vertical]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        vertical ? "h-full" : "w-full",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex",
          vertical ? "flex-col" : "flex-row",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          isHovered && "animation-paused"
        )}
        style={
          {
            "--duration": "20s",
            "--content-size": "100%",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

// Add these animations to your globals.css or tailwind config
const marqueeStyles = `
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--content-size)));
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(calc(-1 * var(--content-size)));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-1 * var(--content-size)));
  }
}

@keyframes marquee-vertical-reverse {
  0% {
    transform: translateY(calc(-1 * var(--content-size)));
  }
  100% {
    transform: translateY(0);
  }
}

.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse var(--duration) linear infinite;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

.animate-marquee-vertical-reverse {
  animation: marquee-vertical-reverse var(--duration) linear infinite;
}

.animation-paused {
  animation-play-state: paused;
}
`;
