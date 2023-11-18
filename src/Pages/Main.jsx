import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/SideBar";

const Main = () => {
  return (
    <>
      <Header />
      <main className="mt-14">
        <div className="container">
          <Sidebar />
        </div>
      </main>
    </>
  );
};
export default Main;
