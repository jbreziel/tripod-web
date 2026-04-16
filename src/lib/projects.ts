/**
 * Project case study data.
 *
 * Dutch master copy is embedded here for Phase 2 rendering. The canonical source
 * lives in the workspace at outputs/clients/construction/website/projects-{slug}-nl.md
 * and is mirrored into content/ via scripts/sync-content.sh.
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
    slug: "celsiusstraat",
    title: "Renovatie Celsiusstraat 44-I",
    neighborhood: "Amsterdam Oud-West",
    tagline: "Celsiusstraat 44-I",
    subtitle:
      "Volledige renovatie van een benedenwoning in Amsterdam Oud-West — met behoud van het karakter van de jaren-30 bouw.",
    stats: [
      { label: "Type", value: "Volledige renovatie" },
      { label: "Locatie", value: "Amsterdam Oud-West" },
      { label: "Woningtype", value: "Jaren '30 benedenwoning" },
      { label: "Tier", value: "Hoogwaardig" },
    ],
    context: {
      heading: "Een karakteristieke benedenwoning, klaar voor de volgende generatie.",
      body: [
        "De Celsiusstraat in Oud-West heeft een heel eigen gelaagdheid: jaren-30 bouw met hoge plafonds, grote ramen, en vierkante meters die in de huidige markt zeldzaam zijn geworden. Deze benedenwoning was toe aan een complete update — installaties op hedendaags niveau, een keuken die past bij de schaal van de ruimte, een badkamer die functioneel èn esthetisch overeind blijft.",
        "Onze opdracht: moderniseren zonder het karakter van het pand te verliezen. Hoge plafonds, oorspronkelijke details waar mogelijk behouden, nieuwe ingrepen die in dialoog staan met het bestaande werk.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "Ons eigen team heeft de volledige renovatie uitgevoerd — van strippen tot oplevering.",
      body: [
        "Strip en voorbereiding, gevolgd door volledig nieuwe elektra en waterinstallatie afgestemd op de indeling. Stucwerk en plafonds: herstel waar mogelijk, nieuw waar nodig, met behoud van de oorspronkelijke detaillering.",
        "In de leefruimte plaatsten we een maatwerk keuken met composiet werkblad en natuursteen-accent. De badkamer kreeg een complete renovatie met waterdichte afwerking, inbouwsanitair, en vloerverwarming. Eikenhouten planken door de hele woning in één looprichting; verwarming en ventilatie uitgebreid waar nuttig.",
        "De oplevering verliep in fasen: keuken en badkamer eerst, daarna de rest van de afwerking — zodat de bewoners vanaf dag één praktisch konden wonen.",
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
      heading: "Een vergelijkbaar project in gedachten?",
      body: "Iedere benedenwoning in Oud-West heeft zijn eigen karakter — en zijn eigen uitdagingen. Laten we kennismaken en bespreken wat haalbaar is in uw pand.",
    },
    galleryFolder: "celsiusstraat",
    galleryCount: 9,
    seo: {
      title: "Renovatie Celsiusstraat Oud-West — volledige benedenwoningrenovatie",
      description:
        "Volledige renovatie van een jaren-30 benedenwoning in Amsterdam Oud-West. Keuken, badkamer, elektra, en afwerking — door Tripod BV.",
    },
  },
  {
    slug: "crynssenstraat",
    title: "Renovatie Crynssenstraat 53-III",
    neighborhood: "Amsterdam Oud-West",
    tagline: "Crynssenstraat 53-III",
    subtitle:
      "Volledige renovatie van een bovenwoning op drie hoog in Amsterdam Oud-West — met bijzondere aandacht voor de badkamer-afwerking.",
    stats: [
      { label: "Type", value: "Volledige renovatie" },
      { label: "Locatie", value: "Amsterdam Oud-West" },
      { label: "Woningtype", value: "Bovenwoning 3e verd." },
      { label: "Bijzonderheid", value: "Badkamer als kern" },
    ],
    context: {
      heading: "Hoog in Oud-West, met één ruimte die de toon zet.",
      body: [
        "Crynssenstraat 53-III is een bovenwoning op de derde verdieping in een klassiek Amsterdams hoekpand. Licht, uitzicht, en vierkante meters die vragen om een indeling die even zorgvuldig is ontworpen als de bouw oorspronkelijk was.",
        "De uitdaging van dit project was niet zozeer de schaal, maar de ambitie voor één specifieke ruimte: de badkamer. De opdrachtgever wilde een badkamer die niet voelde als een noodzakelijk onderdeel van het huis, maar als een van de mooiste plekken erin. Dat vraagt om precisiewerk: het tegelwerk moet perfect uitgelijnd zijn, de spiegel moet de ruimte dubbelen zonder dat het voelt als truc, het lichtwerk moet de natuurlijke lichtinval ondersteunen zonder te schreeuwen.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "Een volledige renovatie met een specifieke badkamerfocus:",
      body: [
        "Strip en complete leidinginfrastructuur vernieuwd, inclusief aangepaste riolering voor de nieuwe badkamer-indeling. Stucwerk, vloeren, elektra, en afwerking in alle leef- en slaapruimtes.",
        "Nieuwe keuken met composiet werkblad, afgestemd op de schaal van de woning. En dan de badkamer: natuursteen-tegels, spiegelwand, inloopdouche met glaswerk, inbouwthermostaat, vloerverwarming, ambient verlichting. Elk detail handmatig afgesteld.",
        "Kozijnen, plinten, en binnendeuren zijn consistent door de hele woning doorgevoerd. De badkamer is het moment waarvoor mensen binnenkomen en blijven kijken — dat is geen toeval, dat is het resultaat van een ontwerp dat eerst is vastgelegd in millimeters.",
      ],
    },
    outcome: {
      heading: "",
      body: [],
    },
    related: [
      { title: "Badkamerrenovatie", body: "De complexste ruimte in het huis, als één geheel.", anchor: "badkamer" },
      { title: "Volledige woningrenovatie", body: "Van grondige renovatie tot complete herbestemming.", anchor: "volledige-renovatie" },
      { title: "Keukenrenovatie", body: "Van strip tot opleveringsklaar, eigen team.", anchor: "keuken" },
    ],
    cta: {
      heading: "Een badkamer die de toon zet voor het hele huis?",
      body: "Niet elke badkamer hoeft een showstopper te zijn — maar als dat wel uw ambitie is, weten we precies waar we de meeste tijd in moeten steken. Laten we kennismaken.",
    },
    galleryFolder: "crynssenstraat",
    galleryCount: 9,
    seo: {
      title: "Renovatie Crynssenstraat Oud-West — met designer badkamer",
      description:
        "Volledige renovatie van een bovenwoning in Amsterdam Oud-West met een hoogwaardige badkamer als centraal element. Door Tripod BV.",
    },
  },
  {
    slug: "orteliusstraat",
    title: "Renovatie Orteliusstraat 72 hs",
    neighborhood: "Amsterdam Oud-West",
    tagline: "Orteliusstraat 72 hs",
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
        "Orteliusstraat 72 hs is een typische Oud-West benedenwoning: compact waar het moet, ruim waar het kan. De opdrachtgever wilde een huis dat elke dag werkt — geen prestige-renovatie, maar een bewuste keuze voor kwaliteit die twintig jaar meegaat zonder dat er iets rammelt of knarst.",
        "Dat vraagt om pragmatische keuzes op het juiste niveau: materialen die slijtage kunnen hebben, installaties die nauwelijks onderhoud vragen, en afwerking die nog steeds goed is als de mode drie keer is doorgelopen.",
      ],
    },
    approach: {
      heading: "Wat we hebben gedaan.",
      intro: "",
      body: [
        "Strip en volledig nieuwe elektra en waterinstallatie, aangepast aan de nieuwe indeling. Praktische keuken met werkblad dat bestand is tegen dagelijks gebruik. Complete badkamerrenovatie met duurzame tegels, betrouwbaar sanitair, en waterdichte afwerking.",
        "Eén doorlopende vloer door de leefruimtes voor ruimtelijk gevoel. Stucwerk, schilderwerk, plinten, binnendeuren — allemaal op hetzelfde niveau. Bestaande CV uitgebreid, vloerverwarming in de leefruimtes.",
        "Geen dramatische ingrepen, geen opvallende statement-elementen. Precies dat maakt het een plek die functioneert zoals een huis moet functioneren: zonder dat je er elke dag over hoeft na te denken.",
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
      "Een bestaande boerderij in Haarlem, oorspronkelijk 385 m² en één geheel, omgebouwd en uitgebreid tot twee zelfstandige woningen.",
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
        "De bestaande boerderij in Haarlem — een traditioneel masonry-pand met één beganegrondlaag en één verdieping — is opgesplitst in twee zelfstandige woningen van ongeveer 250 m² elk. Het ontwerp is van atelier MONA in Haarlem. Tripod BV is als hoofdaannemer verantwoordelijk voor de volledige bouwkundige uitvoering: sloopwerk, constructie, installaties, afwerking, en oplevering.",
        "Het project is uitgevoerd in middenklasse-kwaliteit met luxe afwerking in sleutelruimtes — een keuze die past bij de ambitie om beide woningen aantrekkelijk te houden voor kwaliteitsbewuste huiseigenaren, zonder door te schieten naar maatwerk dat op elke vierkante meter terugverdiend moet worden.",
      ],
    },
    challenges: {
      heading: "Wat het project bouwkundig complex maakte.",
      intro: "Een boerderij splitsen klinkt eenvoudig, maar in de uitvoering stapelen de keuzes zich op.",
      items: [
        {
          number: "01",
          title: "Masonry behouden, staal integreren",
          body: "De bestaande muren — traditioneel Hollands metselwerk — zijn het karakter van het pand. Tegelijkertijd vroeg de splitsing om grote openingen en nieuwe draagstructuren. Onze oplossing: een staalconstructie met HEB 220 hoofdliggers en HEA 140 secundaire liggers, zorgvuldig ingebouwd in het bestaande metselwerk, aangevuld met massieve houtconstructies om de warmte van het origineel te behouden.",
        },
        {
          number: "02",
          title: "BVO en GO per woning gezond uitbalanceren",
          body: "Elke woning moest als zelfstandig verhuurbaar / verkoopbaar object functioneren. Dat betekent: eigen entree, eigen meterkast, eigen installatietechniek, en een logische verdeling conform NEN 2580. In nauwe samenwerking met atelier MONA kwamen we per woning tot respectievelijk 295 m² BVO / 211 m² GO en 338 m² BVO / 272 m² GO.",
        },
        {
          number: "03",
          title: "Energie-upgrade binnen de monumentale schil",
          body: "Het pand moest voldoen aan moderne energie-eisen zonder dat het karakter werd opgeofferd. Dat betekende: warmtepomp-installatie, WTW-ventilatie, uitgebreide gevelisolatie aan de binnenzijde, en zorgvuldige detaillering rondom kozijnen om koudebruggen te voorkomen.",
        },
      ],
    },
    design: {
      heading: "Het ontwerp van atelier MONA.",
      body: 'Het ontwerp voor beide woningen is gemaakt door atelier MONA in Haarlem. Hun tekeningen — plattegronden, gevelaanzichten, en detail-impressies — waren de basis waarop onze uitvoering is gebouwd. Hieronder een selectie uit het Definitief Ontwerp dat we gezamenlijk hebben uitgewerkt.',
      gallery: "zsw-haarlem-plans",
    },
    approach: {
      heading: "Hoe we het hebben aangepakt.",
      intro: "Dit soort project vraagt om strakke coördinatie. Wij voerden het uit in vier fasen, steeds met Tripod als hoofdaannemer en ons eigen team op de werf.",
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
      heading: "Wat er in de praktijk gebeurd is — per onderdeel.",
      intro:
        "Elke post hieronder is onderdeel van onze offerte geweest en uitgevoerd door ons eigen team of een zorgvuldig geselecteerde onderaannemer voor specialistische onderdelen.",
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
      heading: "Wat er nu staat.",
      body: [
        "Twee zelfstandige woningen in een pand dat er altijd één was — en dat zo moet blijven voelen. Beide woningen hebben hun eigen karakter: een ingetogen hoofdmaterialenpalet (metselwerk, eikenhout, natuursteen in de keukens en badkamers), warme natuurlijke lichtinval door de grote nieuwe kozijnen, en een energiehuishouding die klaar is voor de volgende twintig jaar.",
        "Het onderscheid tussen oud en nieuw is zichtbaar maar niet conflicterend. Waar we nieuwe staalliggers hebben ingebouwd, lopen ze zonder verstoring door het bestaande metselwerk. De keuken van beide woningen heeft ruimte voor maatwerk zonder dat de uitbouw zelf als aparte ruimte voelt. Bovenal: beide woningen voelen groot zonder leeg te zijn — een balans die bij veel splitsingen verloren gaat.",
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
        "Een bestaande boerderij in Haarlem, omgebouwd tot twee zelfstandige woningen. Staalconstructie in bestaand metselwerk, warmtepomp-installatie, volledige afwerking — door Tripod BV.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
