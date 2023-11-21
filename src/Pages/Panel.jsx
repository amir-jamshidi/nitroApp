import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";

const Panel = () => {
  return (
    <>
      <Header />
      <div className="container mt-14">
        <div className="p-2 bg-slate-800 rounded">
          <TitleSection title={"اخرین پرسش هــای من"} />
        </div>
        <div className="p-2 bg-slate-800 rounded">
          <TitleSection title={"ســوال هــای ذخیره شده"} />
        </div>
        <div className="p-2 bg-slate-800 rounded">
          <TitleSection title={"اطلاعات حسـاب کاربری من"} />
        </div>
      </div>
    </>
  );
};

export default Panel;
