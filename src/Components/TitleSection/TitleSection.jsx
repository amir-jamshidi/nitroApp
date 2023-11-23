const TitleSection = ({ title }) => {
  return (
    <div className="border-b border-b-black/5 dark:border-b-white/5 pb-2">
      <p className="font-morabba-medium text-center text text-slate-800 dark:text-slate-200  text-lg">
        {title}
      </p>
    </div>
  );
};

export default TitleSection;
