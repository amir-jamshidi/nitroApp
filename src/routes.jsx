import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ShowQuestion from "./Pages/ShowQuestion";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/question/:id", element: <ShowQuestion /> },
];

export default routes;
