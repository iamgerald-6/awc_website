"use client";

import Image from "next/image";
import { ParallaxImage } from "./ParallaxImage";

export function ProjectGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <section className="border-t border-border grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border">
      {images.slice(0, 3).map((src) => (
        <ParallaxImage
          key={src}
          className="min-h-[240px] sm:min-h-[320px] w-full"
          strength={0.1}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </ParallaxImage>
      ))}
    </section>
  );
}
