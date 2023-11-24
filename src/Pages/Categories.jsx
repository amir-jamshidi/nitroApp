import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import TitleSection from "../Components/TitleSection/TitleSection";
import { useEffect } from "react";
import { getAllCategories } from "../Redux/Reducers/allCategories";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import LoadingSection from "../Components/LoadingSection/LoadingSection";

const Categories = () => {
  const { allCategories, loading } = useSelector(
    (state) => state.allCategories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  if (loading) return <LoadingSection />;

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-14 p-2 bg-slate-200 dark:bg-slate-800 rounded">
          <TitleSection title="همه دسته بندی ها" />
          <div className="mt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {allCategories?.map((category) => (
                <Link to={`/category/${category.href}`}>
                  <div className="flex justify-start items-center gap-x-2 p-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700  transition-colors">
                    <span className="w-3 h-3 inline-block bg-blue-500 rounded-full"></span>
                    <p className=" text-slate-800 dark:text-gray-200">
                      {category.title}
                    </p>
                  </div>
                </Link>
              ))}
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Categories;
