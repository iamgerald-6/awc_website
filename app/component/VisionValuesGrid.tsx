import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { siteContent } from "../content/siteContent";

export function VisionValuesGrid() {
  const about = siteContent.about;
  const values = about.values;

  return (
    <section className="bg-surface-dark text-white border-t border-white/10">
      <Container className="max-w-none px-0 sm:px-0 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[32rem] border-y lg:border border-white/10">
          {/* Vision — left half */}
          <div className="lg:col-span-6 section-padding lg:py-16 xl:py-20 lg:border-r border-white/10 flex flex-col justify-center">
            <div className="px-4 sm:px-6 lg:px-10 xl:px-14">
              <SectionLabel onDark>Our vision</SectionLabel>
              <h2 className="mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-snug tracking-tight">
                {about.vision}
              </h2>
              <p className="mt-8 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
                {about.howWeWork.overview}
              </p>
            </div>
          </div>

          {/* Values — 2×2 grid, ethos layout */}
          <div className="lg:col-span-6">
            <div className="lg:hidden px-6 sm:px-8 pt-10 pb-2 border-t border-white/10">
              <SectionLabel onDark>Our values</SectionLabel>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            {values.map((val, index) => {
              const Icon = val.icon;
              const isLeftCol = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <div
                  key={val.title}
                  className={[
                    "section-padding lg:py-12 xl:py-14 px-6 sm:px-8 lg:px-10 flex flex-col justify-start border-white/10",
                    isTopRow ? "border-b" : "",
                    isLeftCol ? "sm:border-r" : "",
                    index === 0 ? "border-t sm:border-t-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Icon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-accent-bright mb-6"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {val.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                    {val.body}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
