import { useEffect, useState } from "react";
import Header from "./../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../Redux/Reducers/allCategories";
import Footer from "../Components/Footer/Footer";
const InsertQuestion = () => {
  const allCategories = useSelector((state) => state.allCategories);
  const dispatch = useDispatch();

  const [categoryID, setCategoryID] = useState("-1");

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <>
      <Header />
      <div className="container mt-14">
        <div className="w-full bg-slate-800 rounded p-2">
          <div className="border-b border-b-white/5 pb-2">
            <p className="font-morabba-medium text-center text text-slate-200 text-lg">
              ایجــاد ســوال
            </p>
          </div>
          <div className="mt-8 mx-4 pb-8">
            <form action="">
              <div className="mt-8 flex flex-col">
                <div className="flex gap-x-1">
                  <input
                    type="text"
                    className="w-1/2 outline-none bg-slate-700 rounded py-1 px-2 text-slate-200"
                    placeholder="عنوان سوال"
                  />
                  <select className="bg-slate-700 text-slate-200 rounded w-1/2 outline-none py-1 px-1">
                    <option value="-1">انتخاب دسته بندی</option>
                    {allCategories?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  className="bg-slate-700 py-2 rounded px-2 mt-1 min-h-[200px] max-h-64 outline-none text-slate-200"
                  placeholder="متـن ســـوال"
                ></textarea>
                <button className="w-full bg-green-500 py-1 rounded text-slate-200 font-morabba-medium mt-1">
                  ارســـال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default InsertQuestion;
