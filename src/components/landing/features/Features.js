import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🚚",
      title: "Envío Gratis",
      description: "En compras mayores a $500"
    },
    {
      icon: "🔧",
      title: "Instalación Profesional",
      description: "Técnicos certificados"
    },
    {
      icon: "🛡️",
      title: "Garantía Extendida",
      description: "Hasta 3 años de garantía"
    },
    {
      icon: "💳",
      title: "Financiamiento",
      description: "Hasta 12 meses sin intereses"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>¿Por qué elegirnos?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;