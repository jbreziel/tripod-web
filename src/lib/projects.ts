/**
 * Project case study data.
 *
 * Dutch master copy is embedded here for Phase 2 rendering. The canonical source
 * lives in the workspace at outputs/clients/construction/website/projects-{slug}-nl.md
 * and is mirrored into content/ via scripts/sync-content.sh.
 *
 * Display order = portfolio order on /projecten and homepage teaser.
 */

export type StatsItem = { label: string; value: string };
export type ChallengeItem = { number: string; title: string; body: string };
export type PhaseItem = { phase: string; title: string; body: string };
export type RelatedService = { title: string; body: string; anchor: string };

export type Project = {
  slug: string;
  title: string;
  neighborhood: string;
  tagline: string;
  subtitle: string;
  wip?: boolean;
  videoUrl?: string;
  stats: StatsItem[];
  context: { heading: string; body: string[] };
  challenges?: { heading: string; intro: string; items: ChallengeItem[] };
  design?: { heading: string; body: string; gallery: "zsw-haarlem-plans" };
  approach: { heading: string; intro: string; phases?: PhaseItem[]; body?: string[] };
  scope?: { heading: string; intro: string; items: string[] };
  outcome: { heading: string; body: string[]; stats?: StatsItem[] };
  related: RelatedService[];
  cta: { heading: string; body: string };
  galleryFolder: string;
  galleryCount: number;
  seo: { title: string; description: string };
};

export const projects: Project[] = [
  {
    slug: "willem-van-de-veldekade",
    title: "Renovatie Willem van de Veldekade",
    neighborhood: "Heemstede",
    tagline: "Willem van de Veldekade",
    subtitle:
      "Volledige renovatie van een tussenwoning in Heemstede — met een handgreeploze maatwerk keuken, complete badkamer, en vloeren die bij elke verdieping passen.",
    videoUrl: "/videos/willem-van-de-veldekade.mp4",
    stats: [
      { label: "Type", value: "Volledige renovatie" },
      { label: "Locatie", value: "Heemstede" },
      { label: "Woningtype", value: "Tussenwoning met tuin" },
      { label: "Tier", value: "Hoogwaardig" },
    ],
    context: {
      heading: "Een tussenwoning in Heemstede, van fundering tot afwerking opnieuw opgebouwd.",
      body: [
        "Heemstede is een buurt waar huizen vaak een generatie lang in dezelfde familie blijven. Dat brengt een bepaalde verantwoordelijkheid mee voor een renovatie: het werk moet niet alleen nu goed zijn, het moet over twintig jaar nog steeds als vanzelfsprekend voelen. Deze tussenwoning — twee buren links en rechts, een tuin aan de achterzijde — kreeg een complete renovatie waarin precies die ambitie het uitgangspunt was.",
        "De opdrachtgevers wilden geen opvallende renovatie. Ze wilden een huis dat klopt. Een keuken waarvan je elke dag opnieuw denkt dat hij goed is. Een badkamer die werkt als de rust van de ochtend. Materialen die mooier worden naarmate ze ouder worden. Dat vraagt om keuzes die niet zichtbaar zijn als je door de voordeur naar binnen loopt, maar die je voelt als je een week in huis woont.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "Een volledige renovatie uitgevoerd door ons eigen team — van strip tot oplevering.",
      body: [
        "Volledig gestript naar de dragende constructie, oude installaties verwijderd, vloeren opengewerkt voor inspectie en nieuwe leidinginfrastructuur. Volledig nieuwe elektra en waterinstallatie, inclusief groepenkast, netwerk, en voorbereiding voor toekomstige zonnepanelen.",
        "Vloeren in twee karakters: een strakke gietvloer op de begane grond, doorgevoerd zonder naden en geschikt voor vloerverwarming; massief eikenhouten vloeren op de eerste en tweede verdieping, gelegd in één looprichting. Eikenhout keert terug in de keuken als verbindend element tussen de verdiepingen.",
        "De maatwerk keuken is handgreeploos — touchless bediening, geen zichtbare handgrepen of scharnieren. Fronten in eikenhout met vinyle afwerking voor kras- en vochtbestendigheid, een Corian werkblad dat onverschillig is voor hete pannen en dagelijkse slijtage, en inbouwapparatuur op tandem-niveau strak ingepast.",
        "Complete badkamerrenovatie met natuursteen, inloopdouche met glaswerk, inbouwthermostaat, spiegelverlichting die de natuurlijke lichtinval ondersteunt, en vloerverwarming. Glad stucwerk in alle ruimtes, afgewerkt op het niveau dat past bij het eikenhout en de gietvloer. Kozijnen en binnendeuren vernieuwd waar nodig. Tuingerichte gevel opnieuw bekeken met oog voor licht en aansluiting tussen binnen en buiten. Energie-upgrade met isolatie, moderne installaties, warmtepomp-voorbereiding, en airco-units in de woonkamer en slaapkamers voor comfort in de warmere maanden.",
        "Elk detail is handmatig afgesteld. De plinten lopen door zonder onderbreking. De voegen in de badkamer zijn millimeter-precies. De overgangen tussen ruimtes voelen niet als overgangen — ze voelen als één doorlopend geheel.",
      ],
    },
    outcome: {
      heading: "",
      body: [],
    },
    related: [
      { title: "Volledige woningrenovatie", body: "Van grondige renovatie tot complete herbestemming.", anchor: "volledige-renovatie" },
      { title: "Keukenrenovatie", body: "Van strip tot opleveringsklaar, eigen team.", anchor: "keuken" },
      { title: "Badkamerrenovatie", body: "De complexste ruimte in het huis, als één geheel.", anchor: "badkamer" },
    ],
    cta: {
      heading: "Een huis dat kloppen moet — tot in de details?",
      body: "Niet elke renovatie hoeft opvallend te zijn. De renovaties waarvan eigenaren twintig jaar later nog steeds tevreden zijn, zijn meestal de renovaties waarin elk detail een bewuste keuze was. Laten we kennismaken en bespreken wat haalbaar is in uw pand.",
    },
    galleryFolder: "willem-van-de-veldekade",
    galleryCount: 9,
    seo: {
      title: "Renovatie Willem van de Veldekade Heemstede",
      description:
        "Volledige renovatie van een tussenwoning in Heemstede — handgreeploze keuken met Corian werkblad, gietvloer en eikenhout, complete badkamer. Door Tripod BV.",
    },
  },
  {
    slug: "nieuwdammerdijk",
    title: "Renovatie Nieuwdammerdijk",
    neighborhood: "Amsterdam Noord",
    tagline: "Nieuwdammerdijk",
    subtitle:
      "Volledige renovatie van een woning aan de Nieuwdammerdijk in Amsterdam Noord — waar ruimte en natuurlijke lichtinval het uitgangspunt waren.",
    stats: [
      { label: "Type", value: "Volledige renovatie" },
      { label: "Locatie", value: "Amsterdam Noord" },
      { label: "Woningtype", value: "Ruime woning" },
      { label: "Tier", value: "Hoogwaardig" },
    ],
    context: {
      heading: "Noord, met ruimte om te werken.",
      body: [
        "Amsterdam Noord vraagt om een ander soort renovatie dan Oud-West. Waar de binnenstadwoningen zich moeten plooien naar eeuwenoude plattegronden, biedt Noord vaak iets wat in de Ring niet bestaat: ruimte. Ruimere plattegronden, meer lichtinval, en de ruimte om een renovatie echt als een herontwerp aan te pakken in plaats van als het in elkaar passen van puzzelstukken.",
        "Deze woning aan de Nieuwdammerdijk is daar een voorbeeld van. Het project gaf ons de mogelijkheid om niet alleen te renoveren, maar om te denken over hoe de ruimte het beste werkt voor de bewoners — waar de leefruimtes liggen, hoe het licht het huis binnenkomt, waar de keuken het natuurlijke middelpunt zou moeten zijn.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "Een grondige aanpak die de ruimte van de woning tot zijn recht laat komen:",
      body: [
        "Samen met de opdrachtgevers de indeling herzien: waar wonen, waar koken, waar slapen. Sloop en structuur: niet-dragende wanden verwijderd om de leefruimtes te laten ademen, draagstructuur waar nodig aangepast met stalen ondersteuningen.",
        "Leidingwerk volledig vernieuwd conform de nieuwe indeling. Ruimtelijke open keuken met eiland als centraal element, afgestemd op de schaal van de nieuwe leefruimte. Badkamer(s) met waterdichte afwerking en ruime douche-indelingen.",
        "Consistent vloertype door de begane grond, met vloerverwarming. Strategische plaatsing van stopcontacten en verlichting om de grote ruimtes te laten functioneren. Energie-upgrade met extra isolatie en moderne CV- of warmtepomp-installatie.",
      ],
    },
    outcome: {
      heading: "",
      body: [],
    },
    related: [
      { title: "Volledige woningrenovatie", body: "Van grondige renovatie tot complete herbestemming.", anchor: "volledige-renovatie" },
      { title: "Keukenrenovatie", body: "Van strip tot opleveringsklaar, eigen team.", anchor: "keuken" },
      { title: "Uitbouw & aanbouw", body: "Extra ruimte die aansluit op het bestaande werk.", anchor: "uitbouw" },
    ],
    cta: {
      heading: "Een ruime woning die vraagt om een herontwerp?",
      body: "Niet elk pand biedt de ruimte om echt te herontwerpen in plaats van te renoveren. Als uw huis die ruimte wel biedt, is het belangrijk om een aannemer te hebben die mee kan denken — niet alleen uitvoeren. Laten we kennismaken.",
    },
    galleryFolder: "nieuwdammerdijk",
    galleryCount: 9,
    seo: {
      title: "Renovatie Nieuwdammerdijk Amsterdam Noord",
      description:
        "Volledige renovatie van een ruime woning aan de Nieuwdammerdijk in Amsterdam Noord, met herontwerp van indeling en open keuken. Door Tripod BV.",
    },
  },
  {
    slug: "zsw-haarlem",
    title: "Boerderijrenovatie Haarlem",
    neighborhood: "Haarlem",
    tagline: "Boerderijrenovatie Haarlem",
    subtitle:
      "Een bestaande boerderij in Haarlem, oorspronkelijk 385 m² en één geheel, omgebouwd en uitgebreid tot twee zelfstandige woningen. Dit project is momenteel in uitvoering.",
    wip: true,
    stats: [
      { label: "Type", value: "Renovatie + splitsing" },
      { label: "Totaal BVO", value: "633 m²" },
      { label: "Totaal GO", value: "483 m²" },
      { label: "Eenheden", value: "2 woningen" },
    ],
    context: {
      heading: "Eén boerderij, twee woningen.",
      body: [
        "De uitdaging begon met een vraagstuk dat in de Randstad steeds vaker terugkomt: hoe maak je van één historisch pand twee toekomstbestendige woningen zonder het karakter te verliezen?",
        "De bestaande boerderij in Haarlem — een traditioneel masonry-pand met één beganegrondlaag en één verdieping — wordt opgesplitst in twee zelfstandige woningen van ongeveer 250 m² elk. Het ontwerp is van atelier MONA in Haarlem. Tripod BV is als hoofdaannemer verantwoordelijk voor de volledige bouwkundige uitvoering: sloopwerk, constructie, installaties, afwerking, en oplevering.",
        "Het project wordt uitgevoerd in middenklasse-kwaliteit met luxe afwerking in sleutelruimtes — een keuze die past bij de ambitie om beide woningen aantrekkelijk te houden voor kwaliteitsbewuste huiseigenaren, zonder door te schieten naar maatwerk dat op elke vierkante meter terugverdiend moet worden.",
      ],
    },
    challenges: {
      heading: "Wat het project bouwkundig complex maakt.",
      intro: "Een boerderij splitsen klinkt eenvoudig, maar in de uitvoering stapelen de keuzes zich op.",
      items: [
        {
          number: "01",
          title: "Masonry behouden, staal integreren",
          body: "De bestaande muren — traditioneel Hollands metselwerk — zijn het karakter van het pand. Tegelijkertijd vraagt de splitsing om grote openingen en nieuwe draagstructuren. Onze oplossing: een staalconstructie met HEB 220 hoofdliggers en HEA 140 secundaire liggers, zorgvuldig ingebouwd in het bestaande metselwerk, aangevuld met massieve houtconstructies om de warmte van het origineel te behouden.",
        },
        {
          number: "02",
          title: "BVO en GO per woning gezond uitbalanceren",
          body: "Elke woning moet als zelfstandig verhuurbaar / verkoopbaar object functioneren. Dat betekent: eigen entree, eigen meterkast, eigen installatietechniek, en een logische verdeling conform NEN 2580. In nauwe samenwerking met atelier MONA komen we per woning tot respectievelijk 295 m² BVO / 211 m² GO en 338 m² BVO / 272 m² GO.",
        },
        {
          number: "03",
          title: "Energie-upgrade binnen de monumentale schil",
          body: "Het pand moet voldoen aan moderne energie-eisen zonder dat het karakter wordt opgeofferd. Dat betekent: warmtepomp-installatie, WTW-ventilatie, uitgebreide gevelisolatie aan de binnenzijde, en zorgvuldige detaillering rondom kozijnen om koudebruggen te voorkomen.",
        },
      ],
    },
    design: {
      heading: "Het ontwerp van atelier MONA.",
      body: 'Het ontwerp voor beide woningen is gemaakt door atelier MONA in Haarlem. Hun tekeningen — plattegronden, gevelaanzichten, en detail-impressies — zijn de basis waarop onze uitvoering is gebouwd. Hieronder een selectie uit het Definitief Ontwerp dat we gezamenlijk hebben uitgewerkt.',
      gallery: "zsw-haarlem-plans",
    },
    approach: {
      heading: "Hoe we het aanpakken.",
      intro: "Dit soort project vraagt om strakke coördinatie. Wij voeren het uit in vier fasen, steeds met Tripod als hoofdaannemer en ons eigen team op de werf.",
      phases: [
        {
          phase: "Fase 1",
          title: "Sloopwerk en voorbereiding",
          body: "Selectieve sloop van niet-dragende wanden, verwijderen bestaande installaties, blootleggen fundering voor inspectie. Waar nodig grondwerk en fundering-herstel. Duur: circa 4 weken.",
        },
        {
          phase: "Fase 2",
          title: "Constructie",
          body: "Plaatsen van de staalconstructie (HEB 220, HEA 140) en nieuwe houtconstructies voor de splitsing. Aanbrengen nieuwe binnenwanden. Dakwerk waar opengewerkt. Duur: circa 8 weken.",
        },
        {
          phase: "Fase 3",
          title: "Installaties en isolatie",
          body: "Volledig nieuwe elektra en waterinstallatie per woning. Warmtepomp- en WTW-installatie. Gevelisolatie, vloerverwarming, kozijnrenovatie. Duur: circa 10 weken.",
        },
        {
          phase: "Fase 4",
          title: "Afwerking en oplevering",
          body: "Stucwerk, tegelwerk, sanitair, keukens, vloeren, binnendeuren, buitenschilderwerk. Kamer-voor-kamer oplevering met checklist en foto's. Finale oplevering met beide eigenaren. Duur: circa 8 weken.",
        },
      ],
    },
    scope: {
      heading: "Wat er in de praktijk gebeurt — per onderdeel.",
      intro:
        "Elke post hieronder is onderdeel van onze offerte en wordt uitgevoerd door ons eigen team of een zorgvuldig geselecteerde onderaannemer voor specialistische onderdelen.",
      items: [
        "Sloopwerk — selectieve demontage, grondwerk",
        "Fundering — inspectie, lokaal herstel, aanvulling waar nodig",
        "Betonwerk — nieuwe vloeren en funderingsstroken",
        "Staalconstructie — HEB 220 / HEA 140 / verbindingen in bestaand metselwerk",
        "Houtconstructie — dakbalken 170×70, 285×38, 200×75, timber-frame",
        "Metselwerk — aanvulling en herstel bestaand, nieuw waar uitbouw",
        "Dakwerk — isolatie, nieuwe dakbedekking, dakdoorvoeren",
        "Kozijnen en glas — dubbel glas / HR++",
        "Elektra — volledig vernieuwd per woning, meterkastaansluiting",
        "Waterinstallatie — nieuwe aan- en afvoer, per woning",
        "Warmtepomp-installatie — lucht-water systeem per woning",
        "WTW-ventilatie — warmteterugwinning per woning",
        "Vloerverwarming — in alle leefruimtes",
        "Stucwerk — wanden en plafonds, afwerking naar tier",
        "Tegelwerk — badkamers, toiletten, keuken waar passend",
        "Keukens — volledige installatie beide woningen",
        "Sanitair — complete badkamers + toiletten",
        "Vloeren — PVC, hout, tegels, naar specificatie",
        "Binnendeuren — stompe deuren met architraven",
        "Buitenschilderwerk — herstel en nieuw waar nodig",
      ],
    },
    outcome: {
      heading: "Wat er komt te staan.",
      body: [
        "Twee zelfstandige woningen in een pand dat er altijd één was — en dat zo moet blijven voelen. Beide woningen krijgen hun eigen karakter: een ingetogen hoofdmaterialenpalet (metselwerk, eikenhout, natuursteen in de keukens en badkamers), warme natuurlijke lichtinval door de grote nieuwe kozijnen, en een energiehuishouding die klaar is voor de volgende twintig jaar.",
        "Het onderscheid tussen oud en nieuw blijft zichtbaar maar niet conflicterend. Waar we nieuwe staalliggers inbouwen, lopen ze zonder verstoring door het bestaande metselwerk. De keuken van beide woningen krijgt ruimte voor maatwerk zonder dat de uitbouw zelf als aparte ruimte voelt. Bovenal: beide woningen moeten groot voelen zonder leeg te zijn — een balans die bij veel splitsingen verloren gaat.",
        "Na oplevering volgt een professionele fotoshoot en wordt deze case study aangevuld met eindfoto's.",
      ],
      stats: [
        { label: "Bouwtijd", value: "~30 weken" },
        { label: "Eigen team op de werf", value: "4–6 vakmannen/week" },
        { label: "Wekelijkse voortgang", value: "Ja, beide eigenaren" },
        { label: "Opleveringsdocumentatie", value: "Foto's + checklist" },
      ],
    },
    related: [
      { title: "Volledige woningrenovatie", body: "Van grondige renovatie tot complete herbestemming.", anchor: "volledige-renovatie" },
      { title: "Uitbouw & aanbouw", body: "Extra ruimte die aansluit op het bestaande werk.", anchor: "uitbouw" },
      { title: "Badkamerrenovatie", body: "De complexste ruimte in het huis, als één geheel.", anchor: "badkamer" },
    ],
    cta: {
      heading: "Denkt u aan een vergelijkbaar project?",
      body: "Niet elk pand vraagt om een splitsing, maar elke grote renovatie vraagt om een hoofdaannemer die het overzicht houdt van sloop tot sleuteloverdracht. Laten we kennismaken.",
    },
    galleryFolder: "zsw-haarlem",
    galleryCount: 9,
    seo: {
      title: "Boerderijrenovatie Haarlem — 385 m² boerderij gesplitst in twee woningen",
      description:
        "Een bestaande boerderij in Haarlem, omgebouwd tot twee zelfstandige woningen. Staalconstructie in bestaand metselwerk, warmtepomp-installatie, volledige afwerking — door Tripod BV. Momenteel in uitvoering.",
    },
  },
  {
    slug: "crynssenstraat",
    title: "Renovatie Crynssenstraat",
    neighborhood: "Amsterdam Oud-West",
    tagline: "Crynssenstraat",
    subtitle:
      "Volledige renovatie van een bovenwoning op drie hoog in Amsterdam Oud-West — een compact huis met karakter, goed gemaakt van begin tot eind.",
    stats: [
      { label: "Type", value: "Volledige renovatie" },
      { label: "Locatie", value: "Amsterdam Oud-West" },
      { label: "Woningtype", value: "Bovenwoning 3e verd." },
      { label: "Tier", value: "Midden–Hoogwaardig" },
    ],
    context: {
      heading: "Een compacte bovenwoning in Oud-West, volledig gerenoveerd.",
      body: [
        "Crynssenstraat is een bovenwoning op de derde verdieping in een klassiek Amsterdams hoekpand. Licht, uitzicht, en vierkante meters die vragen om een indeling die zorgvuldig is ontworpen.",
        "De opdracht: een complete renovatie van een compact huis — nieuwe keuken, nieuwe vloer, nieuwe installaties, met oog voor detail en zonder onnodige franje. Een huis dat elke dag werkt.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "",
      body: [
        "Strip en complete leidinginfrastructuur vernieuwd. Stucwerk, vloeren, elektra, en afwerking in alle leef- en slaapruimtes.",
        "Nieuwe keuken met composiet werkblad, afgestemd op de schaal van de woning. Badkamer gerenoveerd. Kozijnen, plinten, en binnendeuren consistent door de hele woning doorgevoerd.",
      ],
    },
    outcome: {
      heading: "",
      body: [],
    },
    related: [
      { title: "Volledige woningrenovatie", body: "Van grondige renovatie tot complete herbestemming.", anchor: "volledige-renovatie" },
      { title: "Keukenrenovatie", body: "Van strip tot opleveringsklaar, eigen team.", anchor: "keuken" },
      { title: "Badkamerrenovatie", body: "De complexste ruimte in het huis, als één geheel.", anchor: "badkamer" },
    ],
    cta: {
      heading: "Een compacte renovatie die klopt op elk detail?",
      body: "Een klein huis goed maken vraagt dezelfde zorg als een groot huis goed maken. Laten we kennismaken en bespreken wat haalbaar is in uw pand.",
    },
    galleryFolder: "crynssenstraat",
    galleryCount: 9,
    seo: {
      title: "Renovatie Crynssenstraat Oud-West — complete bovenwoning",
      description:
        "Volledige renovatie van een bovenwoning in Amsterdam Oud-West — keuken, vloer, installaties, afwerking. Door Tripod BV.",
    },
  },
  {
    slug: "orteliusstraat",
    title: "Renovatie Orteliusstraat",
    neighborhood: "Amsterdam Oud-West",
    tagline: "Orteliusstraat",
    subtitle:
      "Complete renovatie van een benedenwoning in Amsterdam Oud-West — warm, functioneel, en afgewerkt met oog voor details.",
    stats: [
      { label: "Type", value: "Volledige renovatie" },
      { label: "Locatie", value: "Amsterdam Oud-West" },
      { label: "Woningtype", value: "Benedenwoning" },
      { label: "Tier", value: "Midden–Hoogwaardig" },
    ],
    context: {
      heading: "Een Amsterdamse benedenwoning die weer voelt als nieuw.",
      body: [
        "Orteliusstraat is een typische Oud-West benedenwoning: compact waar het moet, ruim waar het kan. De opdrachtgever wilde een huis dat elke dag werkt — een bewuste keuze voor kwaliteit die twintig jaar meegaat zonder dat er iets rammelt of knarst.",
        "De best gefotografeerde ruimte van dit project is de badkamer — een complete renovatie met waterdichte afwerking, duurzame tegels, en sanitair dat past bij de rest van het huis.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "",
      body: [
        "Strip en volledig nieuwe elektra en waterinstallatie, aangepast aan de nieuwe indeling. Praktische keuken met werkblad dat bestand is tegen dagelijks gebruik. Complete badkamerrenovatie met duurzame tegels, betrouwbaar sanitair, en waterdichte afwerking.",
        "Eén doorlopende vloer door de leefruimtes voor ruimtelijk gevoel. Stucwerk, schilderwerk, plinten, binnendeuren — allemaal op hetzelfde niveau. Bestaande CV uitgebreid, vloerverwarming in de leefruimtes.",
      ],
    },
    outcome: {
      heading: "",
      body: [],
    },
    related: [
      { title: "Volledige woningrenovatie", body: "Van grondige renovatie tot complete herbestemming.", anchor: "volledige-renovatie" },
      { title: "Badkamerrenovatie", body: "De complexste ruimte in het huis, als één geheel.", anchor: "badkamer" },
      { title: "Keukenrenovatie", body: "Van strip tot opleveringsklaar, eigen team.", anchor: "keuken" },
    ],
    cta: {
      heading: "Een renovatie die gewoon werkt?",
      body: 'Niet elk project hoeft een architectonisch statement te zijn. Voor veel huiseigenaren is "goed, duurzaam, en klopt op elk detail" de grootste ambitie — en dat is precies waar we goed in zijn. Laten we kennismaken.',
    },
    galleryFolder: "orteliusstraat",
    galleryCount: 9,
    seo: {
      title: "Renovatie Orteliusstraat Oud-West — complete benedenwoning",
      description:
        "Complete renovatie van een benedenwoning in Amsterdam Oud-West. Pragmatisch, duurzaam afgewerkt, uitgevoerd door Tripod BV.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
