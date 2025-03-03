type HighlightCardProps = {
  title: string;
  categories: { title: string; items: string[] }[];
};

const HighlightCard: React.FC<HighlightCardProps> = ({ title, categories }) => {
  return (
    <div className="second-container w-fit p-4 rounded-lg shadow-md bg-gray-800">
      <h2 className="text-2xl font-semibold text-amber-500 mb-3">{title}</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="font-semibold text-white">{category.title}</h3>
            <ul className="list-disc list-inside text-gray-300">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightCard;
