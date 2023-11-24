import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAnswerFn,
  getSingleQuestion,
} from "../Redux/Reducers/singleQuestion";
import {
  AccessTimeFilledRounded,
  HelpRounded,
  MessageRounded,
  ThumbUpRounded,
  VerifiedRounded,
  WorkspacesRounded,
} from "@mui/icons-material";
import Footer from "../Components/Footer/Footer";
import LoadingSection from "../Components/LoadingSection/LoadingSection";
import NotFound from "../Components/NotFound/NotFound";

const ShowQuestion = () => {
  const [body, setBody] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.authInfos);

  const { question, loading, isError } = useSelector(
    (state) => state.singleQuestion
  );

  useEffect(() => {
    dispatch(getSingleQuestion(id));
  }, []);

  const addNewAnswer = (e) => {
    e.preventDefault();
    dispatch(addNewAnswerFn({ body, questionID: question._id })).then(() => {
      setBody("");
    });
  };

  if (loading) return <LoadingSection />;
  
  if (isError) return <NotFound />;

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 bg-slate-200 dark:bg-slate-800 p-2 rounded">
          <div className="border-b border-b-black/5 dark:border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-700 dark:text-slate-200 text-lg">
              جزئیــات سوال
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="py-1 px-2 gap-x-1 flex justify-center items-center border border-black/5 dark:border-white/5 rounded min-w-[125px] md:min-w-[80px]">
              <AccessTimeFilledRounded
                sx={{ width: 18, height: 18 }}
                className="text-green-500"
                fontSize="small"
              />
              <div>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  ایجاد شده در{" "}
                </span>
                <span className="text-sm font-dana-bold text-slate-700 dark:text-slate-300">
                  12/11/402
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-2">
            <div className="rounded p-2">
              <div className="flex items-center gap-x-2">
                <img
                  className="w-20 h-20 rounded-full border border-white/10 self-start"
                  src={`http://127.0.0.1:5000/media/profiles/${question?.creatorID?.avatar}`}
                  alt=""
                />
                <div className="mt-4 w-full">
                  <span className="font-morabba-medium text-sm text-slate-700 dark:text-slate-400">
                    {question?.creatorID?.fullname}
                  </span>
                  <p className="font-morabba-medium text-lg text-slate-800 dark:text-slate-200">
                    {question.title}
                  </p>

                  <div className="border-t w-full border-t-black/5 dark:border-t-white/5 pt-3 mt-3">
                    <p className="font-morabba-medium text-slate-700 dark:text-slate-300 text-justify ">
                      {question.body}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-10 flex-col gap-y-1 md:flex-row justify-end gap-x-1 md:mt-3">
                {question.isHasTrueAnswer ? (
                  <div className="py-1 px-2 gap-x-1 flex justify-center items-center border border-black/5 dark:border-white/10 rounded min-w-[125px]">
                    <VerifiedRounded
                      sx={{ width: 18, height: 18 }}
                      className="text-green-500"
                      fontSize="small"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-200">
                      پاسخ داده شد
                    </span>
                  </div>
                ) : (
                  <div className="py-1 px-2 gap-x-1 flex justify-center items-center border border-black/5 dark:border-white/10 rounded min-w-[125px] md:min-w-[125px]">
                    <HelpRounded
                      sx={{ width: 18, height: 18 }}
                      className="text-red-500"
                      fontSize="small"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-200">
                      بدون پاسخ درست
                    </span>
                  </div>
                )}
                <div className="py-1 px-2 gap-x-1 flex justify-center items-center border border-black/5 dark:border-white/10 rounded min-w-[125px] md:min-w-[120px]">
                  <WorkspacesRounded
                    sx={{ width: 18, height: 18 }}
                    className="text-violet-500"
                    fontSize="small"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-200">
                    {" "}
                    {question.categoryID?.title}
                  </span>
                </div>

                <div className="py-1 px-2 gap-x-1 flex justify-center items-center border border-black/5 dark:border-white/10 rounded min-w-[125px] md:min-w-[80px]">
                  <MessageRounded
                    sx={{ width: 18, height: 18 }}
                    className="text-green-500"
                    fontSize="small"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-200">
                    {question.answerCount} پاسخ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-slate-200 dark:bg-slate-800 rounded p-2">
          <div className="border-b border-b-black/5 dark:border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-700 dark:text-slate-200 text-lg">
              پاسخ هــا
            </p>
          </div>
          <ul className="mt-4 px-4 divide-y divide-white/5 gap-y-6 flex flex-col pb-8">
            {question?.answers?.map((answer) => (
              <li className="pt-4">
                <div className="flex flex-col">
                  <div className="flex gap-x-2">
                    <img
                      src={`http://127.0.0.1:5000/media/profiles/${answer.creatorID.avatar}`}
                      className="w-16 h-16 rounded-full border border-white/5"
                      alt=""
                    />
                    <div className="mt-2.5">
                      <p className="text-slate-700 dark:text-slate-400 font-morabba-medium text-sm">
                        <span className="font-morabba-medium">
                          {answer.creatorID.fullname}
                        </span>
                        {Number(answer.isTrueAnswer) === 1 && (
                          <span className="mr-1 text-green-500">
                            <VerifiedRounded fontSize="small" />
                          </span>
                        )}
                      </p>
                      <p className="font-morabba-medium text-slate-800 dark:text-slate-300 mt-0.5 ">
                        {answer.body}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3">
                    <p className="text-slate-700 dark:text-slate-200 font-dana-bold pt-2 mx-2">
                      {answer.like}
                    </p>
                    <div className=" cursor-pointer dark:hover:bg-blue-600 transition-colors text-slate-200 p-2 rounded-full gap-x-1 border border-black/10 dark:border-white/10  flex justify-center items-center">
                      <ThumbUpRounded
                        fontSize="small"
                        className="text-slate-700 dark:text-slate-200"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 bg-slate-200 dark:bg-slate-800 rounded p-2">
          <div className="border-b border-b-black/5 dark:border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-700 dark:text-slate-200 text-lg">
              ارســـال پاسخ
            </p>
          </div>
          {login ? (
            <form action="" className="mx-2 pb-4">
              <textarea
                className="w-full min-h-[200px] max-h-[250px] rounded mt-8 bg-slate-100 dark:bg-slate-700 p-2 font-morabba-medium text-slate-700 dark:text-slate-200 outline-none border-none"
                placeholder="متن پاسخ شما ..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <button
                disabled={body.trim().length < 3}
                onClick={addNewAnswer}
                className={`${
                  body.trim().length < 3 ? "bg-slate-400" : "bg-green-500"
                } w-full  py-1 rounded text-slate-200 font-morabba-medium`}
              >
                ارسال پاسخ
              </button>
            </form>
          ) : (
            <div className="flex justify-center items-center py-8">
              <p className="text-slate-700 dark:text-slate-200">
                برای ارسال پاسخ لطفا وارد حساب کاربری شوید
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowQuestion;
