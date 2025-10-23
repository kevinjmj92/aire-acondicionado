import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CoolAir Solutions</h3>
            <p>Expertos en climatización desde 2010</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@coolair.com</p>
            <p>📍 Av. Principal 123, Ciudad</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <a href="#productos">Productos</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CoolAir Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;