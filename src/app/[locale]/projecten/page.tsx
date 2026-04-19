import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { FooterCta } from "@/components/footer-cta";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projecten — Renovaties in Amsterdam en Haarlem",
  description:
    "Een selectie van door Tripod BV uitgevoerde renovaties in Amsterdam Oud-West, Amsterdam Noord, en Haarlem.",
};

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [featured, ...rest] = projects;

  return (
    <>
      <Section py="xl">
        <div className="max-w-3xl">
          <h1 className="mb-6 font-serif text-5xl font-semibold text-[#1A1A1A] sm:text-6xl">
            Projecten.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed sm:text-xl">
            Een selectie van door Tripod BV uitgevoerde renovaties. Van compacte Oud-West
            benedenwoningen tot boerderij-herbestemmingen in Haarlem — elk project met een andere
            uitdaging, dezelfde aanpak.
          </p>
        </div>
      </Section>

      <Section py="md">
        <div className="mb-10">
          <ProjectCard
            slug={featured.slug}
            title={featured.title}
            neighborhood={featured.neighborhood}
            subtitle={featured.subtitle}
            wip={featured.wip}
            featured
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {rest.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              neighborhood={project.neighborhood}
              subtitle={project.subtitle}
              wip={project.wip}
            />
          ))}
        </div>
      </Section>

      <Section variant="beige" py="xl">
        <FooterCta
          title="Een volgend project?"
          body="Onze volgende case study kan de uwe zijn. Laten we kennismaken — we komen bij u langs, bespreken de plannen, en geven ter plekke ons eerlijk oordeel."
          primaryLabel="Plan een gesprek"
        />
      </Section>
    </>
  );
}
