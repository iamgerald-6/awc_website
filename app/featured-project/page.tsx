import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "../component/PageIntro";
import { projectsCatalog } from "../content/projects";

export default function FeaturedProjectPage() {
  return (
    <div>
      <PageIntro
        label="What we do"
        title="Projects"
        description="Representative engagements across development finance, blended finance, and institutional advisory—described at a high level to protect client confidentiality."
        dark
      />

      <section className="bg-surface-dark text-white border-b border-white/10">
        {Array.from(
          { length: Math.ceil(projectsCatalog.length / 3) },
          (_, rowIndex) => {
            const slice = projectsCatalog.slice(
              rowIndex * 3,
              rowIndex * 3 + 3
            );
            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x divide-white/10 border-t border-white/10 first:border-t-0"
              >
                {slice.map((p) => (
                  <div key={p.slug} className="flex flex-col">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group relative block min-h-[240px] sm:min-h-[280px] overflow-hidden aspect-[4/3] sm:aspect-auto"
                    >
                      <Image
                        src={p.cardImage}
                        alt=""
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="px-6 py-5 border-t border-white/10 flex-1">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="hover:text-accent-on-dark"
                      >
                        <h2 className="text-lg font-semibold">{p.title}</h2>
                      </Link>
                      <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
                        {p.categoryLabel}
                      </p>
                      <p className="mt-3 text-sm text-white/70 leading-relaxed">
                        {p.teaser}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          }
        )}
      </section>
    </div>
  );
}
