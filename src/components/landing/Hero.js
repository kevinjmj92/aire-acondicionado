import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Tecnología Inverter",
      subtitle: "Ahorro de energía hasta 40%",
      description: "Los sistemas inverter ajustan automáticamente la potencia para mantener la temperatura ideal y reducir el consumo.",
      image: "🏠",
      bgGradient: "linear-gradient(135deg, #0077b6, #00b4d8)",
      buttonText: "Ver Tecnología Inverter"
    },
    {
      id: 2,
      title: "Aires Split de Alta Eficiencia",
      subtitle: "BTUs desde 9,000 hasta 24,000",
      description: "Perfectos para hogares y oficinas. Instalación profesional incluida con garantía de 2 años.",
      image: "❄️",
      bgGradient: "linear-gradient(135deg, #00b4d8, #0077b6)",
      buttonText: "Ver Split"
    },
    {
      id: 3,
      title: "Sistemas Centralizados",
      subtitle: "Para espacios comerciales",
      description: "Solución completa para negocios, restaurantes y edificios con múltiples zonas de climatización.",
      image: "🏢",
      bgGradient: "linear-gradient(135deg, #0096c7, #48cae4)",
      buttonText: "Sistemas Comerciales"
    },
    {
      id: 4,
      title: "Mini Splits Inteligentes",
      subtitle: "Control desde tu smartphone",
      description: "Conecta tu aire acondicionado a tu teléfono y controla la temperatura desde cualquier lugar.",
      image: "📱",
      bgGradient: "linear-gradient(135deg, #48cae4, #0077b6)",
      buttonText: "Aires Inteligentes"
    }
  ];

  // Auto-avance del carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div 
        className="hero-carousel" 
        style={{ background: slides[currentSlide].bgGradient }}
      >
        <div className="container">
          <div className="carousel-content">
            {/* Contenido del slide actual */}
            <div className="slide-content">
              <div className="text-content">
                <h1>{slides[currentSlide].title}</h1>
                <h2>{slides[currentSlide].subtitle}</h2>
                <p>{slides[currentSlide].description}</p>
                <div className="hero-buttons">
                  <button className="btn-primary">
                    {slides[currentSlide].buttonText}
                  </button>
                  <button className="btn-secondary">Cotizar Instalación</button>
                </div>
              </div>
              <div className="image-content">
                <div className="product-image">
                  <div className="product-emoji">{slides[currentSlide].image}</div>
                  <div className="product-badge">Nuevo</div>
                </div>
              </div>
            </div>

            {/* Controles del carousel */}
            <button className="carousel-btn carousel-prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-btn carousel-next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;