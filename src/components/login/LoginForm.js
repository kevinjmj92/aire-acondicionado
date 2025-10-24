import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 👈 Asegúrate de importar Link
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de autenticación real
    console.log('Datos de login:', formData);
    
    // Redirigir a la página de admin después del login
    navigate('/admin');
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Acceso Administradores</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="admin@coolair.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="login-button">
          Acceder al Panel
        </button>

        <div className="login-links">
          {/* 👇 NUEVO: Enlace para recuperar contraseña */}
          <Link to="/forgot-password" className="forgot-password-link">
            ¿Olvidaste tu contraseña?
          </Link>
          <button type="button" onClick={() => navigate('/')}>
            ← Volver al sitio principal
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;