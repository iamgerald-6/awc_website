import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function PageIntro({
  label,
  title,
  description,
  dark = false,
}: PageIntroProps) {
  return (
    <section
      className={
        dark
          ? "bg-surface-dark text-white border-b border-white/10"
          : "bg-background border-b border-border"
      }
    >
      <Container className="section-padding max-w-3xl">
        <SectionLabel onDark={dark}>{label}</SectionLabel>
        <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {description && (
          <p
            className={`mt-6 text-lg leading-relaxed ${
              dark ? "text-white/85" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
