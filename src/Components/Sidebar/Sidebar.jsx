import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategories } from "../../Redux/Reducers/mainCategories";
import { Link } from "react-router-dom";
import LoadingSection from "../LoadingSection/LoadingSection";
import TitleSection from "./../TitleSection/TitleSection";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { mainCategories, loading } = useSelector(
    (state) => state.mainCategories
  );
  useEffect(() => {
    dispatch(getMainCategories());
  }, []);

  if (loading) return ( <LoadingSection />);

  return (
    <div>
      <aside className="hidden lg:flex flex-col w-80 bg-slate-100 border border-black/5 dark:border-white/5 dark:bg-slate-800 rounded p-2">
        <TitleSection title={"دسته بندی سوالات"} />
        <div>
          <ul className="mb-3 mt-8 mx-2 flex flex-col divide-y divide-black/5 dark:divide-white/5 ">
            {mainCategories?.map((category) => (
              <Link key={category._id} to={`category/${category.href}`}>
                <li className="">
                  <div className="flex justify-start items-center gap-x-2  rounded px-2 py-2">
                    <span className="w-2 h-2 inline-block bg-green-500 rounded-full"></span>
                    <span className=" text-slate-800 dark:text-slate-200 font-morabba-medium">
                      {category.title}
                    </span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <Link to={"categories"} className="flex">
            <button className="flex-1 mx-1 border bg-slate-300 text-slate-800 border-white/10 py-2 rounded dark:bg-transparent dark:text-slate-300 mb-3">
              همه دسته بندی ها
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
