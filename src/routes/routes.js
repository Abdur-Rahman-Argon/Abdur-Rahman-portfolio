import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import ProjectDetails from "../Pages/DetailsProject/ProjectDetails";
import Projects from "../Pages/Projects/Projects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Portfolio></Portfolio> },
      { path: "/project-details/:id", element: <ProjectDetails /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

export default routes;
