import CardContent from "./CardContent";
import type { CardContentType } from "../types";

const Page: React.FC<{ title: string; cards: CardContentType[] }> = ({
	title,
	cards,
}) => {
	return (
		<div className="p-6 max-w-6xl mx-auto">
			<h1 className="text-3xl font-bold text-cyan-300 mb-4">{title}</h1>
			<div className="flex flex-wrap gap-6">
				{cards.map((card) => (
					<CardContent key={card.id} {...card} />
				))}
			</div>
			<div className="second-container w-fit">
				<h2 className="text-2xl font-semibold text-amber-500 mb-3">
					Nos références
				</h2>
				<div className="flex flex-col gap-3">
					{[
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
						{ title: "Automobile", items: ["Ford", "Delphi", "Bilz"] },
						{ title: "Transport", items: ["EDF", "SNCF", "PAB"] },
						{ title: "Optique", items: ["Sagem"] },
						{ title: "Composite", items: ["Epsilon"] },
					].map((category) => (
						<div key={category.title}>
							<h3 className="font-semibold">{category.title}</h3>
							<ul className="list-disc list-inside">
								{category.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
