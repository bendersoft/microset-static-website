type MainCardProps = {
    title: string;
    subtitle: string;
    content: string;
  };

const MainCard: React.FC<MainCardProps> = ({ title, subtitle, content }) => {
  return (
    <div className="main-container p-6 mb-6 w-full">
        <div className="flex flex-col sm:flex-row items-baseline sm:gap-2">
            <h1 className="page-title">{title}</h1>
            <h2 className="main-card-title">{subtitle}</h2>
        </div>
      <p className="text-pretty">{content}</p>
    </div>
  );
};

export default MainCard;
