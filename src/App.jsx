import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./Redux/Reducers/authInfos";
function App() {
  const routerApplication = useRoutes(routes);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <>
      <ToastContainer />
      {routerApplication}
    </>
  );
}

export default App;
