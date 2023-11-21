import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllQuestions } from "../Redux/Reducers/allQuestion";
import TitleSection from "../Components/TitleSection/TitleSection";
import QuestionItem from "../Components/QuestionItem/QuestionItem";

const Questions = () => {
  const questions = useSelector((state) => state.allQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 p-2 bg-slate-800 rounded">
          <TitleSection title="همه سوال هــا" />
          <div className="mt-8 pb-4">
            <ul className="flex flex-col gap-y-1 px-4">
              {questions?.map((question) => (
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
