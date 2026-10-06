"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectsCatalog } from "../content/projects";
import { cn } from "../lib/utils";
import { ParallaxImage } from "./ParallaxImage";

const INITIAL_COUNT = 3;
const LOAD_STEP = 3;

function ProjectCard({
  slug,
  title,
  categoryLabel,
  image,
  className,
}: {
  slug: string;
  title: string;
  categoryLabel: string;
  image: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col border-t lg:border-t-0 border-white/10 lg:border-l first:lg:border-l-0",
        className
      )}
    >
      <Link
        href={`/projects/${slug}`}
        className="group relative block w-full overflow-hidden flex-1 min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]"
      >
        <ParallaxImage className="absolute inset-0 size-full" strength={0.12}>
          <Image
            src={image}
            alt=""
            fill
            loading="lazy"
            className="object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </ParallaxImage>
      </Link>
      <div className="px-5 sm:px-6 py-5 border-t border-white/10 bg-surface-dark">
        <Link href={`/projects/${slug}`} className="hover:text-accent-on-dark">
          <h3 className="text-base sm:text-lg font-semibold leading-snug">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/50">
          {categoryLabel}
        </p>
      </div>
    </div>
  );
}

type FeaturedProjectsSectionProps = {
  intro?: string;
};

export function FeaturedProjectsSection({ intro }: FeaturedProjectsSectionProps) {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const shown = projectsCatalog.slice(0, visible);
  const hasMore = visible < projectsCatalog.length;

  return (
    <section className="bg-surface-dark text-white overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10 border-b border-white/10">
        <div className="lg:col-span-3 flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-12 lg:py-16 min-h-[12rem] border-b lg:border-b-0 border-white/10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            Featured
            <br />
            Projects
          </h2>
          {intro ? (
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {shown.slice(0, 3).map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              categoryLabel={p.categoryLabel}
              image={p.cardImage}
            />
          ))}
        </div>
      </div>

      {visible > 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-white/10 border-b border-white/10">
          {shown.slice(3).map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              categoryLabel={p.categoryLabel}
              image={p.cardImage}
              className="lg:border-l border-white/10"
            />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="border-t border-white/10">
          <button
            type="button"
            onClick={() =>
              setVisible((v) => Math.min(v + LOAD_STEP, projectsCatalog.length))
            }
            className="w-full min-h-14 flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
