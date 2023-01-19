import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import ProjectDetails from "../Pages/DetailsProject/ProjectDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Portfolio></Portfolio> },
      { path: "/project/:details", element: <ProjectDetails /> },
    ],
  },
]);

export default routes;
