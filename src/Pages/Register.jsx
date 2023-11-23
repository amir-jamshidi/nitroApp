import { LocalPhoneRounded } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import baseApi from "./../Configs/Axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUserInfo } from "../Redux/Reducers/authInfos";
import { showToastError, showToastSuccess } from "../Configs/Toast";
import RegisterLoading from "../Components/Loading/RegisterLoading";

const Register = () => {
  //ReduxConfig
  const authInfos = useSelector((state) => state.authInfos);
  const dispatch = useDispatch();

  //States
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [isShowVerify, setIsShowVerify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //ReactRouterDom
  const navigate = useNavigate();

  //Fns
  const startRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    baseApi
      .post("auth/register", { phone })
      .then((response) => {
        if (response.status === 201) {
          setIsLoading(false);
          setIsShowVerify(true);
          showToastSuccess("کد تایید برای شما ارسال شد");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          showToastError("این شماره قبلا ثبت نام شده");
        } else {
          showToastError("خطای ناشناخته ای رخ داد");
        }
        setIsLoading(false);
      });
  };

  //Fns
  const sendVerifyCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    baseApi
      .post("auth/confirm", { phone, code: verifyCode })
      .then((response) => {
        if (response.status === 201) {
          setIsLoading(false);
          showToastSuccess("ثبت نام با موفقیت انجام شد");
          dispatch(setIsLogin(true));
          dispatch(setUserInfo(response.data.userInfo));
          localStorage.setItem(
            "auth",
            JSON.stringify({ token: response.data.token })
          );
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          showToastError("کد وارد شده درست نیست");
        } else {
          showToastError("خطای ناشناخته ای رخ داد");
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-slate-200 dark:bg-slate-800 relative rounded min-w-[400px] px-4 py-4">
        <RegisterLoading isLoading={isLoading} />
        <h1 className="font-morabba-bold text-2xl text-center text-slate-800 dark:text-slate-200">
          ثبت نــام در سایـت
        </h1>
        <form action="" className="mt-8">
          {!isShowVerify ? (
            <div className="flex justify-center items-center border border-black/10 dark:border-white/5 rounded px-1 py-2 gap-x-2">
              <LocalPhoneRounded className=" text-slate-700 dark:text-slate-200" />
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                className="text-slate-700 dark:text-slate-200 font-morabba-medium w-full bg-transparent border-none outline-none"
                placeholder="شماره همـراه"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center border border-black/10 dark:border-white/5 rounded px-1 py-2 gap-x-2">
              <LocalPhoneRounded className="text-slate-700 dark:text-slate-200" />
              <input
                onChange={(e) => setVerifyCode(e.target.value)}
                value={verifyCode}
                type="text"
                className="text-slate-700 dark:text-slate-200 font-morabba-medium w-full bg-transparent border-none outline-none"
                placeholder="کد تایید"
              />
            </div>
          )}
          {isShowVerify ? (
            <button
              onClick={!isShowVerify ? startRegister : sendVerifyCode}
              className={`${
                verifyCode.length !== 5 ? "bg-slate-400" : "bg-green-500"
              } w-full  text-slate-200 font-morabba-medium rounded py-2 mt-2 transition-colors`}
              disabled={verifyCode.length !== 5 ? true : false}
            >
              تاییــد
            </button>
          ) : (
            <button
              onClick={!isShowVerify ? startRegister : sendVerifyCode}
              className={`${
                phone.length !== 11 ? "bg-slate-400" : "bg-green-500"
              } w-full  text-slate-200 font-morabba-medium rounded py-2 mt-2 transition-colors`}
              disabled={phone.length !== 11 ? true : false}
            >
              ارســال کد تاییــد
            </button>
          )}
        </form>
        <span className="dark:font-morabba font-morabba-medium text-slate-400 text-sm mt-3 inline-block">
          ثبت نام شما به منزله پذیریش قوانین است
        </span>
        <Link to={"/login"}>
          <p className="text-blue-500 font-morabba-medium dark:font-morabba text-sm ">
            حساب کاربری دارم
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
