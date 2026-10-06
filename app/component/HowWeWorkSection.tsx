import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { siteContent } from "../content/siteContent";

export function HowWeWorkSection() {
  const { overview, steps } = siteContent.about.howWeWork;

  return (
    <section className="bg-surface-warm text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10">
        <div className="lg:col-span-4 section-padding border-b lg:border-b-0 border-white/10">
          <Container>
            <SectionLabel onDark>How we work</SectionLabel>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-white/90">
              {overview}
            </p>
            <p className="mt-6 text-sm uppercase tracking-widest text-accent-on-dark font-medium">
              Diagnose → Build → Deploy → Transfer
            </p>
          </Container>
        </div>

        <div className="lg:col-span-8 section-padding">
          <Container>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="group relative rounded-xl border border-white/20 bg-surface-dark/40 p-6 sm:p-8 shadow-sm transition-colors hover:border-accent-bright/50 hover:bg-surface-dark/70"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-bright/15 text-lg font-bold text-accent-on-dark ring-1 ring-accent-bright/30"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base sm:text-lg text-white/85 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  <span
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-accent-bright/0 group-hover:bg-accent-bright transition-colors hidden sm:block"
                    aria-hidden
                  />
                </li>
              ))}
            </ol>
          </Container>
        </div>
      </div>
    </section>
  );
}
