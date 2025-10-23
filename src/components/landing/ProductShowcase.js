import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Aire Split 12,000 BTU",
      price: "$15,999",
      type: "Residencial",
      image: "placeholder"
    },
    {
      id: 2,
      name: "Aire Inverter 18,000 BTU",
      price: "$22,499",
      type: "Comercial",
      image: "placeholder"
    },
    {
      id: 3,
      name: "Mini Split 9,000 BTU",
      price: "$12,999",
      type: "Habitación",
      image: "placeholder"
    }
  ];

  return (
    <section className="product-showcase">
      <div className="container">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-showcase">{product.image}</div>
              <div className="product-info">
                <span className="product-type">{product.type}</span>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="btn-outline">Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
        <div className="showcase-actions">
          <button className="btn-primary">Ver Todos los Productos</button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;