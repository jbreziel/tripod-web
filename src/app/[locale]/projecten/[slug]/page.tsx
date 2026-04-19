import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "../../../../../i18n/navigation";
import { Section } from "@/components/section";
import { ProjectGallery } from "@/components/project-gallery";
import { FooterCta } from "@/components/footer-cta";
import { getProject, getAllProjectSlugs } from "@/lib/projects";
import { ProjectSchema } from "@/components/schema-org";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const locales = ["nl", "en"] as const;
  const slugs = getAllProjectSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectSchema
        name={project.title}
        description={project.seo.description}
        locationName={project.neighborhood}
        slug={project.slug}
      />
      {/* Hero */}
      <Section py="md" className="pt-8">
        <Link
          href="/projecten"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#C14B2D]"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Alle projecten
        </Link>

        <p className="mb-3 text-xs uppercase tracking-widest text-[#C14B2D]">
          {project.neighborhood}
        </p>
        <h1 className="mb-6 max-w-4xl font-serif text-5xl font-semibold text-[#1A1A1A] sm:text-6xl">
          {project.tagline}
        </h1>
        <p className="max-w-3xl text-lg text-[#6B6B6B] leading-relaxed sm:text-xl">
          {project.subtitle}
        </p>
      </Section>

      {/* WIP banner */}
      {project.wip && (
        <Section py="sm" className="border-y border-[#C14B2D]/30 bg-[#C14B2D]/5">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 shrink-0 rounded-sm bg-[#C14B2D] px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#FAFAF7]">
              In uitvoering
            </span>
            <p className="text-sm text-[#1A1A1A]/90 sm:text-base">
              Dit project is momenteel in uitvoering. De fotografie wordt aangevuld zodra het
              project is opgeleverd.
            </p>
          </div>
        </Section>
      )}

      {/* Hero image */}
      <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden rounded-sm bg-[#E8E4DD] sm:aspect-[21/9]">
        <Image
          src={`/images/portfolio/${project.galleryFolder}/hero.jpg`}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
          unoptimized
        />
      </div>

      {/* Stats strip */}
      <Section variant="beige" py="sm">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p className="mb-1 text-xs uppercase tracking-wider text-[#6B6B6B]">
                {stat.label}
              </p>
              <p className="font-serif text-xl font-medium text-[#1A1A1A]">{stat.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Context */}
      <Section py="lg">
        <div className="max-w-3xl">
          <h2 className="mb-6 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
            {project.context.heading}
          </h2>
          {project.context.body.map((p, i) => (
            <p key={i} className="mb-5 text-lg text-[#1A1A1A]/90 leading-relaxed last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Challenges (optional — ZSW) */}
      {project.challenges && (
        <Section variant="beige" py="lg">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
              {project.challenges.heading}
            </h2>
            <p className="text-lg text-[#6B6B6B]">{project.challenges.intro}</p>
          </div>
          <div className="space-y-12">
            {project.challenges.items.map((item) => (
              <div key={item.number} className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3">
                  <div className="font-serif text-5xl font-medium text-[#C14B2D]">
                    {item.number}
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="max-w-3xl text-[#1A1A1A]/90 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Design intent (ZSW only, atelier MONA plan gallery) */}
      {project.design && (
        <Section py="lg">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
              {project.design.heading}
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed">{project.design.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#E8E4DD]"
              >
                <Image
                  src={`/images/portfolio/zsw-haarlem-plans/plan-${String(i).padStart(2, "0")}.jpg`}
                  alt={`atelier MONA ontwerp ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6B6B6B] italic">
            Ontwerp: <a href="https://atelier-mona.nl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#C14B2D]">atelier MONA</a>
          </p>
        </Section>
      )}

      {/* Approach */}
      <Section variant={project.challenges ? "default" : "beige"} py="lg">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
            {project.approach.heading}
          </h2>
          {project.approach.intro && (
            <p className="text-lg text-[#6B6B6B]">{project.approach.intro}</p>
          )}
        </div>

        {project.approach.phases && (
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.approach.phases.map((phase) => (
              <div key={phase.phase} className="border-l-2 border-[#C14B2D] pl-5">
                <p className="mb-2 text-xs uppercase tracking-wider text-[#C14B2D]">
                  {phase.phase}
                </p>
                <h3 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
                  {phase.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        )}

        {project.approach.body && (
          <div className="max-w-3xl space-y-5">
            {project.approach.body.map((p, i) => (
              <p key={i} className="text-lg text-[#1A1A1A]/90 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}
      </Section>

      {/* Scope highlights (ZSW) */}
      {project.scope && (
        <Section py="lg">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
              {project.scope.heading}
            </h2>
            <p className="text-sm text-[#6B6B6B]/80 italic">{project.scope.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm md:grid-cols-2">
            {project.scope.items.map((item) => (
              <div key={item} className="flex gap-3 border-b border-[#E8E4DD] pb-2 text-[#1A1A1A]/80">
                <span className="font-medium text-[#C14B2D]">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Outcome */}
      {project.outcome.body.length > 0 && (
        <Section variant="beige" py="lg">
          <div className="max-w-3xl">
            {project.outcome.heading && (
              <h2 className="mb-6 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
                {project.outcome.heading}
              </h2>
            )}
            {project.outcome.body.map((p, i) => (
              <p key={i} className="mb-5 text-lg text-[#1A1A1A]/90 leading-relaxed last:mb-0">
                {p}
              </p>
            ))}
          </div>
          {project.outcome.stats && (
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {project.outcome.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C14B2D] pl-4">
                  <p className="mb-1 text-xs uppercase tracking-wider text-[#6B6B6B]">
                    {stat.label}
                  </p>
                  <p className="font-serif font-medium text-[#1A1A1A]">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Project video (WvdV — flagship) */}
      {project.videoUrl && (
        <Section py="lg">
          <div className="mb-8">
            <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
              Een rondgang.
            </h2>
          </div>
          <div className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-sm bg-[#1A1A1A]">
            <video
              src={project.videoUrl}
              poster={`/images/portfolio/${project.galleryFolder}/hero.jpg`}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-full w-full object-cover"
            />
          </div>
        </Section>
      )}

      {/* Photo gallery */}
      <Section py="lg">
        <div className="mb-10">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
            Fotogalerij.
          </h2>
        </div>
        <ProjectGallery
          folder={project.galleryFolder}
          count={project.galleryCount}
          title={project.title}
        />
      </Section>

      {/* Related services */}
      <Section variant="beige" py="lg">
        <div className="mb-10">
          <h2 className="mb-4 font-serif text-3xl font-medium text-[#1A1A1A] sm:text-4xl">
            Vergelijkbare diensten bij Tripod.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {project.related.map((service) => (
            <Link
              key={service.anchor}
              href={{ pathname: "/diensten", hash: service.anchor }}
              className="group rounded-sm border border-[#E8E4DD] bg-[#FAFAF7] p-6 transition-all hover:border-[#C14B2D]"
            >
              <h3 className="mb-2 font-serif text-xl font-semibold text-[#1A1A1A]">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-[#6B6B6B]">{service.body}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#C14B2D]">
                Meer informatie
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Next-project CTA */}
      <Section py="xl">
        <FooterCta title={project.cta.heading} body={project.cta.body} />
      </Section>
    </>
  );
}
