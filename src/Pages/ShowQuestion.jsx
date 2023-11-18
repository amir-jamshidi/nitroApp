import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleQuestion } from "../Redux/Reducers/singleQuestion";

const ShowQuestion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.singleQuestion);

  useEffect(() => {
    dispatch(getSingleQuestion(id));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 bg-slate-800 p-2 rounded">
          <div className="border-b border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-200 text-lg">
              جزئیــات سوال
            </p>
          </div>
          <div className="mt-8 p-2">
            <div className="rounded p-2">
              <div className="flex items-center gap-x-2">
                <img
                  className="w-20 h-20 rounded-full border border-white/10 self-start"
                  src="http://127.0.0.1:5000/media/profiles/userAvatar.png"
                  alt=""
                />
                <div className="mt-4 w-full">
                  <span className="font-morabba-medium text-sm text-slate-400">
                    {question?.creatorID?.fullname}
                  </span>
                  <p className="font-morabba-medium text-lg text-slate-200">
                    {question.title}
                  </p>

                  <div className="border-t w-full border-t-white/5 pt-3 mt-3">
                    <p className="font-morabba-medium text-slate-300 text-justify ">
                      {question.body}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-x-1">
                <span className="font-morabba-medium bg-green-500 rounded text-slate-200 px-2 text-sm py-0.5">
                  تعداد پاسخ ها : 10
                </span>
                <span className="font-morabba-medium bg-green-500 rounded text-slate-200 px-2 text-sm py-0.5">
                  وضعیت : کاربر به جواب نرسیده
                </span>
                <span className="font-morabba-medium bg-green-500 rounded text-slate-200 px-2 text-sm py-0.5">
                  دسته بندی سوال : جاوا اسکریپت
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowQuestion;
