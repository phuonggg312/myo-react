import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PLP from "../pages/PLP";
import PDP from "../pages/PDP";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plp" element={<PLP />} />
        <Route path="/pdp/:id" element={<PDP />} />
      </Routes>
    </BrowserRouter>
  );
}
