import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css';

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar lógica de logout (limpiar tokens, etc.)
    navigate('/login');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="admin-home">
      <header className="admin-header">
        <div className="admin-nav">
          <button onClick={handleBackToHome} className="back-button">
            ← Volver al Inicio
          </button>
          <h1>Panel de Administración</h1>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-container">
          <div className="admin-welcome">
            <h2>Bienvenido, Administrador</h2>
            <p>Gestiona tu sistema de aire acondicionado desde aquí</p>
          </div>

          <div className="admin-cards">
            <div className="admin-card">
              <h3>📊 Estadísticas</h3>
              <p>Visualiza el rendimiento del sistema</p>
              <button className="card-button">Ver Estadísticas</button>
            </div>

            <div className="admin-card">
              <h3>⚙️ Configuración</h3>
              <p>Ajusta los parámetros del sistema</p>
              <button className="card-button">Configurar</button>
            </div>

            <div className="admin-card">
              <h3>📈 Reportes</h3>
              <p>Genera reportes de actividad</p>
              <button className="card-button">Crear Reportes</button>
            </div>

            <div className="admin-card">
              <h3>👥 Usuarios</h3>
              <p>Gestiona usuarios del sistema</p>
              <button className="card-button">Administrar</button>
            </div>
          </div>

          <div className="admin-quick-actions">
            <h3>Acciones Rápidas</h3>
            <div className="action-buttons">
              <button className="action-btn primary">Reiniciar Sistema</button>
              <button className="action-btn secondary">Backup</button>
              <button className="action-btn warning">Modo Mantenimiento</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;