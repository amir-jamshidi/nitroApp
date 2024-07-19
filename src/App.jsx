import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./Redux/Reducers/authInfos";

function App() {
  

  const authInfos = useSelector((state) => state.authInfos);
  const routerApplication = useRoutes(routes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  useEffect(() => {
    getTheme();
  }, [authInfos.theme]);

  const getTheme = () => {
    var root = document.getElementsByTagName("html")[0];
    root.className = authInfos.theme;
  };

  return (
    <>
      <ToastContainer />
      {routerApplication}
    </>
  );
}

export default App;
