"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const DIGITS = "0123456789";

function scrambleFrame(finalValue: string) {
  return finalValue
    .split("")
    .map((char) => {
      if (char >= "0" && char <= "9") {
        return DIGITS[Math.floor(Math.random() * DIGITS.length)];
      }
      return char;
    })
    .join("");
}

function placeholderForValue(value: string) {
  return value.replace(/[0-9]/g, "0");
}

type ScrambleStatProps = {
  value: string;
  className?: string;
};

export function ScrambleStat({ value, className }: ScrambleStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(() => placeholderForValue(value));
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed >= duration) {
        setDisplay(value);
        return;
      }
      setDisplay(scrambleFrame(value));
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, reducedMotion]);

  return (
    <p ref={ref} className={className} aria-label={value}>
      {display}
    </p>
  );
}
