import { ClockLoader } from "react-spinners";
const LoadingSection = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 fixed top-0 right-0 left-0 h-screen flex justify-center items-center">
      <ClockLoader color="#22c55e" />
    </div>
  );
};
export default LoadingSection;
