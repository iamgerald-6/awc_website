import Link from "next/link";
import { Container } from "../component/Container";
import { SectionLabel } from "../component/SectionLabel";
import { LeadershipCards } from "../component/LeadershipCards";
import { TeamSection } from "../component/TeamSection";
import { HowWeWorkSection } from "../component/HowWeWorkSection";
import { WhoWeAreHero } from "../component/WhoWeAreHero";
import { VisionValuesGrid } from "../component/VisionValuesGrid";
import { HighlightSphere } from "../component/ButtonAnime";
import { siteContent } from "../content/siteContent";

export default function WhoWeArePage() {
  const about = siteContent.about;

  return (
    <div className="overflow-x-hidden">
      <WhoWeAreHero />

      <VisionValuesGrid />

      <HowWeWorkSection />

      <section className="bg-surface-muted text-white section-padding border-t border-white/10">
        <Container>
          <SectionLabel onDark>{about.governance.title}</SectionLabel>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {about.governance.principles.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="rounded-xl border border-white/10 bg-surface-dark/50 p-6 sm:p-8"
                >
                  <Icon className="h-10 w-10 text-accent-bright" aria-hidden />
                  <h4 className="mt-4 text-lg sm:text-xl font-semibold">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-base text-white/85 leading-relaxed">
                    {p.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <LeadershipCards />

      <TeamSection />

      <section className="section-padding bg-brand-light">
        <Container className="text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Work with AWC
          </h2>
          <p className="mt-4 text-lg text-muted">
            Discuss your program, analytics needs, or advisory mandate with our
            team.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact">
              <HighlightSphere borderColor="border-foreground">
                Contact us
              </HighlightSphere>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
