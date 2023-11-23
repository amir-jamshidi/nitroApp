import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllQuestions } from "../Redux/Reducers/allQuestion";
import TitleSection from "../Components/TitleSection/TitleSection";
import QuestionItem from "../Components/QuestionItem/QuestionItem";
import LoadingSection from "../Components/LoadingSection/LoadingSection";

const Questions = () => {
  const {allQuestions , loading} = useSelector((state) => state.allQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  console.log(loading);
  if(loading) return <LoadingSection/>

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 p-2 bg-slate-200 dark:bg-slate-800 rounded">
          <TitleSection title="همه سوال هــا" />
          <div className="mt-8 pb-4">
            <ul className="flex flex-col gap-y-1 px-4">
              {allQuestions?.map((question) => (
                <QuestionItem question={question} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Questions;
