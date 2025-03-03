import { v4 as uuidv4 } from "uuid";

type HighlightCardProps = {
  title: string;
  categories: { title: string; items: string[] }[];
};

const HighlightCard: React.FC<HighlightCardProps> = ({ title, categories }) => {
  return (
    <div className="second-container">
      <h2 className="second-card-title">{title}</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="font-semibold text-white">{category.title}</h3>
            <ul className="list-disc list-inside text-gray-300">
              {category.items.map((item) => (
                <li key={uuidv4()}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightCard;
