import {
  AccountCircleRounded,
  RocketLaunchRounded,
  WbSunnyRounded,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const authInfos = useSelector((state) => state.authInfos);

  return (
    <header className="h-16 dark:bg-slate-800 bg-slate-300 border-b border-b-white/10">
      <div className="h-full container">
        <div className="flex h-full">
          <div className="flex-1 flex h-full justify-start items-center">
            <div className="flex justify-center items-center gap-x-1">
              <Link to={"/login"}>
                <button className="font-morabba-medium rounded-2xl text-slate-200 px-4 py-1.5 text-sm  bg-violet-500">
                  ایجاد ســوال
                </button>
              </Link>
              <span className=" h-[32px] w-[32px] flex justify-center items-center bg-slate-700 rounded-full">
                <WbSunnyRounded fontSize="small" className="text-slate-200" />
              </span>
            </div>
          </div>
          <div className="h-full flex-1 flex justify-center items-center">
            <span className="font-morabba-bold text-xl text-slate-200">
              نیتــرو
            </span>
          </div>

          <div className="flex-1 flex justify-end items-center h-full">
            {!authInfos.login ? (
              <div className=" rounded-2xl overflow-hidden ">
                <Link to={"/login"}>
                  <button className="font-morabba-medium text-slate-200 px-4 py-1.5 text-sm  bg-blue-500">
                    ورود کاربر
                  </button>
                </Link>
                <Link to={"/register"}>
                  <button className="font-morabba-medium text-slate-200 px-5 py-1.5 text-sm  bg-green-500 ">
                    ثبت نام
                  </button>
                </Link>
              </div>
            ) : (
              <Link to={"/panel"}>
                <div>
                  <p className="font-morabba-medium text-slate-200 text-sm px-4 py-1.5 border border-white/10 rounded-2xl">
                    پنــل کاربری
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
