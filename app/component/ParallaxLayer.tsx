"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  /** Positive = moves slower than scroll (subtle). Typical 0.08–0.2 */
  strength?: number;
};

export function ParallaxLayer({
  children,
  className,
  strength = 0.12,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const travel = strength * 120;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
