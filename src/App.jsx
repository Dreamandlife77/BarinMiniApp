import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Experts from "./pages/Experts";
import ExpertsDetail from "./pages/ExpertsDetail.jsx";
import Missions from "./pages/Missions";
import Leaderboard from "./pages/Leaderboard";
import MineralCollection from "./pages/MineralCollection";
import Mining from "./pages/Mining";
import EducationDetail from "./pages/EducationDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/tutorial" element={<Onboarding />} />
        <Route path="/experts"  element={<Experts />} />
        <Route path="/experts/:id" element={<ExpertsDetail />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/minerals" element={<MineralCollection />} />
        <Route path="/mining"  element={<Mining />} />
        <Route path="/education/:id"  element={<EducationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;