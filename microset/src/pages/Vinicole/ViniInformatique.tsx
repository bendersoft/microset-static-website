import HighlightCard from "../../components/HighlightCard";
import MainCard from "../../components/MainCard";
import MainPage from "../../components/MainPage";

const ViniInformatique = () => {
	const presentation = {
		title: "Vinicole",
		subtitle: "Informatique",
		content:
			"Nous distribuons des solutions complètes de gestion de la vendange articulées autour du logiciel Quai Récep. Quai Récep gère en totalité les apports de vendange (quai de réception / bascule, mesures qualité, gestion de l'acheminement en cuves, paiement), le tout en réseau multi-postes. Les données de différents sites peuvent être centralisées à distance, via réseau sécurisé (RTC / VPN) . Les solutions Quai Récep sont composées à partir des applications suivantes : Quai Récep, Wine-Up, Helios, Cuverie (acheminement en cuves par ordinateur). SynoBuilder est une application extrêmement puissante dédiée à la réalisation de synoptiques informatiques.",
	};
	const cards = [
		{
			title: "QUAI RECEP",
			subtitle: "Un logiciel de réception de la vendange",
			content: [
				"Gestion automatisme du quai",
				"Communications multi protocoles avec appareils de mesure",
				"Gestion automatique vannerie (sur synoptique PC)",
				"Gestion des remplissages des cuves",
				"Gestion du mode de paiement",
				"Réseau multipostes.",
			],
		},
		{
			title: "WINE UP",
			subtitle: "Un logiciel de remontage de la vendange",
			content: [
				"Remontage automatique des moûts",
				"Réseau multipostes",
				"Gestion 24H/24",
				"Gestion globale ou par groupe de cuves",
				"Mode manuel ou automatique",
				"Gestion des alarmes.",
			],
		},
		{
			title: "HELIOS",
			subtitle: "Un logiciel de régulation",
			content: [
				"Pilotage ou supervision sur PC de l’armoire de régulation ou pilotage de l’armoire de régulation (consigne de température)",
				"Alarmes seuil haut et seuil bas",
				"Edition de tableaux (remplissage, densité, acidité, cépages, etc.)",
				"Statistiques par année",
			],
		},
		{
			title: "SYNOBUILDER",
			subtitle: "Un logiciel de supervision",
			content: [
				"Synoptique ou pilotage d’un automatisme complet en liaison avec un automate.",
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

export default ViniInformatique;
