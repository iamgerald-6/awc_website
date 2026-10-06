import Image from "next/image";
import { Container } from "./Container";
import { HighlightSphere } from "./ButtonAnime";
import { SectionLabel } from "./SectionLabel";

export function ProjectsGrid() {
  return (
    <section>
      <div className="grid grid-cols-12">
        {/* COL 1 — title + button */}
        <div className="col-span-12 md:col-span-3 border-r border-black/10">
          <Container className="py-20 flex flex-col justify-center space-y-6">
            <SectionLabel>Featured Projects</SectionLabel>
            {/* <div>
              <HighlightSphere
                borderColor="border-black"
                className="text-white"
              >
                View All News
              </HighlightSphere> */}
            {/* </div> */}
            <div className="mt-10">
              <p className="">
                Every project has its own complexities; we're here to simplify
                yours, whatever the scale or sector. See how we've helped others
                so far.
              </p>
            </div>
          </Container>
        </div>

        {/* COL 2 */}
        <div className="col-span-12 md:col-span-3">
          <Container className="py-20">
            <Image
              src="/images/news1.jpg"
              alt="News 1"
              width={320}
              height={200}
              className="rounded-lg object-cover"
            />
          </Container>
        </div>

        {/* COL 3 */}
        <div className="col-span-12 md:col-span-3 border-l border-black/10">
          <Container className="py-20">
            <Image
              src="/images/news2.jpg"
              alt="News 2"
              width={320}
              height={200}
              className="rounded-lg object-cover"
            />
          </Container>
        </div>

        {/* COL 4 */}
        <div className="col-span-12 md:col-span-3 border-l border-black/10">
          <Container className="py-20">
            <Image
              src="/images/news3.jpg"
              alt="News 3"
              width={320}
              height={200}
              className="rounded-lg object-cover"
            />
          </Container>
        </div>
      </div>
    </section>
  );
}
