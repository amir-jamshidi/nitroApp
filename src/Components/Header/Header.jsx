import { RocketLaunchRounded } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="h-16 bg-slate-800 border-b border-b-white/10">
      <div className="h-full container">
        <div className="flex h-full">
          <div></div>
          <div className="h-full flex-1 flex justify-center items-center">
            <span>
              <RocketLaunchRounded
                sx={{ width: 55, height: 55 }}
                className="text-blue-700"
              />
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
