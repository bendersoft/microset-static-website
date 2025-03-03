import Page from "../components/Page";

const Vinicole = () => {
	const cards = [
		{
			id: 1,
			title: "Nos Services",
			subtitle: "Solutions pour le domaine viticole",
			content: ["Gestion des récoltes", "Suivi de fermentation", "Traçabilité"],
		},
		{
			id: 2,
			title: "Nos Clients",
			subtitle: "Vignerons et domaines partenaires",
			content: ["Domaine A", "Château B", "Cave C"],
		},
	];

	return <Page title="Secteur Vinicole" cards={cards} />;
};

export default Vinicole;
