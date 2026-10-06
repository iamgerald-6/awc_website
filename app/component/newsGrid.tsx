import Link from "next/link";
import { Container } from "./Container";
import { HighlightSphere } from "./ButtonAnime";
import { SectionLabel } from "./SectionLabel";

type NewsGridProps = {
  showViewAll?: boolean;
  /** Full-width empty state for /news */
  emptyOnly?: boolean;
};

export function NewsGrid({
  showViewAll = true,
  emptyOnly = false,
}: NewsGridProps) {
  return (
    <section className="overflow-hidden border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-border">
        {!emptyOnly && (
          <div className="lg:col-span-3">
            <Container className="section-padding flex flex-col justify-center space-y-6">
              <SectionLabel>News</SectionLabel>
              {showViewAll && (
                <Link href="/news" className="inline-block min-h-11">
                  <HighlightSphere borderColor="border-foreground">
                    View all news
                  </HighlightSphere>
                </Link>
              )}
            </Container>
          </div>
        )}

        <div
          className={
            emptyOnly
              ? "col-span-full"
              : "lg:col-span-9 border-t lg:border-t-0 border-border"
          }
        >
          <Container className="section-padding">
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
              There are no news articles published at the moment. Check back
              soon for firm announcements and insights.
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
}
