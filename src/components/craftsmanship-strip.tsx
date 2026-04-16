import Image from "next/image";

type DetailShot = {
  src: string;
  alt: string;
  caption?: string;
};

const shots: DetailShot[] = [
  {
    src: "/images/craftsmanship/detail-1.jpg",
    alt: "Detail van massief houten werkblad met zichtbare houtnerf",
    caption: "Massief hout",
  },
  {
    src: "/images/craftsmanship/detail-2.jpg",
    alt: "Natuursteen afwerking met strak uitgelijnd voegwerk",
    caption: "Natuursteen",
  },
  {
    src: "/images/craftsmanship/detail-3.jpg",
    alt: "Metalen hardware detail op binnendeur",
    caption: "Metaalwerk",
  },
  {
    src: "/images/craftsmanship/detail-4.jpg",
    alt: "Fijn tegelwerk met millimeter-precieze voegen",
    caption: "Tegelwerk",
  },
];

export function CraftsmanshipStrip() {
  return (
    <div>
      <p className="mb-8 text-center text-sm text-[#6B6B6B] italic">
        Het verschil zit in de details die de meeste bouwers overslaan.
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {shots.map((shot) => (
          <figure
            key={shot.src}
            className="group relative aspect-square overflow-hidden rounded-sm bg-[#E8E4DD]"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
              unoptimized
            />
            {shot.caption && (
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3 text-xs font-medium text-white">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
