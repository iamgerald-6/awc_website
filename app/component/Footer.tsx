import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/app/content/siteContent";
import { Container } from "./Container";
import { toTelHref } from "@/app/lib/utils";
import { flattenNav } from "@/app/lib/nav";

export function Footer() {
  const c = siteContent.contact;
  const quickLinks = flattenNav(siteContent.nav);

  return (
    <footer className="bg-surface border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-5 md:border-r border-border">
          <Container className="py-12 space-y-4">
            <Image
              src={siteContent.brand.logo.src}
              alt={siteContent.brand.logo.alt}
              width={170}
              height={56}
            />
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {c.sublime}
              </p>
            </div>
          </Container>
        </div>

        <div className="md:col-span-4 border-t md:border-t-0 border-border">
          <Container className="py-12">
            <div className="grid gap-2 text-sm">
              <p className="font-semibold text-brand-dark">Contact</p>

              <p className="text-brand-gray">{c.locationAddress}</p>
              <p className="text-brand-gray">Postal: {c.postalAddress}</p>

              <p className="text-brand-gray">
                Email:{" "}
                <a
                  className="font-medium text-brand-dark hover:underline min-h-11 inline-flex items-center"
                  href={`mailto:${c.email}`}
                >
                  {c.email}
                </a>
              </p>

              <p className="text-brand-gray">
                Tel:{" "}
                {c.phones.map((p, i) => (
                  <span key={p}>
                    <a
                      className="font-medium text-brand-dark hover:underline"
                      href={toTelHref(p)}
                    >
                      {p}
                    </a>
                    {i < c.phones.length - 1 ? " / " : ""}
                  </span>
                ))}
              </p>
            </div>
          </Container>
        </div>

        <div className="md:col-span-3 md:border-l border-border border-t md:border-t-0">
          <Container className="py-12">
            <div className="grid gap-2 text-sm">
              <p className="font-semibold text-brand-dark">Quick links</p>

              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-brand-gray hover:text-brand-dark hover:underline min-h-11 inline-flex items-center"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-brand-gray hover:text-brand-dark hover:underline min-h-11 inline-flex items-center"
              >
                Contact us
              </Link>
            </div>
          </Container>
        </div>
      </div>

      <div className="border-t border-border">
        <Container className="py-6">
          <div className="flex flex-col gap-2 text-xs text-brand-gray md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {siteContent.brand.name}. All rights
              reserved.
            </p>
            <p>Asamoah and Williams Consulting</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
