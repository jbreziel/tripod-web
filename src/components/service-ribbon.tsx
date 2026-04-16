import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

type ServiceTile = {
  title: string;
  promise: string;
  anchor: string;
};

const tiles: ServiceTile[] = [
  {
    title: "Keukenrenovatie",
    promise: "Van strip tot opleveringsklaar. Eén team, één tijdlijn.",
    anchor: "#keuken",
  },
  {
    title: "Badkamerrenovatie",
    promise: "Van tegelstrip tot warmtepomp-aansluiting. Waterdicht afgewerkt.",
    anchor: "#badkamer",
  },
  {
    title: "Volledige woningrenovatie",
    promise: "Complete verbouwingen en herbestemmingen. Ook bij monumentale panden.",
    anchor: "#volledige-renovatie",
  },
  {
    title: "Uitbouw & aanbouw",
    promise: "Extra ruimte die aansluit op het bestaande werk. Vergunning tot oplevering.",
    anchor: "#uitbouw",
  },
];

export function ServiceRibbon() {
  return (
    <div>
      <p className="mb-8 text-xs uppercase tracking-widest text-[#6B6B6B]">
        Wat we bouwen
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            // @ts-expect-error - pathname hash
            href={`/diensten${tile.anchor}`}
            className="group flex flex-col justify-between rounded-sm border border-[#E8E4DD] bg-[#FAFAF7] p-6 transition-all hover:border-[#C14B2D] hover:shadow-sm"
          >
            <div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-[#1A1A1A]">
                {tile.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{tile.promise}</p>
            </div>
            <ArrowRight className="mt-6 h-4 w-4 text-[#C14B2D] transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
