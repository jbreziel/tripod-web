import Image from "next/image";
import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

type ProjectCard = {
  slug: string;
  title: string;
  oneLine: string;
  image: string;
  neighborhood: string;
};

const projects: ProjectCard[] = [
  {
    slug: "celsiusstraat",
    title: "Renovatie Celsiusstraat 44-I",
    oneLine:
      "Volledige renovatie van een jaren-30 benedenwoning in Amsterdam Oud-West — karakter behouden, installaties vernieuwd.",
    image: "/images/portfolio/celsiusstraat/hero.jpg",
    neighborhood: "Amsterdam Oud-West",
  },
  {
    slug: "crynssenstraat",
    title: "Renovatie Crynssenstraat 53-III",
    oneLine:
      "Complete bovenwoningrenovatie in Oud-West, met een badkamer die de toon zet voor het hele huis.",
    image: "/images/portfolio/crynssenstraat/hero.jpg",
    neighborhood: "Amsterdam Oud-West",
  },
  {
    slug: "nieuwdammerdijk",
    title: "Renovatie Nieuwdammerdijk",
    oneLine:
      "Grondige renovatie van een ruime woning in Amsterdam Noord — herontwerp van de indeling, open keuken als hart.",
    image: "/images/portfolio/nieuwdammerdijk/hero.jpg",
    neighborhood: "Amsterdam Noord",
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
