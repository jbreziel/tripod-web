import Image from "next/image";
import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

type ProjectCard = {
  slug: string;
  title: string;
  oneLine: string;
  image: string;
  neighborhood: string;
  wip?: boolean;
};

const projects: ProjectCard[] = [
  {
    slug: "willem-van-de-veldekade",
    title: "Renovatie Willem van de Veldekade",
    oneLine:
      "Volledige renovatie van een tussenwoning in Heemstede — maatwerk keuken en badkamer, eikenhout door de hele woning.",
    image: "/images/portfolio/willem-van-de-veldekade/hero.jpg",
    neighborhood: "Heemstede",
  },
  {
    slug: "nieuwdammerdijk",
    title: "Renovatie Nieuwdammerdijk",
    oneLine:
      "Grondige renovatie van een ruime woning in Amsterdam Noord — herontwerp van de indeling, open keuken als hart.",
    image: "/images/portfolio/nieuwdammerdijk/hero.jpg",
    neighborhood: "Amsterdam Noord",
  },
  {
    slug: "zsw-haarlem",
    title: "Boerderijrenovatie Haarlem",
    oneLine:
      "Bestaande boerderij van 633 m² opgesplitst in twee zelfstandige woningen — staalconstructie in bestaand metselwerk, warmtepomp-installatie.",
    image: "/images/portfolio/zsw-haarlem/hero.jpg",
    neighborhood: "Haarlem",
    wip: true,
  },
];

export function PortfolioTeaser() {
  return (
    <div>
      <div className="mb-12 max-w-3xl">
        <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
          Recente projecten.
        </h2>
        <p className="text-lg text-[#6B6B6B]">
          Elk project vraagt om andere keuzes. Hier een paar voorbeelden van wat dat in de praktijk
          betekent.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={{ pathname: "/projecten/[slug]", params: { slug: project.slug } }}
            className="group block overflow-hidden rounded-sm border border-[#E8E4DD] bg-[#FAFAF7] transition-all hover:border-[#C14B2D] hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E4DD]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized
              />
              {project.wip && (
                <span className="absolute right-3 bottom-3 rounded-sm bg-[#C14B2D] px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#FAFAF7]">
                  In uitvoering
                </span>
              )}
            </div>
            <div className="p-6">
              <p className="mb-2 text-xs uppercase tracking-wider text-[#6B6B6B]">
                {project.neighborhood}
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-[#6B6B6B] leading-relaxed">{project.oneLine}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#C14B2D]">
                Bekijk project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projecten"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#C14B2D] hover:text-[#A83A1E]"
        >
          Alle projecten
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
