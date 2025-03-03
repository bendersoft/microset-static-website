import CardContent from "./CardContent";
import type { CardContentType } from "../types";

const MainPage: React.FC<{cards: CardContentType[] }> = ({cards}) => {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-wrap gap-6 justify-between">
				{cards.map((card) => (
					<CardContent key={card.id} {...card} />
				))}
			</div>
		</div>
	);
};

export default MainPage;
