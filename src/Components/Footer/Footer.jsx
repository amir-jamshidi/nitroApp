import { FavoriteRounded, HeartBrokenRounded } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="mt-8 bg-slate-800 border-t border-t-white/5">
      <div className="container py-8">
        <div className="flex justify-center items-center">
          <p className="text-slate-200">
            طراحی شده با
            <FavoriteRounded className="text-red-500 mx-1" />
            توسط دِوامـــیر
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
