import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const Autoclaves = () => {
	const presentation = {
		title: "Industrie",
		subtitle: "Autoclaves",
		content:
			"Pilotage, automatisme et informatique d'autoclaves pour composites.",
	};
	const cards = [
		{
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

export default Autoclaves;
