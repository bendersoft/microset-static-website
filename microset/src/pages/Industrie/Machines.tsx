import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const Machines = () => {
  const presentation = {
    title: "Industrie",
    subtitle: "Machines spéciales",
    content: "MICROSET ing. réalise la conception mécanique, automatique et informatique"
}
  const cards = [
    {
      title: "Nos compétences",
      subtitle: "Réalisation de machines spéciales sur cahier des charges, clé en main",
      content: [
      ],
    },
  ];

  const references = {
    title: "Nos références",
    categories: [
      {
        id: 1,
		title: "TODO",
        items: ["TODO", "TODO", "TODO"],
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
      <div className="w-fit">
        <HighlightCard {...references} />
      </div>
    </div>
  );
};

export default Machines;
