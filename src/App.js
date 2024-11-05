import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import RentalManagement from "./pages/RentalManagement";
import FeaturedProducts from "./pages/FeaturedProducts";
import BannerImages from "./pages/BannerImages";
import Categories from "./pages/Categories";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/rentals" element={<RentalManagement />} />
            <Route path="/featured-products" element={<FeaturedProducts />} />
            <Route path="/banner-images" element={<BannerImages />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
