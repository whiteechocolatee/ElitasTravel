import Homepage from "./pages/Homepage/Homepage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { paths } from "./paths";
import PlanePage from "./pages/PlanePage/PlanePage";
import CreatePlane from "./pages/createPlane/CreatePlane";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Homepage />} />
        <Route
          path={`${paths.plane}/:id`}
          element={<PlanePage />}
        />
        <Route
          path={paths.createPlane}
          element={<CreatePlane />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
