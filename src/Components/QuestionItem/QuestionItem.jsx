import {
  HelpRounded,
  MessageRounded,
  VerifiedRounded,
  WorkspacesRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const QuestionItem = ({ question }) => {
  return (
    <Link key={question._id} to={`/question/${question._id}`}>
      <li>
        <div className="py-2 px-4 rounded bg-slate-100  dark:bg-slate-700 ">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 flex items-center gap-x-2">
              <img
                src={`http://127.0.0.1:5000/media/profiles/${question.creatorID.avatar}`}
                className="w-14 h-14 rounded-full shrink-0"
                alt=""
              />
              <p className="text-slate-700 dark:text-slate-200 font-morabba-medium text-base line-clamp-1">
                {question.title}
              </p>
            </div>
            <div className="flex-1 flex-col md:flex-row items-end gap-y-1 mt-2 md:mt-0 flex md:items-center justify-end gap-x-1 ">
              {question.isHasTrueAnswer ? (
                <div className="py-1 px-2 gap-x-1 flex justify-center items-center  rounded ">
                  <VerifiedRounded
                    sx={{ width: 18, height: 18 }}
                    className="text-green-500"
                    fontSize="small"
                  />
                  <span className="text-sm text-slate-800 dark:text-slate-200">
                    پاسخ داده شد
                  </span>
                </div>
              ) : (
                <div className="py-1 px-2 gap-x-1 flex justify-center items-center  rounded ">
                  <HelpRounded
                    sx={{ width: 18, height: 18 }}
                    className="text-red-500"
                    fontSize="small"
                  />
                  <span className="text-sm text-slate-800 dark:text-slate-200">
                    بدون پاسخ درست
                  </span>
                </div>
              )}
              <div className="py-1 px-2 gap-x-1 flex justify-center items-center  rounded ">
                <WorkspacesRounded
                  sx={{ width: 18, height: 18 }}
                  className="text-violet-500"
                  fontSize="small"
                />
                <span className="text-sm text-slate-800 dark:text-slate-200">
                  {" "}
                  {question.categoryID.title}
                </span>
              </div>

              <div className="py-1 px-2 gap-x-1 flex justify-center items-center  rounded ">
                <MessageRounded
                  sx={{ width: 18, height: 18 }}
                  className="text-green-500"
                  fontSize="small"
                />
                <span className="text-sm text-slate-800 dark:text-slate-200">
                  {question.answerCount} پاسخ
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
export default QuestionItem;
