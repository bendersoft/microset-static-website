import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const ViniAutomatisme = () => {
  const presentation = {
    title: "Vinicole",
    subtitle: "Automatisme",
    content: "MICROSET ing. est spécialiste dans la gestion complète d'un poste de réception de vendanges (commande et puissance électrique). Il assure également les mesures Qualité (appareils d'échantillonnage, carotteuses, stations Qualité, réfractomètres…)."
}
  const cards = [
    {
      title: "Nos prestations",
      subtitle: "Nous proposons un servoce qui va du grain au caviste",
      content: [
        "Réception vendanges : quai qualité et Quai Réception",
        "Prise de moût : Échantillonage, Carottage, Station de mesure Qualité (qualité, degré, phénolique, pH, acidité totale), Réfractomètre",
        "Sulfitage : Pompe doseuse",
        "Chasse à l'air automatique",
        "Gestion du remplissage de la cuverie : Automatique ou manuelle",
        "Thermorégulation",
        "Vente et entretien : Réfractomètre, Compresseur, Groupe chaud / froid, Station de mesure Qualité",
      ],
    },
  ];

  const references = {
    title: "Nos références",
    categories: [
      {
        id: 1,
		title: "TODO",
        items: ["Caves", "Châteaux"],
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 mx-auto">
      <div className="flex-1">
      <MainCard
          title={presentation.title}
          subtitle={presentation.subtitle}
          content={presentation.content}
        />
        <MainPage cards={cards} />
      </div>
      <div className="sm:w-fit">
        <HighlightCard {...references} />
      </div>
    </div>
  );
};

export default ViniAutomatisme;
