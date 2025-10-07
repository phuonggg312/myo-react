import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import PLP from "../pages/PLP.jsx";
import PDP from "../pages/PDP.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />                {/* "/" -> render to Outlet */}
        <Route path="category">
          <Route index element={<PLP />} />               {/* "/category" -> Outlet */}
          <Route path="product/:id" element={<PDP />} />  {/* "/category/product/42" -> Outlet */}
        </Route>
      </Route>
    </Routes>

  );
}
