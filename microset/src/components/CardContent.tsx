import type { CardContentType } from "../types";

const CardContent: React.FC<CardContentType> = ({
	id,
	title,
	subtitle,
	content,
}) => {
	return (
		<div className="main-container">
			<h2 className="main-card-title">{title}</h2>
			<h3 className="text-gray-300 font-semibold mb-3">{subtitle}</h3>
			{Array.isArray(content) ? (
				<ul className="list-disc list-inside">
					{content.map((item) => (
						<li key={id}>{item}</li>
					))}
				</ul>
			) : (
				<p>{content}</p>
			)}
		</div>
	);
};

export default CardContent;
