import { Container } from "../component/Container";
import { PageIntro } from "../component/PageIntro";
import { siteContent } from "../content/siteContent";
import { toTelHref } from "../lib/utils";

export default function ContactPage() {
  const c = siteContent.contact;

  return (
    <div>
      <PageIntro label="Contact" title={c.headline} description={c.intro} />

      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            <div className="space-y-6 text-lg">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-on-light">
                  Office
                </h2>
                <p className="mt-2 text-muted">{c.locationAddress}</p>
                <p className="text-muted">Postal: {c.postalAddress}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-on-light">
                  Email
                </h2>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-2 inline-block font-medium text-brand-dark hover:underline min-h-11 leading-[2.75rem]"
                >
                  {c.email}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-on-light">
                  Phone
                </h2>
                <ul className="mt-2 space-y-2">
                  {c.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={toTelHref(phone)}
                        className="font-medium text-brand-dark hover:underline min-h-11 inline-flex items-center"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-brand-light p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Send a message</h2>
              <p className="mt-2 text-sm text-muted">
                Form integration can be added later. For now, please email us
                directly.
              </p>
              <a
                href={`mailto:${c.email}?subject=Website%20inquiry`}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90 w-full sm:w-auto"
              >
                Email {siteContent.brand.name}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
