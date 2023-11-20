import { LocalPhoneRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import baseApi from "./../Configs/Axios";
import { useState } from "react";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [isShowVerify, setIsShowVerify] = useState(false);

  const startRegister = (e) => {
    e.preventDefault();
    baseApi
      .post("auth/register", { phone })
      .then((response) => {
        setIsShowVerify(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendVerifyCode = (e) => {
    e.preventDefault();

    baseApi
      .post("auth/confirm", { phone, code: verifyCode })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-slate-800 rounded min-w-[400px] px-4 py-4">
        <h1 className="font-morabba-bold text-2xl text-center text-slate-200">
          ثبت نــام در سایـت
        </h1>
        <form action="" className="mt-8">
          {!isShowVerify ? (
            <div className="flex justify-center items-center border border-white/5 rounded px-1 py-2 gap-x-2">
              <LocalPhoneRounded className=" text-slate-200" />
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                className="text-slate-200 font-morabba-medium w-full bg-transparent border-none outline-none"
                placeholder="شماره همـراه"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center border border-white/5 rounded px-1 py-2 gap-x-2">
              <LocalPhoneRounded className=" text-slate-200" />
              <input
                onChange={(e) => setVerifyCode(e.target.value)}
                value={verifyCode}
                type="text"
                className="text-slate-200 font-morabba-medium w-full bg-transparent border-none outline-none"
                placeholder="کد تایید"
              />
            </div>
          )}

          <button
            onClick={!isShowVerify ? startRegister : sendVerifyCode}
            className="w-full bg-green-500 text-slate-200 font-morabba-medium rounded py-2 mt-2"
          >
            ارســال کد تاییــد
          </button>
        </form>
        <span className="font-morabba text-slate-400 text-sm mt-3 inline-block">
          ثبت نام شما به منزله پذیریش قوانین است
        </span>
        <Link to={"/login"}>
          <p className="text-blue-500 font-morabba text-sm ">
            حساب کاربری دارم
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
