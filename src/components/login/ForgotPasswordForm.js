import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ForgotPasswordForm.css';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el email de recuperación
    console.log('Solicitud de recuperación para:', email);
    
    // Simulamos el envío exitoso
    setIsSubmitted(true);
    
    // En una implementación real, aquí harías la petición a tu API
    // y manejarías la respuesta
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  if (isSubmitted) {
    return (
      <div className="forgot-password-form-container">
        <div className="forgot-password-form success-message">
          <div className="success-icon">✓</div>
          <h2>¡Correo Enviado!</h2>
          <p>
            Hemos enviado un enlace de recuperación a <strong>{email}</strong>
          </p>
          <p className="instruction">
            Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
          </p>
          <button 
            onClick={handleBackToLogin}
            className="back-to-login-button"
          >
            Volver al Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-password-form-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Recuperar Contraseña</h2>
          <p>Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña.</p>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu@email.com"
          />
        </div>

        <button type="submit" className="submit-button">
          Enviar Enlace de Recuperación
        </button>

        <div className="form-links">
          <Link to="/login" className="back-link">
            ← Volver al Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;