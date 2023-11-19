import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  const routerApplication = useRoutes(routes);

  return <>{routerApplication}</>;
}

export default App;
