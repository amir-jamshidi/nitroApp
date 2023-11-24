import { WbSunnyRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../../Redux/Reducers/authInfos";

const Header = () => {
  const authInfos = useSelector((state) => state.authInfos);
  const dispatch = useDispatch();

  return (
    <header className="h-16 dark:bg-slate-800 bg-slate-200 border-b border-b-white/10">
      <div className="h-full container">
        <div className="flex h-full">
          <div className="flex-1 flex h-full justify-start items-center">
            <div className="flex justify-center items-center gap-x-1">
              <Link to={`${authInfos.login ? "/add-question" : "/login"}`}>
                <button className="font-morabba-medium rounded-2xl text-slate-200 px-2 md:px-4 py-1.5 text-sm bg-green-500  dark:bg-violet-500">
                  ایجاد ســوال
                </button>
              </Link>
              <span
                onClick={() => dispatch(changeTheme())}
                className=" h-[32px] w-[32px] flex justify-center cursor-pointer transition-colors hover:bg-slate-700 dark:hover:bg-slate-200  items-center bg-slate-200 dark:bg-slate-700 rounded-full border border-black/10"
              >
                <WbSunnyRounded
                  fontSize="small"
                  className="text-slate-800 dark:text-slate-200 mt-0.5 hover:text-slate-200  dark:hover:text-slate-800 transition-colors"
                />
              </span>
            </div>
          </div>
          <div className="h-full flex-1 flex justify-center items-center">
            <Link to={"/"}>
              <span className="font-morabba-bold text-xl text-slate-800 dark:text-slate-200">
                نیتــرو
              </span>
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center h-full">
            {!authInfos.login ? (
              <div className=" rounded-2xl overflow-hidden flex">
                <Link to={"/login"}>
                  <button className="hidden md:inline-block font-morabba-medium text-slate-200 px-4 py-1.5 text-sm  bg-blue-500">
                    ورود کاربر
                  </button>
                  <button className="md:hidden font-morabba-medium text-slate-200 px-4 py-1.5 text-sm  bg-blue-500">
                    ورود
                  </button>
                </Link>
                <Link to={"/register"}>
                  <button className="font-morabba-medium text-slate-200 px-2 md:px-5 py-1.5 text-sm  bg-green-500 ">
                    ثبت نام
                  </button>
                </Link>
              </div>
            ) : (
              <Link to={"/panel"}>
                <div>
                  <p className="font-morabba-medium text-slate-800 dark:text-slate-200 text-sm px-4 py-1.5 border border-black/10 dark:border-white/10 rounded-2xl">
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
