import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";
import QuestionItem from "../Components/QuestionItem/QuestionItem";
import { getMe } from "../Redux/Reducers/authInfos";
import baseApi from "./../Configs/Axios";
import {
  AlternateEmailRounded,
  LocalPhoneRounded,
  PersonRounded,
} from "@mui/icons-material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const Panel = () => {
  const authInfos = useSelector((state) => state.authInfos);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState(authInfos?.userInfo?.fullname);
  const [email, setEmail] = useState(authInfos?.userInfo?.email);

  const changeProfileImage = async (e) => {
    const formData = new FormData();
    formData.append("profile", e.target.files[0]);
    baseApi
      .put("auth/profile", formData)
      .then((response) => {
        dispatch(getMe());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editInfos = (e) => {
    e.preventDefault();
    const newValues = {
      fullname: fullname ? fullname : authInfos.userInfo.fullname,
      email: email ? email : authInfos.userInfo.email,
    };
    console.log(newValues);
  };

  return (
    <>
      <Header />
      <div className="container mt-14">
        <div className="p-2 bg-slate-800 rounded mb-8">
          <TitleSection title={"اطلاعات حسـاب کاربری من"} />
          <div className="mt-8 px-4 pb-4">
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <img
                src={`http://127.0.0.1:5000/media/profiles/${authInfos?.userInfo?.avatar}`}
                alt=""
                className="w-24 h-24 rounded-full"
              />
              <label className="cursor-pointer bg-blue-500 rounded">
                <input
                  type="file"
                  className="absolute -top-[1000px]"
                  onChange={changeProfileImage}
                />
                <span className="font-morabba-medium text-gray-200 px-5 py-1.5 inline-block text-sm">
                  تغــییر پروفــایــل
                </span>
              </label>
            </div>
            <div className="mt-8">
              <TitleSection title={"ویـرایش اطلاهـات من"} />

              <form action="" className="mt-8">
                <div className="grid grid-cols-2 gap-x-1">
                  <div className="flex justify-center items-center border border-white/5 rounded px-1 py-2 gap-x-2">
                    <AlternateEmailRounded className=" text-slate-200" />

                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue={authInfos?.userInfo?.email}
                      type="text"
                      className="text-slate-200 font-morabba-medium w-full bg-transparent border-none outline-none"
                      placeholder="ایمیل شمـا"
                    />
                  </div>
                  <div className="flex justify-center items-center border border-white/5 rounded px-1 py-2 gap-x-2">
                    <PersonRounded className=" text-slate-200" />
                    <input
                      defaultValue={authInfos?.userInfo?.fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      type="text"
                      className="text-slate-200 font-morabba-medium w-full bg-transparent border-none outline-none"
                      placeholder="نـام شمــا"
                    />
                  </div>
                </div>
                <button
                  onClick={editInfos}
                  className="mt-1 w-full bg-green-500 py-1 rounded text-slate-200 font-morabba-medium"
                >
                  ثبت تغییــرات
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="p-2 bg-slate-800 rounded mb-8">
          <TitleSection title={"اخرین پرسش هــای من"} />
          <div className="mx-4 mt-8 pb-4">
            <ul className="flex flex-col gap-y-1">
              {authInfos?.questions?.map((question) => (
                <QuestionItem key={question._id} question={question} />
              ))}
            </ul>
          </div>
        </div>
        <div className="p-2 bg-slate-800 rounded">
          <TitleSection title={"ســوال هــای ذخیره شده"} />
          <div className="mx-4 mt-8 pb-4">
            <ul className="flex flex-col gap-y-1">
              {authInfos?.saveQuestions?.map((question) => (
                <QuestionItem
                  key={question._id}
                  question={question.questionID}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
