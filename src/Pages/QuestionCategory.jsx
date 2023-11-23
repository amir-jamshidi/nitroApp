import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";
import baseApi from "./../Configs/Axios";
import { useParams } from "react-router-dom";
import QuestionItem from "./../Components/QuestionItem/QuestionItem";
import LoadingSection from "../Components/LoadingSection/LoadingSection";

const QuestionCategory = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions();
  }, []);

  const { href } = useParams();

  const getQuestions = async () => {
    baseApi
      .get(`questions/category/${href}`)
      .then((response) => {
        setCategory(response.data);
        setQuestions(response.data.questions);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  if (loading) return <LoadingSection />;

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 p-2 bg-slate-200 dark:bg-slate-800 rounded">
          <TitleSection title={`سوالات دسته بندی " ${category.title} "`} />
          <div className="mt-8 pb-4">
            {questions.length === 0 ? (
              <div>
                <p className="text-center text-slate-700">سوالی پرسیده نشده !</p>
              </div>
            ) : (
              <ul className="flex flex-col gap-y-1 px-4">
                {questions?.map((question) => (
                  <QuestionItem key={question._id} question={question} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionCategory;
