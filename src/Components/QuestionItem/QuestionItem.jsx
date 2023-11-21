import { Link } from "react-router-dom";

const QuestionItem = ({ question }) => {
  return (
    <Link key={question._id} to={`/question/${question._id}`}>
      <li>
        <div className="py-2 px-4 rounded bg-slate-700">
          <div className="flex">
            <div className="flex-1 flex items-center gap-x-2">
              <img
                src={`http://127.0.0.1:5000/media/profiles/${question.creatorID.avatar}`}
                className="w-14 h-14 rounded-full shrink-0"
                alt=""
              />
              <p className="text-slate-200 font-morabba-medium text-base line-clamp-1">
                {question.title}
              </p>
            </div>
            <div className="flex-1 flex items-center justify-end gap-x-1">
              {question.isHasTrueAnswer ? (
                <span className="bg-green-500 min-w-[105px] text-sm font-morabba-medium px-1 rounded text-slate-200">
                  کاربر به جواب رسیده
                </span>
              ) : (
                <span className="bg-red-500 min-w-[105px] text-sm font-morabba-medium px-1 rounded text-slate-200">
                  کاربر به جواب نرسیده
                </span>
              )}
              <span className="min-w-[105px] text-center bg-violet-500 text-sm font-morabba-medium px-1 rounded text-slate-200">
                {question.categoryID.title}
              </span>
              <span className="min-w-[65px] text-center bg-green-600 font-morabba-medium text-sm rounded px-2 text-slate-200">
                پاسخ ها : {question.answerCount}
              </span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
export default QuestionItem;
