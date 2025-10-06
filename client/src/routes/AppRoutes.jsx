import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import PLP from "../pages/PLP.jsx";
import PDP from "../pages/PDP.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />          {/* "/" */}
        <Route path="plp" element={<PLP />} />
        <Route path="pdp" element={<PDP />} />
      </Route>

    </Routes>
  );
}
