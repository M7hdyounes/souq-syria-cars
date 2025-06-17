import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AddCarPage from "./pages/AddCarPage.jsx";
import CarDetailsPage from "./pages/CarDetailsPage.jsx";
import AllCarsPage from "./pages/AllCarsPage.jsx";
import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ComplaintsPage from "./pages/ComplaintsPage.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingAddButton from "./components/FloatingAddButton.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import Notification from "./components/Notification.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LanguageSwitcher />
        <Notification />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-car" element={<AddCarPage />} />
          <Route path="/car/:id" element={<CarDetailsPage />} />
          <Route path="/all-cars" element={<AllCarsPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
        </Routes>
        <FloatingAddButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;