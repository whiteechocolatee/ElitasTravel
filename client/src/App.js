import Homepage from "./pages/Homepage/Homepage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { paths } from "./paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
