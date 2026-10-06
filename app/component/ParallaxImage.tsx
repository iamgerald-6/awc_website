"use client";

import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { subscribeParallax } from "../lib/parallaxScroll";
import { cn } from "../lib/utils";

type ParallaxImageProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function ParallaxImage({
  children,
  className,
  strength = 0.45,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const y = useMotionValue(0);

  useEffect(() => {
    if (reduce) return;

    const maxPx = 18 + strength * 28;

    return subscribeParallax(() => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const vh = window.innerHeight;
      const centerY = rect.top + rect.height * 0.5;
      const progress = (centerY - vh * 0.5) / (vh * 0.5 + rect.height * 0.5);
      const clamped = Math.max(-1, Math.min(1, progress));
      y.set(-clamped * maxPx);
    });
  }, [reduce, strength, y]);

  const media = (
    <div className="relative size-full min-h-[inherit]">{children}</div>
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {reduce ? (
        <div className="absolute inset-0">{media}</div>
      ) : (
        <motion.div
          className="absolute inset-x-0 top-[-10%] h-[120%] will-change-transform"
          style={{ y }}
        >
          {media}
        </motion.div>
      )}
    </div>
  );
}
