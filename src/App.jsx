import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import TeamPage from "./pages/TeamPage/TeamPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
};

export default App;
