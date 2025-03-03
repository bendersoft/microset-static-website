import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const IndusInformatique = () => {
  const presentation = {
    title: "Industrie",
    subtitle: "Informatique",
    content: "WinProcess est un progiciel destiné au pilotage d'autoclaves et d'étuves (programmation, contrôle, acquisition de mesures de pression, de température et de vide)."
}
  const cards = [
    {
		id: 1,
      title: "WINPROCESS : logiciel de pilotage d'autoclaves",
      subtitle: "WinProcess est une application destinée à la conduite d'autoclaves.",
      content: [
        "Pilotage",
        "Régulation",
        "Enregistrement",
        "Surveillance",
        "Contrôle",
        "Fabrication",
        "Câblage petite / moyenne et grosse puissance",
        "Maintenance",
        "Schématique électrique",
        "Schématique mécanique",
      ],
    },
    {
		id: 2,
      title: "Supervision",
      subtitle: "Synoptiques de réalisation industrielle.",
      content:"",
    },
    {
    id: 3,
      title: "Nos compétences",
      subtitle: "Hardware et software",
      content: [
        "Mise en place de systèmes",
        "Réseaux",
        "Progiciels de pilotage",
      ],
    },
  ];

  const references = {
    title: "Nos références",
    categories: [
      {
        id: 1,
		title: "Aéronautique",
        items: ["EADS", "AIRBUS", "Latécoère", "Eurocopter", "Letov", "Corse Composite", "IUT Toulouse"],
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

export default IndusInformatique;
