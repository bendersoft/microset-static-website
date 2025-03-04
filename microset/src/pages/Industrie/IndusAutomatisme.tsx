import MainPage from "../../components/MainPage";
import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";

const IndusAutomatisme = () => {
	const presentation = {
		title: "Industrie",
		subtitle: "Automatisme",
		content:
			"Nous assurons la réalisation de vos automatismes, de la conception de vos schématiques électrique ou mécanique à la maintenance de vos équipements.",
	};
	const cards = [
		{
			id: 1,
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
			id: 2,
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
				id: 1,
				title: "Aéronautique",
				items: [
					"EADS",
					"AIRBUS",
					"Latécoère",
					"Eurocopter",
					"Letov",
					"Corse Composite",
					"IUT Toulouse",
				],
			},
			{ id: 2, title: "Automobile", items: ["Ford", "Delphi", "Bilz"] },
			{ id: 3, title: "Transport", items: ["EDF", "SNCF", "PAB"] },
			{ id: 4, title: "Optique", items: ["Sagem"] },
			{ id: 5, title: "Composite", items: ["Epsilon"] },
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

export default IndusAutomatisme;
