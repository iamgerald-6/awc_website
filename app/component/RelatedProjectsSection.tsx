"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectRecord } from "../content/projects";
import { ParallaxImage } from "./ParallaxImage";

function RelatedCard({ project }: { project: ProjectRecord }) {
  return (
    <div className="flex flex-col border-t lg:border-t-0 border-white/10 lg:border-l first:lg:border-l-0">
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block w-full overflow-hidden flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]"
      >
        <ParallaxImage className="absolute inset-0 size-full" strength={0.12}>
          <Image
            src={project.cardImage}
            alt=""
            fill
            loading="lazy"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </ParallaxImage>
      </Link>
      <div className="px-5 sm:px-6 py-5 border-t border-white/10">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-accent-on-dark"
        >
          <h3 className="text-base sm:text-lg font-semibold leading-snug">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/50">
          {project.categoryLabel}
        </p>
      </div>
    </div>
  );
}

export function RelatedProjectsSection({
  projects,
}: {
  projects: ProjectRecord[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-surface-dark text-white border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10">
        <div className="lg:col-span-3 flex items-center px-6 sm:px-8 lg:px-10 py-12 lg:py-16 min-h-[10rem] border-b lg:border-b-0 border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
            Related
            <br />
            Projects
          </h2>
        </div>
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <RelatedCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
