import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";
import QuestionItem from "../Components/QuestionItem/QuestionItem";
import { editUserInfo, getMe } from "../Redux/Reducers/authInfos";
import baseApi from "./../Configs/Axios";
import { AlternateEmailRounded, PersonRounded } from "@mui/icons-material";
import { useState } from "react";
import userPanelSchema from "../Utils/userPanelSchema";
import { showToastError, showToastSuccess } from "../Configs/Toast";

const Panel = () => {
  const authInfos = useSelector((state) => state.authInfos);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState(authInfos?.userInfo?.fullname);
  const [email, setEmail] = useState(authInfos?.userInfo?.email);
  const [disabled, setDisabeld] = useState(false);

  const changeProfileImage = async (e) => {
    const formData = new FormData();
    formData.append("profile", e.target.files[0]);
    baseApi
      .put("auth/profile", formData)
      .then((response) => {
        dispatch(getMe());
        showToastSuccess("پروفایل شما تغییر کرد");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editInfos = async (e) => {
    e.preventDefault();
    const newValues = {
      fullname: fullname ? fullname : authInfos.userInfo.fullname,
      email: email ? email : authInfos.userInfo.email,
    };
    try {
      const valiadte = await userPanelSchema.validate(newValues);
      if (valiadte) {
        setDisabeld(true);
        setTimeout(() => {
          setDisabeld(false);
        }, 3000);
        dispatch(editUserInfo(newValues));
      }
    } catch (error) {
      showToastError(error.message);
    }
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

              <div className="flex items-center">
                <span className="flex-1 h-[1px] bg-white/5"></span>
                <span className="mx-2 text-slate-300">ویرایش اطلاعات</span>
                <span className="flex-1 h-[1px] bg-white/5"></span>
              </div>

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
                  disabled={
                    email?.length < 5 || fullname?.length < 3 || disabled
                  }
                  onClick={editInfos}
                  className={`${
                    email?.length < 5 || fullname?.length < 3
                      ? "bg-slate-400"
                      : "bg-green-500"
                  } mt-1 w-full  py-1 rounded text-slate-200 font-morabba-medium`}
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
