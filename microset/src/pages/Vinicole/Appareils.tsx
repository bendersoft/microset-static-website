import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const Appareils = () => {
  const presentation = {
    title: "Vinivole",
    subtitle: "Appareils",
    content: "MICROSET ing. vous apporte les solutions pour toute vente, installation et maintenance de vos matériels vinicoles, afin d'améliorer votre qualité et votre productivité."
}
  const cards = [
    {
      title: "Nos prestations",
      subtitle: "Exemples d'appareils :",
      content: [
        "Carotteuses",
        "Échantillonneurs",
        "Refractomètres",
        "Stations de mesure Qualité",
        "Pompes prise de moût",
        "Pompes sulfitage",
        "Groupes de chaud / froid réversibles",
        "Compresseurs",
        "Pompes de remontée",
        "Sondes de niveaux",
        "Systèmes de chasse à l'air automatique",
        "Armoires de régulation chaud / froid",
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

export default Appareils;
