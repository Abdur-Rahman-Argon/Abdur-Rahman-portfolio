import { RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import routes from "./routes/routes";

function App() {
  return (
    <div className="text-white w-full mx-auto mt-0 bg-slate-900  ">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
