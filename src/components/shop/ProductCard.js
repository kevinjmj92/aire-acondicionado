import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const formatPrice = (price) => {
    return `₡ ${price.toLocaleString('es-CR')}`;
  };

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik0xMjUgMTI1SDE3NVYxNzVIMTI1VjEyNVoiIGZpbGw9IiNDOEM4QzgiLz4KPHRleHQgeD0iMTUwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODgiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+QWlyZSBBY29uZGljaW9uYWRvPC90ZXh0Pgo8L3N2Zz4K';
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }

    return stars;
  };

  if (viewMode === 'list') {
    return (
      <div className="product-card-list">
        <div className="product-list-content">
          <div className="product-list-image">
            {product.isFeatured && (
              <span className="featured-badge">🔥 Oferta</span>
            )}
            {product.discount && (
              <span className="discount-badge">-{product.discount}</span>
            )}
            <img 
              src={product.imageUrl} 
              alt={product.name}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          
          <div className="product-list-info">
            <div className="product-meta">
              <span className="brand-tag">{product.brand}</span>
              <span className="capacity-tag">{product.capacity} BTU</span>
            </div>
            
            <h3 className="product-name">{product.name}</h3>
            
            <div className="product-rating">
              <div className="stars">
                {renderRating(product.rating)}
              </div>
              <span className="review-count">({product.reviews})</span>
            </div>
            
            <p className="product-description">
              Aire acondicionado de alta eficiencia energética con tecnología inverter...
            </p>
          </div>
          
          <div className="product-list-actions">
            <div className="price-container">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            
            <div className="product-actions">
              <button className="details-button">
                <i className="fas fa-eye"></i>
                Ver Detalles
              </button>
              <button className="cart-button">
                <i className="fas fa-shopping-cart"></i>
                Agregar
              </button>
              <button className="wishlist-button">
                <i className="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista Grid (por defecto)
  return (
    <div className="product-card-grid">
      <div className="product-image-container">
        {product.isFeatured && (
          <span className="featured-badge">🔥 Oferta</span>
        )}
        {product.discount && (
          <span className="discount-badge">-{product.discount}</span>
        )}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="product-image"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="product-hover-actions">
          <button className="quick-view-btn">
            <i className="fas fa-eye"></i>
          </button>
          <button className="wishlist-btn">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-meta">
          <span className="brand-tag">{product.brand}</span>
          <span className="capacity-tag">{product.capacity} BTU</span>
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {renderRating(product.rating)}
          </div>
          <span className="review-count">({product.reviews})</span>
        </div>
        
        <div className="price-container">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        
        <div className="product-actions">
          <button className="cart-button-full">
            <i className="fas fa-shopping-cart"></i>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;