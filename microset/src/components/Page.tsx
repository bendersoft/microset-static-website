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
		</div>
	);
};

export default Page;
