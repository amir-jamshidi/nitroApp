import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ShowQuestion from "./Pages/ShowQuestion";
import InsertQuestion from "./Pages/InsertQuestion";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/question/:id", element: <ShowQuestion /> },
  { path: "/add-question", element: <InsertQuestion /> },
];

export default routes;
