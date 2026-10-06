import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/app/component/Container";
import { cn } from "../lib/utils";
import { SectionLabel } from "./SectionLabel";
import { ParallaxImage } from "./ParallaxImage";

type SideImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

type SectionGridProps = {
  label?: string;
  labelOnDark?: boolean;
  leftImage?: SideImage;
  rightImage?: SideImage;
  leftSlot?: ReactNode;
  children: ReactNode;
};

export function SectionGrid({
  label,
  labelOnDark = false,
  leftImage,
  rightImage,
  leftSlot,
  children,
}: SectionGridProps) {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-border">
        <div className="md:col-span-3">
          <Container className="section-padding md:py-20">
            <div className="space-y-6">
              {label && (
                <SectionLabel onDark={labelOnDark}>{label}</SectionLabel>
              )}
              {leftSlot && <div>{leftSlot}</div>}
              {leftImage && (
                <div className="relative mt-8 md:mt-16 aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg">
                  <ParallaxImage className="absolute inset-0 size-full">
                    <Image
                      src={leftImage.src}
                      alt={leftImage.alt ?? ""}
                      fill
                      priority={leftImage.priority}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </ParallaxImage>
                </div>
              )}
            </div>
          </Container>
        </div>

        <div className="md:col-span-6 border-t md:border-t-0 border-border">
          <Container className="section-padding md:py-20">{children}</Container>
        </div>

        <div className="md:col-span-3 border-t md:border-t-0 border-border">
          <Container className="section-padding md:py-20">
            {rightImage && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:mt-16">
                <ParallaxImage className="absolute inset-0 size-full">
                  <Image
                    src={rightImage.src}
                    alt={rightImage.alt ?? ""}
                    fill
                    loading="lazy"
                    className={cn("object-cover", rightImage.className)}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </ParallaxImage>
              </div>
            )}
          </Container>
        </div>
      </div>
    </section>
  );
}
