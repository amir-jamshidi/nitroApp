import { ClockLoader } from "react-spinners";
const RegisterLoading = ({ isLoading }) => {
  return (
    <div
      className={`${
        isLoading ? "visible opacity-100 " : "invisible opacity-0 z-10 "
      } transition-all duration-200 bg-slate-900/70 absolute inset-0 rounded flex justify-center items-center`}
    >
      <ClockLoader color="#22c55e" />
    </div>
  );
};

export default RegisterLoading;
