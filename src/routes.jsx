import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default routes;
