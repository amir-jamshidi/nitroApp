import { useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";
import QuestionItem from "../Components/QuestionItem/QuestionItem";

const Panel = () => {
  const authInfos = useSelector((state) => state.authInfos);

  return (
    <>
      <Header />
      <div className="container mt-14">
        <div className="p-2 bg-slate-800 rounded mb-8">
          <TitleSection title={"اخرین پرسش هــای من"} />
          <div className="mx-4 mt-8 pb-4">
            <ul className="flex flex-col gap-y-1">
              {authInfos?.questions?.map((question) => (
                <QuestionItem key={question._id} question={question} />
              ))}
            </ul>
          </div>
        </div>
        <div className="p-2 bg-slate-800 rounded mb-8">
          <TitleSection title={"ســوال هــای ذخیره شده"} />
          <div className="mx-4 mt-8 pb-4">
            <ul className="flex flex-col gap-y-1">
              {authInfos?.saveQuestions?.map((question) => (
                <QuestionItem
                  key={question._id}
                  question={question.questionID}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="p-2 bg-slate-800 rounded">
          <TitleSection title={"اطلاعات حسـاب کاربری من"} />
        </div>
      </div>
    </>
  );
};

export default Panel;
