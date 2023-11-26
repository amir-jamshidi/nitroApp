import { FavoriteRounded, HeartBrokenRounded } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="mt-14 bg-slate-200 dark:bg-slate-800 border-t border-t-white/5">
      <div className="container py-8">
        <div className="flex justify-center items-center">
          <p className="dark:text-slate-200 text-slate-800 font-morabba-bold">
            طراحی شده با
            <FavoriteRounded className="text-red-500 mx-2" />
            توسط دِوامـــیر
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
