import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 👈 Cambia aquí
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage'; // 👈 Nueva importación

const AppRouter = () => {
  return (
    <Router> {/* 👈 Ahora usa HashRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* 👈 Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default AppRouter;