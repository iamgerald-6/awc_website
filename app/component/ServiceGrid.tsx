import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/app/component/Container";
import { cn } from "../lib/utils";
import { SectionLabel } from "./SectionLabel";

type SideImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

type ServiceGridProps = {
  label?: string;
  description?: string;
  leftImage?: SideImage;
  rightImage?: SideImage;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  children: ReactNode;
};

export function ServiceGrid({
  label,
  description,
  leftImage,
  rightImage,
  rightSlot,
  leftSlot,
  children,
}: ServiceGridProps) {
  return (
    <section className="border-b border-border overflow-hidden">
      <div className="grid grid-cols-12">
        {/* LEFT COLUMN */}
        <div className="hidden md:block col-span-3 border-r border-black/10">
          <Container className="py-10">
            <div className="space-y-6">
              {label && <SectionLabel onDark>{label}</SectionLabel>}

              {leftSlot && <div>{leftSlot}</div>}
              {leftImage && (
                <div className="mt-10">
                  <Image
                    src={leftImage.src}
                    alt={leftImage.alt ?? ""}
                    width={leftImage.width ?? 500}
                    height={leftImage.height ?? 200}
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </Container>
        </div>

        {/* CENTER COLUMN */}
        <div className="col-span-12 md:col-span-4">
          <Container className="py-10">{children}</Container>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block col-span-5 border-l border-black/10">
          <div className="py-20">
            {rightSlot ? (
              <div className="mt-20 ">{rightSlot}</div>
            ) : (
              rightImage && (
                <div className="mt-10">
                  <Image
                    src={rightImage.src}
                    alt={rightImage.alt ?? ""}
                    width={rightImage.width ?? 300}
                    height={rightImage.height ?? 200}
                    className={cn(
                      "object-cover rounded-lg",
                      rightImage.className
                    )}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
