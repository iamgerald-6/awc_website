import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { siteContent } from "../content/siteContent";

export function LeadershipCards() {
  const people = siteContent.about.leadership;

  return (
    <section className="bg-surface-muted text-white section-padding">
      <Container>
        <SectionLabel onDark>Leadership</SectionLabel>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl text-white/90 leading-relaxed">
          The people leading AWC’s advisory, analytics, and delivery work—with
          direct access for partnerships and engagements.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl">
          {people.map((person) => {
            const email = person.email ?? person.mail;
            const linkedin = person.linkedin ?? person.profile;

            return (
              <li
                key={person.name}
                className="flex flex-col rounded-xl border border-white/15 bg-surface-dark p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {person.name}
                </h3>
                <p className="mt-2 text-accent-on-dark font-medium text-lg">
                  {person.title}
                </p>
                <p className="mt-2 text-sm sm:text-base text-white/70">
                  {person.focus}
                </p>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/90 flex-1">
                  {person.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href={linkedin && linkedin !== "#" ? linkedin : "#"}
                    target={linkedin && linkedin !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg hover:bg-white/10 ${
                      linkedin && linkedin !== "#"
                        ? "text-accent-on-dark"
                        : "text-white/40 pointer-events-none"
                    }`}
                    aria-label={`${person.name} on LinkedIn`}
                    tabIndex={linkedin && linkedin !== "#" ? 0 : -1}
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-accent-on-dark hover:bg-white/10"
                      aria-label={`Email ${person.name}`}
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
