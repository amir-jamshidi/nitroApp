import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAnswerFn,
  getSingleQuestion,
} from "../Redux/Reducers/singleQuestion";
import {
  ThumbUpRounded,
  VerifiedRounded,
} from "@mui/icons-material";
import Footer from "../Components/Footer/Footer";

const ShowQuestion = () => {
  const [body, setBody] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.singleQuestion);

  useEffect(() => {
    dispatch(getSingleQuestion(id));
  }, []);

  const addNewAnswer = (e) => {
    e.preventDefault();
    dispatch(addNewAnswerFn({ body, questionID: question._id })).then(() => {
      setBody("");
    });
  };

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
          <div className="flex justify-center  mt-4">
            <p className="text-center font-morabba-medium text-slate-200 text-sm bg-blue-500 rounded px-2 py-0.5">
              ایجاد شده در تاریخ :{" "}
              <span className="font-dana-bold text-sm">22/08/02</span>
            </p>
          </div>
          <div className="mt-4 p-2">
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
              <div className="flex justify-end gap-x-1 mt-3">
                <span className="font-morabba-medium bg-red-500 rounded text-slate-200 px-2 text-sm py-0.5">
                  وضعیت : کاربر به جواب نرسیده
                </span>
                <span className="font-morabba-medium bg-violet-500 rounded text-slate-200 px-2 text-sm py-0.5">
                  دسته بندی سوال : جاوا اسکریپت
                </span>
                <span className="font-morabba-medium bg-green-500 rounded text-slate-200 px-2 text-sm py-0.5">
                  تعداد پاسخ ها : 10
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-slate-800 rounded p-2">
          <div className="border-b border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-200 text-lg">
              پاسخ هــا
            </p>
          </div>
          <ul className="mt-4 px-4 divide-y divide-white/5 gap-y-6 flex flex-col pb-8">
            {question?.answers?.map((answer) => (
              <li className="pt-4">
                <div className="flex flex-col">
                  <div className="flex gap-x-2">
                    <img
                      src="http://127.0.0.1:5000/media/profiles/userAvatar.png"
                      className="w-16 h-16 rounded-full border border-white/5"
                      alt=""
                    />
                    <div className="mt-2.5">
                      <p className="text-slate-400 font-morabba-medium text-sm">
                        <span className="font-morabba-medium">
                          {answer.creatorID.fullname}
                        </span>
                        {Number(answer.isTrueAnswer) === 1 && (
                          <span className="mr-1 text-green-500">
                            <VerifiedRounded fontSize="small" />
                          </span>
                        )}
                      </p>
                      <p className="font-morabba-medium text-slate-300 mt-0.5 ">
                        {answer.body}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3">
                    <div className="min-w-[70px] cursor-pointer hover:bg-blue-600 transition-colors text-slate-200 px-3 gap-x-1 border border-white/10 rounded-lg flex justify-center items-center">
                      <ThumbUpRounded
                        fontSize="small"
                        className="text-slate-200"
                      />
                      <p className="font-dana-bold pt-1">{answer.like}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 bg-slate-800 rounded p-2">
          <div className="border-b border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-200 text-lg">
              ارســـال پاسخ
            </p>
          </div>
          <form action="" className="mx-2 pb-4">
            <textarea
              className="w-full min-h-[200px] max-h-[250px] rounded mt-8 bg-slate-700 p-2 font-morabba-medium text-slate-200 outline-none border-none"
              placeholder="متن پاسخ شما ..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button
              onClick={addNewAnswer}
              className="w-full bg-green-500 py-1 rounded text-slate-200 font-morabba-medium"
            >
              ارسال پاسخ
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowQuestion;
