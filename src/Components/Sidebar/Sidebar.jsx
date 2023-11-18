import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategories } from "../../Redux/Reducers/mainCategories";

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
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
        <ul className="my-3 mx-2 flex flex-col gap-y-2">
          {categories.map((category) => (
            <li className="" key={category._id}>
              <div className="flex justify-start items-center gap-x-2">
                <span className="w-2 h-2 inline-block bg-orange-500 rounded-full"></span>
                <span className="text-slate-200 font-morabba-medium">
                  {category.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
