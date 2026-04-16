import Image from "next/image";
import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  slug: string;
  title: string;
  neighborhood: string;
  subtitle: string;
  image?: string;
  featured?: boolean;
};

export function ProjectCard({
  slug,
  title,
  neighborhood,
  subtitle,
  image,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={{ pathname: "/projecten/[slug]", params: { slug } }}
      className="group block overflow-hidden rounded-sm border border-[#E8E4DD] bg-[#FAFAF7] transition-all hover:border-[#C14B2D] hover:shadow-md"
    >
      <div
        className={`relative overflow-hidden bg-[#E8E4DD] ${
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={image ?? `/images/portfolio/${slug}/hero.jpg`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          unoptimized
        />
      </div>
      <div className={featured ? "p-8" : "p-6"}>
        <p className="mb-2 text-xs uppercase tracking-wider text-[#6B6B6B]">{neighborhood}</p>
        <h3
          className={`mb-3 font-serif font-semibold text-[#1A1A1A] ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>
        <p className="mb-4 text-sm text-[#6B6B6B] leading-relaxed">{subtitle}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#C14B2D]">
          Bekijk project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
