import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ShopPage from './pages/ShopPage'; // 👈 Nueva importación

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/tienda" element={<ShopPage />} /> {/* 👈 Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default AppRouter;