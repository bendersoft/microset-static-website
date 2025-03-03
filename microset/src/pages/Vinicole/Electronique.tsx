import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const Electronique = () => {
  const presentation = {
    title: "Industrie",
    subtitle: "Informatique",
    content: "MICROSET ing. est spécialiste dans la fabrication de cartes électroniques dédiées aux applications vinicoles."
}
  const cards = [
    {
      title: "Nos prestations",
      subtitle: "Nous pouvons assurer différents servoces, n'hésitez pas à nous contacter",
      content: [
        "Réalisation sur cahier de charges",
        "Clé en main",
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

export default Electronique;
