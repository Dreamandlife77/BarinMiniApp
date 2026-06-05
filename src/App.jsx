import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Experts from "./pages/Experts";
import ExpertsDetail from "./pages/ExpertsDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/tutorial" element={<Onboarding />} />
        <Route path="/experts"  element={<Experts />} />
        <Route path="/experts/:id" element={<ExpertsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;