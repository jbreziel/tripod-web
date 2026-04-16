import { setRequestLocale } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import { Section } from "@/components/section";
import { ServiceCategory } from "@/components/service-category";
import { CalculatorCta } from "@/components/calculator-cta";
import { FooterCta } from "@/components/footer-cta";
import { Check, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten — Keuken, badkamer, renovatie & uitbouw",
  description:
    "Keukenrenovatie, badkamerrenovatie, volledige woningrenovatie en uitbouw in Haarlem en Noord-Holland. Richtprijs direct zichtbaar. Eigen team, transparante prijzen.",
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Page hero */}
      <Section py="xl">
        <div className="max-w-3xl">
          <h1 className="mb-6 font-serif text-5xl font-semibold text-[#1A1A1A] sm:text-6xl">
            Onze diensten.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed sm:text-xl">
            Tripod BV bouwt renovaties en uitbreidingen in Noord-Holland — van een enkele badkamer
            tot een complete woningherbestemming. Vier hoofddiensten, steeds uitgevoerd door ons
            eigen team. Elk project met een heldere prijs, vaste planning, en één aanspreekpunt.
          </p>
        </div>
      </Section>

      {/* Service categories */}
      <Section py="md">
        <ServiceCategory
          id="keuken"
          title="Keukenrenovatie"
          intro="Een keuken is de plek waar u elke dag begint en eindigt. Onze keukenrenovaties zijn gebouwd om tien jaar plezier te geven zonder dat er iets knarst, schuift, of lekt."
          includes={[
            "Strip en afvoer van bestaande keuken",
            "Nieuwe leidingen (water, elektra, afvoer) waar nodig",
            "Installatie keuken (merk naar keuze binnen de tier)",
            "Werkbladen: composiet, massief hout, of natuursteen",
            "Tegelwerk (wand en/of vloer)",
            "Aansluiting inbouwapparatuur",
            "Afwerking plafond, muren, plinten",
            "Schoonoplevering",
          ]}
          priceTiers={[
            {
              tier: "Middenklasse",
              range: "€18k – €30k",
              description: "Solide standaard, 10-jaars kwaliteit",
            },
            {
              tier: "Hoogwaardig",
              range: "€30k – €55k",
              description: "Premium merken, natuursteen-opties, detail-afwerking",
            },
            {
              tier: "Luxe",
              range: "€55k+",
              description: "Designerkeuze, maatwerk, limited-edition materialen",
            },
          ]}
          priceNote="Op basis van een standaard keukenafmeting (~15 m²). Werkelijke prijs hangt af van afmeting, materiaal, en aanpassingen."
          howWeWork="Twee weken voorbereiding: materiaalkeuze, definitieve offerte, installatiedatum. Drie tot zes weken uitvoering afhankelijk van omvang. U kookt thuis normaal door tot de stripdag — we plannen zodat ontwrichting minimaal is."
        />

        <ServiceCategory
          id="badkamer"
          flipped
          title="Badkamerrenovatie"
          intro="Een badkamer is bouwkundig gezien de meest complexe ruimte in een woning — water, tegels, ventilatie, elektra, en vloerconstructie moeten perfect samenwerken. Wij behandelen het als één geheel, niet als losse posten."
          includes={[
            "Strip bestaande badkamer",
            "Leidingwerk water en afvoer vernieuwen waar nodig",
            "Waterdicht aanbrengen vloer en wand",
            "Tegelwerk (vloer, wand, douche)",
            "Installatie sanitair (wastafel, toilet, douche, bad)",
            "Glaswerk douche",
            "Elektra en verlichting",
            "Ventilatie / WTW-aansluiting",
            "Afwerking plafond",
            "Schoonoplevering",
          ]}
          priceTiers={[
            {
              tier: "Middenklasse",
              range: "€14k – €22k",
              description: "Degelijke standaard, goede tegels, betrouwbaar sanitair",
            },
            {
              tier: "Hoogwaardig",
              range: "€22k – €38k",
              description: "Hoogwaardige tegels, inbouwthermostaat, vloerverwarming",
            },
            {
              tier: "Luxe",
              range: "€38k+",
              description: "Natuursteen, maatwerk glaswerk, designer-sanitair",
            },
          ]}
          priceNote="Voor een badkamer van 6–9 m². Grotere badkamers, freestanding bad, of dubbele wastafels verhogen de range."
          howWeWork="Een complete badkamerrenovatie duurt meestal drie tot vijf weken. We werken waterdicht: tussentijdse waterafsluiting is minimaal, vaak onbemerkt voor de rest van het huis. Tegelwerk doen we zelf — geen onderaannemer die terugkomt voor ontbrekende voegen."
        />

        <ServiceCategory
          id="volledige-renovatie"
          title="Volledige woningrenovatie"
          intro="Een complete woningrenovatie is geen optelsom van losse klussen — het is een bouwkundig project. Structuur, installaties, isolatie, en afwerking moeten elkaar versterken. Onze grotere renovaties lopen van een paar maanden tot een jaar, met Tripod als hoofdaannemer die alle trades aanstuurt."
          includes={[
            "Sloopwerk en constructieve aanpassingen",
            "Fundering-werk waar nodig",
            "Staalconstructie en houtconstructie voor uitbreidingen of openingen",
            "Dakwerk: isolatie, dakbedekking, eventueel dakopbouw",
            "Kozijnen en glas vervangen",
            "Volledige elektra en waterinstallatie opnieuw leggen",
            "Warmtepomp en WTW-installatie (incl. subsidie-traject)",
            "Stucwerk, tegelwerk, afwerking",
            "Keuken en badkamers (zie bovenstaande diensten)",
            "Vloeren — PVC, hout, tegels, naar keuze",
            "Volledige coördinatie met architect voor vergunningstraject",
            "Oplevering per ruimte + finale oplevering",
          ]}
          priceNote="Voor volledige renovaties in de Randstad ligt de gemiddelde range tussen €1.800 en €3.200 per m² BVO (excl. BTW), afhankelijk van staat van het pand en gekozen tier. Gebruik de calculator voor uw specifieke situatie."
          howWeWork="Typische doorlooptijd: 3–6 maanden voor een grondige renovatie (80–180 m²), 4–8 maanden voor renovatie + uitbouw, 6–12 maanden voor een splitsing of herbestemming. Zie onze Boerderijrenovatie Haarlem als referentie."
        />

        <ServiceCategory
          id="uitbouw"
          flipped
          title="Uitbouw & aanbouw"
          intro='Een uitbouw klinkt simpel — "gewoon een ruimte erbij" — maar de bouwkundige aansluiting op het bestaande werk maakt het verschil tussen een kamer die erbij hoort en eentje die voelt als een vreemd aanhangsel. Wij bouwen uitbreidingen die aansluiten alsof ze er altijd zijn geweest.'
          includes={[
            "Vergunningtraject (wij coördineren, architect dient in)",
            "Fundering nieuwe uitbouw",
            "Constructie (staal, hout, of combinatie)",
            "Dakopbouw",
            "Kozijnen en glas (vaak groot glaswerk voor uitbouwen)",
            "Isolatie op Rc-waarde 6.0 of hoger",
            "Binnenafwerking: vloer, wand, plafond",
            "Installaties: elektra, verwarming (uitbreiding of apart)",
            "Aansluiting op bestaand huis — muuropeningen, vloeren gelijkleggen, dakverbinding",
            "Buitenafwerking",
          ]}
          priceTiers={[
            {
              tier: "Standaard middenklasse",
              range: "€2.4k – €3.6k/m²",
              description: "Uitbouw of serre, goede afwerking",
            },
            {
              tier: "Hoogwaardig",
              range: "€3.6k – €5.5k/m²",
              description: "Premium materialen, uitgebreid glaswerk",
            },
            {
              tier: "Luxe",
              range: "€5.5k+ /m²",
              description: "Architectonisch statement, groot glaswerk, maatwerk",
            },
          ]}
          priceNote="Inclusief vergunning en afwerking. Exclusief inrichting en keuken/badkamer in de uitbouw (zie betreffende diensten)."
          howWeWork="Vanaf vergunningsaanvraag tot oplevering: 4–8 maanden voor een standaard uitbouw, 6–12 maanden voor een dakopbouw of grote uitbreiding."
        />
      </Section>

      {/* What every project includes */}
      <Section variant="beige" py="lg">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A]">
            Wat u altijd van ons krijgt.
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Ongeacht de schaal van uw project zit onderstaande altijd in onze dienstverlening — geen
            extra posten, geen opties.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { lead: "Eén aanspreekpunt", rest: " van eerste gesprek tot oplevering. U belt niet met vijf onderaannemers." },
            { lead: "Uitgesplitste offerte", rest: " per post. Geen verborgen kosten, geen \"onvoorzien\" als black-box-post." },
            { lead: "Wekelijkse voortgangsupdate", rest: " tijdens de bouw. We verstoppen niets." },
            { lead: "Eigen team", rest: " voert het werk uit. Onderaannemers alleen voor zeer specialistische taken." },
            { lead: "Opleveringsprotocol", rest: " per ruimte. We lopen het werk met u door, documenteren, en lossen op voordat we vertrekken." },
            { lead: "12 maanden nazorg", rest: " op ons werk. Scheur in het voegwerk? We komen terug." },
            { lead: "Vergunningscoördinatie", rest: " als onderdeel van het project, niet als meerwerk." },
            { lead: "Schoonoplevering", rest: " — geen stof, geen verpakking, geen afval achtergelaten." },
          ].map((item) => (
            <div key={item.lead} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#C14B2D]" />
              <p className="text-[#1A1A1A]/90 leading-relaxed">
                <span className="font-semibold">{item.lead}</span>
                <span className="text-[#6B6B6B]">{item.rest}</span>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's not included */}
      <Section py="lg">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A]">
            Wat we niet doen — expliciet.
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Eerlijk over wat buiten onze scope valt, zodat u weet wie u waarvoor nodig heeft.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { lead: "Architectenwerk", rest: ". Wij bouwen, we ontwerpen geen volledige plannen. Voor architectuur werken we samen met gevestigde architecten." },
            { lead: "Interieurontwerp", rest: ". We installeren keukens en selecteren materialen binnen een tier, maar kleurenpaletten en meubilair zijn voor een interieurontwerper." },
            { lead: "Indienen van vergunningsaanvragen", rest: ". Wij coördineren het traject; de aanvraag zelf dient de architect in." },
            { lead: "Financiering of hypotheekadvies", rest: ". Voor financieringsvragen werkt u samen met uw hypotheekadviseur." },
            { lead: "Tuinontwerp of -aanleg", rest: ". Grondwerk rondom uitbouw, ja. Complete tuinaanleg is voor een hovenier." },
            { lead: "Werk buiten Noord-Holland / de Randstad", rest: ". De logistiek en kwaliteitsbewaking worden dan te duur voor iedereen." },
          ].map((item) => (
            <div key={item.lead} className="flex items-start gap-3">
              <X className="mt-1 h-4 w-4 flex-shrink-0 text-[#6B6B6B]" />
              <p className="text-[#1A1A1A]/90 leading-relaxed">
                <span className="font-semibold">{item.lead}</span>
                <span className="text-[#6B6B6B]">{item.rest}</span>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Calculator CTA */}
      <Section variant="beige" py="lg">
        <CalculatorCta />
      </Section>

      {/* Contact CTA */}
      <Section py="xl">
        <FooterCta
          title="Nog vragen? Eerst even bellen?"
          body="Eén kennismakingsgesprek. We komen bij u langs, bespreken de plannen, en geven ter plekke ons eerlijk oordeel over wat haalbaar is binnen uw budget."
          primaryLabel="Plan een kennismakingsgesprek"
        />
      </Section>
    </>
  );
}
