import Image from "next/image";

type ProjectDetailHeroProps = {
  title: string;
  image: string;
};

export function ProjectDetailHero({ title, image }: ProjectDetailHeroProps) {
  return (
    <section className="relative min-h-[42vh] sm:min-h-[50vh] lg:min-h-[58vh] flex items-center justify-center overflow-hidden bg-surface-dark">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <h1 className="relative z-10 px-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-5xl">
        {title}
      </h1>
    </section>
  );
}
