import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 👈 Importar Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>CoolAir Solutions</h2>
        </div>
        
        {/* Botón hamburguesa */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>

        {/* Menú de navegación */}
        <nav className={`nav ${isMenuOpen ? 'nav--active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#productos" onClick={closeMenu}>Productos</a>
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          {/* 👇 NUEVO: Icono de carrito que redirige al login */}
          <Link 
            to="/" 
            className="cart-icon" 
            onClick={closeMenu}
            aria-label="Ir a la tienda"
          >
            🛒
          </Link>
        </nav>

        {/* Overlay para cerrar el menú al hacer clic fuera */}
        {isMenuOpen && (
          <div className="nav-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;