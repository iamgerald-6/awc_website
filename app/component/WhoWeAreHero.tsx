import Image from "next/image";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { whoWeAreImages } from "../content/whoWeAreImages";
import { siteContent } from "../content/siteContent";
import { ParallaxImage } from "./ParallaxImage";

export function WhoWeAreHero() {
  const about = siteContent.about;

  return (
    <section className="bg-surface-dark text-white">
      <Container className="pt-14 pb-10 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16">
        <SectionLabel onDark>Who we are</SectionLabel>
        <p className="mt-10 sm:mt-14 text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.08] tracking-tight max-w-6xl">
          {about.overview}
        </p>
        <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl font-normal">
          {about.mission}
        </p>
      </Container>
      <Container className="pb-14 sm:pb-20 lg:pb-28">
        <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-21/9 overflow-hidden">
          <ParallaxImage className="absolute inset-0 size-full">
            <Image
              src={whoWeAreImages.hero.src}
              alt={whoWeAreImages.hero.alt}
              fill
              priority
              className="object-cover object-[70%_center]"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </ParallaxImage>
        </div>
      </Container>
    </section>
  );
}
