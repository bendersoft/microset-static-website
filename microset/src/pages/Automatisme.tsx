import Page from "../components/Page";
import HighlightCard from "../components/HighlightCard";

const Automatisme = () => {
  const cards = [
    {
      id: 1,
		title: "Présentation",
      subtitle: "Notre expertise en automatisme",
      content:
        "Nous assurons la réalisation de vos automatismes, de la conception de vos schématiques électrique ou mécanique à la maintenance de vos équipements.",
    },
    {
		id: 2,
      title: "Nos compétences",
      subtitle: "Domaines d'expertise",
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
		id: 3,
      title: "Nos réalisations",
      subtitle: "Exemples de projets",
      content: [
        "Autoclaves",
        "Étuves",
        "Fours",
        "Polisseuses",
        "Bancs de tests",
        "Machines spéciales",
      ],
    },
  ];

  const references = {
    title: "Nos références",
    categories: [
      {
        title: "Aéronautique",
        items: ["EADS", "AIRBUS", "Latécoère", "Eurocopter", "Letov", "Corse Composite", "IUT Toulouse"],
      },
      { title: "Automobile", items: ["Ford", "Delphi", "Bilz"] },
      { title: "Transport", items: ["EDF", "SNCF", "PAB"] },
      { title: "Optique", items: ["Sagem"] },
      { title: "Composite", items: ["Epsilon"] },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 mx-auto">
      <div className="flex-1">
        <Page title="Automatisme" cards={cards} />
      </div>
      <div className="w-fit">
        <HighlightCard {...references} />
      </div>
    </div>
  );
};

export default Automatisme;
