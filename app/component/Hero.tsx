"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/component/Container";
import { HighlightSphere } from "./ButtonAnime";

type HeroProps = {
  headline: string;
  subhead?: string;
  cta: {
    label: string;
    href: string;
  };
  backgroundImage: string;
  backgroundAlt?: string;
};

export function Hero({
  headline,
  subhead,
  cta,
  backgroundImage,
  backgroundAlt = "",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] md:min-h-[85vh] border-b border-border">
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        className="-z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="grid grid-cols-12">
        <div className="hidden sm:block col-span-2 md:col-span-3 border-r border-white/10">
          <div className="py-14 sm:py-20" />
        </div>

        <div className="col-span-12 sm:col-span-8 md:col-span-6">
          <Container className="py-14 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:min-h-[70vh] flex flex-col lg:text-left"
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {headline}
              </h1>

              {subhead && (
                <p className="mt-5 max-w-xl text-base sm:text-xl text-gray-200">
                  {subhead}
                </p>
              )}

              <div className="mt-8">
                <Link href={cta.href}>
                  <HighlightSphere textColor="text-white">
                    {cta.label}
                  </HighlightSphere>
                </Link>
              </div>
            </motion.div>
          </Container>
        </div>

        <div className="hidden sm:block col-span-2 md:col-span-3 border-l border-white/10">
          <div className="py-14 sm:py-20" />
        </div>
      </div>
    </section>
  );
}
