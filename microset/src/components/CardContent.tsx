import type { CardContentType } from "../types";
import { v4 as uuidv4 } from "uuid";

const CardContent: React.FC<CardContentType> = ({
	title,
	subtitle,
	content,
}) => {
	return (
		<div className="main-container">
			<h2 className="main-card-title">{title}</h2>
			<h3 className="text-gray-300 font-semibold sm:mb-3">{subtitle}</h3>
			{Array.isArray(content) ? (
				<ul className="list-disc list-inside sm:pl-6">
					{content.map((item) => (
						<li key={uuidv4()}>{item}</li>
					))}
				</ul>
			) : (
				<p>{content}</p>
			)}
		</div>
	);
};

export default CardContent;
