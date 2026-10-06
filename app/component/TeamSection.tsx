import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { siteContent } from "../content/siteContent";

export function TeamSection() {
  const team = siteContent.about.team;

  return (
    <section className="section-padding bg-background border-t border-border">
      <Container>
        <SectionLabel>Our team</SectionLabel>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted leading-relaxed">
          Specialists across financial services advisory, transaction support,
          and analytics—working together on integrated client mandates.
        </p>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {team.map((member) => (
            <li
              key={member.name}
              className="bg-surface p-6 sm:p-8 flex flex-col justify-center min-h-[8.5rem]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-accent font-medium leading-snug">
                {member.title}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
