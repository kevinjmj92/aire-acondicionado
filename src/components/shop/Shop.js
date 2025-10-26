import React, { useState, useEffect, useCallback } from 'react';
import './Shop.css';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

// Datos de ejemplo
const sampleProducts = [
  {
    id: 1,
    name: "Mini Split Inverter 12,000 BTU",
    brand: "LG",
    price: 138999,
    originalPrice: 239999,
    discount: "42%",
    capacity: "12000",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    isFeatured: true,
    inStock: true,
    rating: 4.5,
    reviews: 24
  },
  {
    id: 2,
    name: "Aire Acondicionado Tipo Ventana",
    brand: "Samsung",
    price: 110500,
    originalPrice: 139999,
    discount: "21%",
    capacity: "10000",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop",
    isFeatured: true,
    inStock: true,
    rating: 4.2,
    reviews: 18
  },
  {
    id: 3,
    name: "Mini Split Frío/Calor 18,000 BTU",
    brand: "Hisense",
    price: 184500,
    originalPrice: 229999,
    discount: "20%",
    capacity: "18000",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop",
    isFeatured: false,
    inStock: true,
    rating: 4.3,
    reviews: 15
  },
  {
    id: 4,
    name: "Aire Portátil 10,000 BTU",
    brand: "Mabe",
    price: 99999,
    originalPrice: 129999,
    discount: "23%",
    capacity: "10000",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    isFeatured: false,
    inStock: true,
    rating: 4.0,
    reviews: 12
  },
  {
    id: 5,
    name: "Mini Split Inverter 24,000 BTU",
    brand: "TCL",
    price: 259999,
    originalPrice: 319999,
    discount: "19%",
    capacity: "24000",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop",
    isFeatured: true,
    inStock: true,
    rating: 4.7,
    reviews: 31
  },
  {
    id: 6,
    name: "Aire Acondicionado Central 36,000 BTU",
    brand: "LG",
    price: 459999,
    originalPrice: 559999,
    discount: "18%",
    capacity: "36000",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    isFeatured: false,
    inStock: true,
    rating: 4.8,
    reviews: 8
  },
  {
    id: 7,
    name: "Mini Split 9,000 BTU",
    brand: "Samsung",
    price: 89999,
    originalPrice: 119999,
    discount: "25%",
    capacity: "9000",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop",
    isFeatured: true,
    inStock: true,
    rating: 4.1,
    reviews: 22
  },
  {
    id: 8,
    name: "Aire Tipo Ventana 12,000 BTU",
    brand: "Mabe",
    price: 129999,
    originalPrice: 159999,
    discount: "19%",
    capacity: "12000",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    isFeatured: false,
    inStock: true,
    rating: 4.4,
    reviews: 16
  },
  {
    id: 9,
    name: "Mini Split Inverter 12,000 BTU Premium",
    brand: "LG",
    price: 159999,
    originalPrice: 199999,
    discount: "20%",
    capacity: "12000",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 10,
    name: "Aire Portátil 12,000 BTU",
    brand: "Samsung",
    price: 149999,
    originalPrice: 189999,
    discount: "21%",
    capacity: "12000",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop",
    isFeatured: false,
    inStock: true,
    rating: 4.2,
    reviews: 19
  },
  {
    id: 11,
    name: "Mini Split 24,000 BTU Inverter",
    brand: "Hisense",
    price: 289999,
    originalPrice: 349999,
    discount: "17%",
    capacity: "24000",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-375db59396bb?w=300&h=300&fit=crop",
    isFeatured: true,
    inStock: true,
    rating: 4.6,
    reviews: 27
  },
  {
    id: 12,
    name: "Aire Tipo Ventana 18,000 BTU",
    brand: "Mabe",
    price: 189999,
    originalPrice: 229999,
    discount: "17%",
    capacity: "18000",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    isFeatured: false,
    inStock: true,
    rating: 4.3,
    reviews: 14
  }
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9); // Cambiado a 9 para grid 3x3
  const [filters, setFilters] = useState({
    priceRange: 'all',
    brand: 'all',
    capacity: 'all',
    sortBy: 'featured',
    inStock: false
  });
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filterProducts = useCallback(() => {
    let filtered = [...products];

    // Filtrar por precio
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    // Filtrar por marca
    if (filters.brand !== 'all') {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    // Filtrar por capacidad
    if (filters.capacity !== 'all') {
      filtered = filtered.filter(product => product.capacity === filters.capacity);
    }

    // Filtrar por disponibilidad
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Ordenar productos
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  useEffect(() => {
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterProducts();
    setCurrentPage(1);
  }, [filterProducts]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: 'all',
      brand: 'all',
      capacity: 'all',
      sortBy: 'featured',
      inStock: false
    });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => paginate(currentPage - 1)}
          className="pagination-btn"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      );
    }

    // First page and ellipsis
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className="pagination-btn"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className="pagination-ellipsis">...</span>);
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    // Last page and ellipsis
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2" className="pagination-ellipsis">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className="pagination-btn"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => paginate(currentPage + 1)}
          className="pagination-btn"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="shop-modern">
      <div className="shop-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Inicio</span>
          <i className="fas fa-chevron-right"></i>
          <span className="active">Tienda</span>
        </div>

        <div className="shop-header-modern">
          <div className="shop-title-section">
            <h1>Tienda de Aires Acondicionados</h1>
            <p>Encuentra el mejor equipo para tu hogar u oficina</p>
          </div>
          
          <div className="shop-controls">
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <i className="fas fa-th"></i>
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
            
            <div className="sort-controls">
              <span>Ordenar por:</span>
              <select 
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="sort-select-modern"
              >
                <option value="featured">Destacados</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="name">Nombre A-Z</option>
                <option value="rating">Mejor Valorados</option>
              </select>
            </div>
          </div>
        </div>

        <div className="shop-content-modern">
          <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            productCount={filteredProducts.length}
          />
          
          <div className="products-main-section">
            <div className="products-info-bar">
              <div className="results-count">
                Mostrando {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} de {filteredProducts.length} productos
              </div>
            </div>

            <div className={`products-grid-modern ${viewMode}`}>
              {currentProducts.length > 0 ? (
                currentProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    viewMode={viewMode}
                  />
                ))
              ) : (
                <div className="no-products-modern">
                  <div className="no-products-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3>No se encontraron productos</h3>
                  <p>Intenta ajustar los filtros para ver más resultados</p>
                  <button onClick={clearFilters} className="clear-filters-btn-modern">
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-modern">
                <div className="pagination-info">
                  Página {currentPage} de {totalPages}
                </div>
                <div className="pagination-controls">
                  {renderPagination()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;