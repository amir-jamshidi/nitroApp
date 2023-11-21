import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ShowQuestion from "./Pages/ShowQuestion";
import InsertQuestion from "./Pages/InsertQuestion";
import Categories from "./Pages/Categories";
import Questions from "./Pages/Questions";
import QuestionCategory from "./Pages/QuestionCategory";
import Panel from "./Pages/Panel";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/question/:id", element: <ShowQuestion /> },
  { path: "/add-question", element: <InsertQuestion /> },
  { path: "/categories", element: <Categories /> },
  { path: "/questions", element: <Questions /> },
  { path: "/category/:href", element: <QuestionCategory /> },
  { path: "/panel", element: <Panel /> },
];

export default routes;
