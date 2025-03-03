type MainCardProps = {
    title: string;
    subtitle: string;
    content: string;
  };

const MainCard: React.FC<MainCardProps> = ({ title, subtitle, content }) => {
  return (
    <div className="main-container p-6 mb-6 w-full">
        <div className="flex flex-row items-center gap-2">
            <h1 className="page-title">{title}</h1>
            <span> - </span>
            <h2 className="main-card-title">{subtitle}</h2>
        </div>
      <p>{content}</p>
    </div>
  );
};

export default MainCard;
