import { RocketLaunchRounded } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="h-16 dark:bg-slate-800 bg-slate-300 border-b border-b-white/10">
      <div className="h-full container">
        <div className="flex h-full">
          <div className="flex-1"></div>
          <div className="h-full flex-1 flex justify-center items-center">
            <span className="font-morabba-bold text-xl text-slate-200">
              نیتــرو
            </span>
          </div>

          <div className="flex-1 flex justify-end items-center h-full">
            <div className=" rounded-xl overflow-hidden ">
              <button className="font-morabba-medium text-slate-200 px-6 py-1.5  bg-blue-500 w-16">
                ورود کاربر
              </button>
              <button className="font-morabba-medium text-slate-200 px-2 py-1.5  bg-green-500 w-16">
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
