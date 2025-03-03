import CardContent from "./CardContent";
import type { CardContentType } from "../types";
import { v4 as uuidv4 } from "uuid";

const MainPage: React.FC<{cards: CardContentType[] }> = ({cards}) => {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-wrap gap-6 justify-between">
				{cards.map((card) => (
					<CardContent key={uuidv4()} {...card} />
				))}
			</div>
		</div>
	);
};

export default MainPage;
