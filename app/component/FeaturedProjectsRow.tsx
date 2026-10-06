import Image from "next/image";
import Link from "next/link";
import { homeImages } from "../content/homeImages";
import { siteContent } from "../content/siteContent";
import { cn } from "../lib/utils";
import { ParallaxImage } from "./ParallaxImage";

function ProjectImage({
  imageIndex,
  alt,
  className,
  imageClassName,
}: {
  imageIndex: number;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  const src =
    homeImages.projects[imageIndex]?.src ?? homeImages.projects[0].src;

  return (
    <Link
      href="/featured-project"
      className={cn(
        "group relative block w-full overflow-hidden",
        className
      )}
    >
      <ParallaxImage className="absolute inset-0 size-full" strength={0.12}>
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          className={cn(
            "object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            imageClassName
          )}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </ParallaxImage>
    </Link>
  );
}

function ProjectCaption({
  title,
  clientLabel,
  className,
}: {
  title: string;
  clientLabel: string;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-white/10", className)}>
      <h3 className="text-lg sm:text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-white/55">
        {clientLabel}
      </p>
    </div>
  );
}

export function FeaturedProjectsRow() {
  const projects = siteContent.home.featuredProjects;
  const intro = siteContent.home.featuredProjectsIntro;
  const spotlight = siteContent.home.featuredProjectsSpotlight;
  const [primary, secondary, tertiary] = projects;

  return (
    <section className="bg-surface-dark text-white overflow-hidden">
      {/* Row 1 — SCT grid: intro | large project | staggered project */}
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10 border-b border-white/10">
        <div className="lg:col-span-3 px-6 sm:px-8 lg:px-10 py-12 lg:py-16 xl:py-20 flex flex-col justify-start border-b lg:border-b-0 border-white/10">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight tracking-tight">
            Featured
            <br />
            Projects
          </h2>
          <p className="mt-8 text-base sm:text-lg text-white/80 leading-relaxed">
            {intro}
          </p>
        </div>

        {primary && (
          <div className="lg:col-span-6 flex flex-col border-b lg:border-b-0 border-white/10">
            <ProjectImage
              imageIndex={0}
              alt={primary.title}
              className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[440px] w-[calc(100%+1px)] max-w-none -ml-px lg:ml-0 lg:w-[calc(100%+1px)]"
            />
            <ProjectCaption
              title={primary.title}
              clientLabel={primary.clientLabel}
              className="px-6 sm:px-8 lg:px-10 py-5 lg:py-6 bg-surface-dark"
            />
          </div>
        )}

        {secondary && (
          <div className="lg:col-span-3 flex flex-col lg:pt-16 xl:pt-24 2xl:pt-28">
            <ProjectImage
              imageIndex={1}
              alt={secondary.title}
              className="relative min-h-[200px] sm:min-h-[260px] lg:min-h-[300px] w-full"
            />
            <ProjectCaption
              title={secondary.title}
              clientLabel={secondary.clientLabel}
              className="px-6 sm:px-8 py-5 lg:py-6 bg-surface-dark flex-1"
            />
          </div>
        )}
      </div>

      {/* Row 2 — spotlight image + blurb */}
      {tertiary && (
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10 border-b border-white/10">
          <div className="lg:col-span-6 flex flex-col border-b lg:border-b-0 border-white/10">
            <ProjectImage
              imageIndex={2}
              alt={tertiary.title}
              className="relative min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] w-[calc(100%+1px)] -ml-px lg:w-full lg:ml-0"
            />
            <ProjectCaption
              title={tertiary.title}
              clientLabel={tertiary.clientLabel}
              className="px-6 sm:px-8 lg:px-10 py-5 lg:py-6"
            />
          </div>
          <div className="lg:col-span-6 flex items-center px-6 sm:px-10 lg:px-12 xl:px-16 py-12 lg:py-16">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
              {spotlight}
            </p>
          </div>
        </div>
      )}

      <Link
        href="/featured-project"
        className="flex min-h-14 w-full items-center justify-center border-t border-white/10 px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/5 transition-colors"
      >
        View all projects
      </Link>
    </section>
  );
}
