import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import LastedQuestions from "../Components/LastedQuestions/LastedQuestions";
import Sidebar from "../Components/Sidebar/SideBar";

const Main = () => {
  return (
    <>
      <Header />
      <main className="mt-14">
        <div className="container">
          <div className="flex gap-x-3">
            <Sidebar />
            <div className="flex-1 rounded bg-slate-800 p-2">
              <div className="border-b border-b-white/5 pb-2">
                <p className="font-morabba-medium text-center text text-slate-200 text-lg">
                  آخریــن سوالات
                </p>
              </div>

              <section className="pt-8">
                <LastedQuestions />
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Main;
