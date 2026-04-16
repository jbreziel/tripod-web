const proofs = [
  {
    number: "1",
    title: "Eigen team, geen onderaannemers",
    body:
      "Bij Tripod werken onze eigen vakmannen aan uw project — geen wisselende onderaannemers die elke week weer een ander gezicht sturen. Dat betekent één aanspreekpunt, consistente kwaliteit, en verantwoording die bij ons blijft liggen.",
  },
  {
    number: "2",
    title: "Transparante prijzen vanaf dag één",
    body:
      "Onze online richtprijs-calculator geeft u binnen één minuut een realistische indicatie — zonder dat u eerst uw contactgegevens hoeft af te staan. En onze offertes zijn uitgesplitst per post, zodat u precies ziet waar uw budget naartoe gaat.",
  },
  {
    number: "3",
    title: "Twintig jaar vakmanschap",
    body:
      "Onze aannemer Guus Merkx heeft twintig jaar ervaring in de bouw — van kleine badkamerrenovaties tot complete boerderij-herbestemmingen. Die ervaring zit in elk detail: het voegwerk dat strak blijft, de vloer die niet kraakt, het dak dat dicht is — ook over vijf winters.",
  },
];

export function WhyTripod() {
  return (
    <div>
      <div className="mb-12 max-w-3xl">
        <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
          Waarom huiseigenaren voor Tripod kiezen.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {proofs.map((proof) => (
          <div key={proof.number}>
            <div className="mb-3 font-serif text-4xl font-medium text-[#C14B2D]">
              {proof.number}
            </div>
            <div className="mb-4 h-[2px] w-10 bg-[#C14B2D]" />
            <h3 className="mb-4 font-serif text-xl font-semibold text-[#1A1A1A]">
              {proof.title}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed">{proof.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
