import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDetailHero } from "@/app/component/ProjectDetailHero";
import { ProjectGallery } from "@/app/component/ProjectGallery";
import { RelatedProjectsSection } from "@/app/component/RelatedProjectsSection";
import {
  getProjectBySlug,
  getRelatedProjects,
  projectsCatalog,
} from "@/app/content/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectsCatalog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} | AWC`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);

  return (
    <div className="overflow-x-hidden">
      <ProjectDetailHero title={project.title} image={project.heroImage} />

      <section className="border-b border-border grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border bg-background">
        <div className="px-6 sm:px-8 py-8">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted">
            Service
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed">
            {project.services.join(", ")}
          </p>
        </div>
        <div className="px-6 sm:px-8 py-8">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted">
            Duration
          </p>
          <p className="mt-3 text-sm sm:text-base">{project.duration}</p>
        </div>
        <div className="px-6 sm:px-8 py-8">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted">
            Location
          </p>
          <p className="mt-3 text-sm sm:text-base">{project.location}</p>
        </div>
      </section>

      <section className="border-b border-border grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-border">
        <div className="lg:col-span-5 px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent-on-light leading-tight">
            {project.title}
          </h2>
        </div>
        <div className="lg:col-span-7 px-6 sm:px-8 lg:px-10 py-12 lg:py-16 border-t lg:border-t-0 border-border">
          <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
            {project.summary}
          </p>
          <blockquote className="mt-10 border-l-2 border-accent pl-6 text-muted italic text-base sm:text-lg">
            {project.teaser}
          </blockquote>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-6 text-base sm:text-lg text-muted leading-relaxed">
          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {project.galleryImages && project.galleryImages.length > 0 && (
        <ProjectGallery images={project.galleryImages} />
      )}

      <RelatedProjectsSection projects={related} />

      <div className="flex border-t border-border">
        <Link
          href="/featured-project"
          className="flex-1 min-h-14 flex items-center justify-center px-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] hover:bg-brand-light transition-colors"
        >
          All projects
        </Link>
        <Link
          href="/contact"
          className="flex-1 min-h-14 flex items-center justify-center px-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-surface-dark text-white hover:bg-surface-muted transition-colors border-l border-border"
        >
          Discuss your project
        </Link>
      </div>
    </div>
  );
}
