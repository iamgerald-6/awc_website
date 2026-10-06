import Link from "next/link";
import { Container } from "../component/Container";
import { PageIntro } from "../component/PageIntro";
import { HighlightSphere } from "../component/ButtonAnime";
import { siteContent } from "../content/siteContent";

export default function CareerPage() {
  const page = siteContent.pages.career;

  return (
    <div>
      <PageIntro label="Career" title={page.title} description={page.description} />
      <section className="section-padding bg-brand-light">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold">No open roles listed yet</h2>
          <p className="mt-4 text-muted leading-relaxed">
            We welcome expressions of interest from professionals in advisory,
            analytics, engineering, and program delivery. Share your CV and area
            of expertise with our team.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/contact">
              <HighlightSphere borderColor="border-foreground">
                Get in touch
              </HighlightSphere>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
