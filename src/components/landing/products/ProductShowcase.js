import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Mini Split Inverter 12,000 BTU",
      brand: "LG",
      price: "₡ 138,999",
      originalPrice: "₡ 239,999",
      discount: "42%",
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Aire Acondicionado Tipo Ventana",
      brand: "Samsung",
      price: "₡ 110,500",
      originalPrice: "₡ 139,999",
      discount: "21%",
      imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Mini Split Frío/Calor",
      brand: "Hisense",
      price: "₡ 184,500",
      originalPrice: "₡ 229,999",
      discount: "20%",
      imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Aire Portátil 10,000 BTU",
      brand: "Mabe",
      price: "₡ 99,999",
      originalPrice: "₡ 129,999",
      discount: "23%",
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Mini Split Inverter 18,000 BTU",
      brand: "TCL",
      price: "₡ 199,999",
      originalPrice: "₡ 259,999",
      discount: "23%",
      imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop"
    }
  ];

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik0xMjUgMTI1SDE3NVYxNzVIMTI1VjEyNVoiIGZpbGw9IiNDOEM4QzgiLz4KPHRleHQgeD0iMTUwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODgiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+QWlyZSBBY29uZGljaW9uYWRvPC90ZXh0Pgo8L3N2Zz4K';
  };

  // Función para el botón "Ir a Tienda" (por ahora no hace nada)
  const handleGoToStore = () => {
    navigate('/tienda');
  };

  return (
    <section className="product-showcase">
      <div className="container">
        <h2 className="section-title">
          🎯 Ofertas Especiales
        </h2>
        
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={600}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
          itemClass="carousel-item"
          additionalTransform={0}
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <span className="discount-badge">
                  -{product.discount}
                </span>
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="product-image"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              
              <div className="product-info">
                <h3 className="brand-name">
                  {product.brand}
                </h3>
                <p className="product-name">
                  {product.name}
                </p>
                
                <div className="price-container">
                  <span className="current-price">
                    {product.price}
                  </span>
                  <span className="original-price">
                    {product.originalPrice}
                  </span>
                </div>
                
                <button className="offer-button">
                  Ver Oferta
                </button>
              </div>
            </div>
          ))}
        </Carousel>
        
        <div className="swipe-hint"></div>
        
        {/* Botón "Ir a Tienda" agregado aquí */}
        <div className="store-button-container">
          <button 
            className="store-button"
            onClick={handleGoToStore}
          >
            🛒 Ir a Tienda
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;