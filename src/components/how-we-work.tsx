import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Gesprek",
    body: "We komen langs, luisteren naar wat u wilt, en geven ter plekke een eerlijk oordeel over wat haalbaar is en wat niet.",
  },
  {
    number: "02",
    title: "Plan",
    body: "Binnen één week: een gedetailleerde offerte, planning, en materialenlijst. Geen verborgen posten.",
  },
  {
    number: "03",
    title: "Bouw",
    body: "Ons eigen team voert het werk uit. Wekelijkse update, één aanspreekpunt, open communicatie als er iets verandert.",
  },
  {
    number: "04",
    title: "Oplevering",
    body: "We lopen het werk met u door. Wat u ziet is wat u krijgt. Twaalf maanden nazorg op ons werk.",
  },
];

export function HowWeWork() {
  return (
    <div>
      <div className="mb-12 max-w-3xl">
        <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
          Vier stappen, geen verrassingen.
        </h2>
        <p className="text-lg text-[#6B6B6B]">
          Van eerste gesprek tot sleuteloverdracht weet u altijd waar we staan en wat de volgende
          stap is.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col lg:border-l lg:border-[#E8E4DD] lg:pl-6 first:lg:border-l-0 first:lg:pl-0"
          >
            <div className="mb-4 font-serif text-4xl font-medium text-[#C14B2D]">
              {step.number}
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              {step.title}
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>

      <Link
        href="/over-ons"
        className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-[#C14B2D] hover:text-[#A83A1E]"
      >
        Meer over hoe we werken
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
