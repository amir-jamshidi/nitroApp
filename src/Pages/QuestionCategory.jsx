import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";
import baseApi from "./../Configs/Axios";
import { useParams } from "react-router-dom";
import QuestionItem from "./../Components/QuestionItem/QuestionItem";

const QuestionCategory = () => {
  const [category, setCategory] = useState({});
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions();
  }, []);

  const { href } = useParams();

  const getQuestions = async () => {
    baseApi.get(`questions/category/${href}`).then((response) => {
      setCategory(response.data);
      setQuestions(response.data.questions);
    });
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 p-2 bg-slate-800 rounded">
          <TitleSection title={`سوالات دسته بندی " ${category.title} "`} />
          <div className="mt-8 pb-4">
            <ul className="flex flex-col gap-y-1 px-4">
              {questions?.map((question) => (
                <QuestionItem key={question._id} question={question} />
              ))}
              <div></div>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionCategory;
