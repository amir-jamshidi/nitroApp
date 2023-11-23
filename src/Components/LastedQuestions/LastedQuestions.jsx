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
      <Link to={"/questions"} className="flex">
        <button className="flex-1 border border-white/10 py-2 rounded text-slate-300 mb-3 mx-4 mt-2">
          همه دسته بندی ها
        </button>
      </Link>
    </div>
  );
};
export default LastedQuestions;
