import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
function App() {
  const routerApplication = useRoutes(routes);

  return (
    <>
      <ToastContainer />
      {routerApplication}
    </>
  );
}

export default App;
