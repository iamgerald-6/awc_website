"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { HighlightSphere } from "./ButtonAnime";
import { cn } from "../lib/utils";
import type { ProductLineItem } from "../lib/productLines";
import { siteContent } from "../content/siteContent";
import { ParallaxImage } from "./ParallaxImage";

type WhatWeDoExplorerProps = {
  items: ProductLineItem[];
  showFeatures?: boolean;
  showServicesLink?: boolean;
  sideImage?: { src: string; alt: string };
  sectionLabel?: string;
};

export function WhatWeDoExplorer({
  items,
  showFeatures = false,
  showServicesLink = true,
  sideImage,
  sectionLabel = "What we do",
}: WhatWeDoExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const intro = siteContent.adsProductsAndServices.intro;

  return (
    <section className="bg-surface-warm text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10">
        <div className="lg:col-span-3 section-padding border-b lg:border-b-0 border-white/10">
          <Container>
            <SectionLabel onDark>{sectionLabel}</SectionLabel>
            <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed">
              {intro}
            </p>
            {sideImage && (
              <div className="relative mt-8 hidden xl:block aspect-[4/3] w-full max-w-xs overflow-hidden rounded-lg ring-1 ring-white/15">
                <ParallaxImage className="absolute inset-0 size-full">
                  <Image
                    src={sideImage.src}
                    alt={sideImage.alt}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </ParallaxImage>
              </div>
            )}
          </Container>
        </div>

        <div className="lg:col-span-4 section-padding border-b lg:border-b-0 border-white/10">
          <Container className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
              Select a practice
            </p>
            {items.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIndex === i;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "flex w-full min-h-11 items-start gap-4 rounded-xl border p-4 sm:p-5 text-left transition-colors",
                    isActive
                      ? "border-accent-bright bg-surface-dark/80 shadow-md"
                      : "border-white/15 bg-surface-dark/30 hover:border-white/30 hover:bg-surface-dark/50"
                  )}
                  aria-pressed={isActive}
                >
                  <Icon
                    className={cn(
                      "h-8 w-8 shrink-0 mt-0.5",
                      isActive ? "text-accent-on-dark" : "text-white/50"
                    )}
                    aria-hidden
                  />
                  <span className="flex-1 min-w-0">
                    <span
                      className={cn(
                        "block text-sm sm:text-base font-semibold leading-snug",
                        isActive ? "text-white" : "text-white/80"
                      )}
                    >
                      {item.name}
                    </span>
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 shrink-0 mt-1 transition-transform",
                      isActive
                        ? "text-accent-on-dark translate-x-0.5"
                        : "text-white/30"
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </Container>
        </div>

        <div className="lg:col-span-5 section-padding bg-black/15">
          <Container>
            <div className="rounded-xl border border-white/15 bg-surface-dark/50 p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                {active.name}
              </h3>
              <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
                {active.description}
              </p>

              {showFeatures && active.features.length > 0 && (
                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-on-dark mb-4">
                    Capabilities
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {active.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm sm:text-base text-white/90 leading-snug"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {showServicesLink && (
                <div className="mt-10">
                  <Link href="/services">
                    <HighlightSphere
                      borderColor="border-white"
                      textColor="text-white"
                    >
                      Explore all services
                    </HighlightSphere>
                  </Link>
                </div>
              )}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
