import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategories } from "../../Redux/Reducers/mainCategories";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.mainCategories);
  useEffect(() => {
    dispatch(getMainCategories());
  }, []);

  return (
    <aside className="w-80 bg-slate-800 rounded p-2">
      <div>
        <div className="border-b border-b-white/5 pb-2">
          <p className="font-morabba-medium text-center text text-slate-200 text-lg">
            دسته بندی سوالات
          </p>
        </div>
        <ul className="mb-3 mt-8 mx-2 flex flex-col divide-y divide-white/5">
          {categories.map((category) => (
            <Link key={category._id} to={`category/${category.href}`}>
              <li className="">
                <div className="flex justify-start items-center gap-x-2  rounded px-2 py-2">
                  <span className="w-2 h-2 inline-block bg-orange-500 rounded-full"></span>
                  <span className="text-slate-200 font-morabba-medium">
                    {category.title}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
