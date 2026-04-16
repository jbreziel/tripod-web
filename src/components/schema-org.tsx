/**
 * Schema.org structured data for Tripod BV.
 * Renders as JSON-LD in the document head.
 */

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tripodbv.nl/#organization",
  name: "Tripod BV",
  alternateName: "Tripod",
  description:
    "Dutch construction company (aannemer) specialising in high-quality renovations in Haarlem, Amsterdam, and Noord-Holland.",
  url: "https://tripodbv.nl",
  telephone: "+31614374866",
  email: "info@tripodbv.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Willink van Collenstraat 7",
    postalCode: "3621CK",
    addressLocality: "Breukelen",
    addressCountry: "NL",
  },
  priceRange: "€€€",
  foundingDate: "2025",
  identifier: [
    { "@type": "PropertyValue", name: "KVK", value: "97562777" },
    { "@type": "PropertyValue", name: "BTW", value: "NL868111983B01" },
  ],
  founder: {
    "@type": "Person",
    name: "Guus Merkx",
    jobTitle: "Aannemer",
    sameAs: "https://nl.linkedin.com/in/guus-merkx-4a082b26a",
  },
  areaServed: [
    { "@type": "City", name: "Haarlem" },
    { "@type": "City", name: "Amsterdam" },
    { "@type": "AdministrativeArea", name: "Noord-Holland" },
  ],
  sameAs: [] as string[],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
    />
  );
}

type ProjectSchemaProps = {
  name: string;
  description: string;
  locationName: string;
  slug: string;
};

export function ProjectSchema({ name, description, locationName, slug }: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    creator: { "@id": "https://tripodbv.nl/#organization" },
    locationCreated: { "@type": "Place", name: locationName, addressCountry: "NL" },
    url: `https://tripodbv.nl/nl/projecten/${slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
