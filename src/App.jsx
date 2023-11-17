import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./Contexts/AuthContext";
function App() {
  const routerApplication = useRoutes(routes);

  return (
    <>
      <AuthContext.Provider value={{}}>
        {routerApplication}
      </AuthContext.Provider>
    </>
  );
}

export default App;
