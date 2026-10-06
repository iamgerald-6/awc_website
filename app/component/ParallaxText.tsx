"use client";

import { ParallaxLayer } from "./ParallaxLayer";
import type { ReactNode } from "react";

export function ParallaxText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ParallaxLayer strength={0.08} className={className}>
      {children}
    </ParallaxLayer>
  );
}
