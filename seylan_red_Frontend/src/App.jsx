// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import LoanApplicationPage from "./pages/LoanApplicationPage";
import ApplyCreditCard from './pages/ApplyCreditCard';
import MakeTransaction from "./pages/MakeTransaction";  



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/apply-loan" element={<LoanApplicationPage />} />
        <Route path="/apply-credit-card" element={<ApplyCreditCard />} />
        <Route path="/make-transaction" element={<MakeTransaction />} />
      </Routes>
    </Router>
  );
};

export default App;
