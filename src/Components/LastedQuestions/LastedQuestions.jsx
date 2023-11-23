import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainQuestions } from "../../Redux/Reducers/mainQuestions";
import { Link } from "react-router-dom";
import LoadingSection from "../LoadingSection/LoadingSection";
import QuestionItem from "../QuestionItem/QuestionItem";

const LastedQuestions = () => {
  const dispatch = useDispatch();
  const { mainQuestions, loading } = useSelector(
    (state) => state.mainQuestions
  );

  useEffect(() => {
    dispatch(getMainQuestions());
  }, []);

  if (loading) return <LoadingSection />;

  return (
    <div>
      <ul className="flex flex-col mx-4 gap-y-1">
        {mainQuestions?.map((question) => (
          <QuestionItem key={question._id} question={question} />
        ))}
      </ul>
      <Link to={"/questions"} className="flex mt-1">
        <button className="flex-1 mx-4 border bg-slate-300 text-slate-800 border-white/10 py-2 rounded dark:bg-transparent dark:text-slate-300 mb-3">
          همـــه سوالا هــا
        </button>
      </Link>
    </div>
  );
};
export default LastedQuestions;
