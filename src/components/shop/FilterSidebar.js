import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, productCount }) => {
  const [openSections, setOpenSections] = useState({
    price: true,
    brand: true,
    capacity: true,
    availability: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const priceRanges = [
    { value: 'all', label: 'Todos los precios' },
    { value: '0-100000', label: 'Hasta ₡100,000' },
    { value: '100000-200000', label: '₡100,000 - ₡200,000' },
    { value: '200000-300000', label: '₡200,000 - ₡300,000' },
    { value: '300000-500000', label: '₡300,000 - ₡500,000' },
    { value: '500000-', label: 'Más de ₡500,000' }
  ];

  const brands = [
    { value: 'all', label: 'Todas las marcas' },
    { value: 'LG', label: 'LG' },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'Hisense', label: 'Hisense' },
    { value: 'Mabe', label: 'Mabe' },
    { value: 'TCL', label: 'TCL' }
  ];

  const capacities = [
    { value: 'all', label: 'Todas las capacidades' },
    { value: '9000', label: '9,000 BTU' },
    { value: '10000', label: '10,000 BTU' },
    { value: '12000', label: '12,000 BTU' },
    { value: '18000', label: '18,000 BTU' },
    { value: '24000', label: '24,000 BTU' },
    { value: '36000', label: '36,000 BTU' }
  ];

  return (
    <div className="filter-sidebar-modern">
      <div className="filter-header-modern">
        <h3>Filtros</h3>
        <div className="filter-actions">
          <span className="product-count">{productCount} productos</span>
          <button onClick={onClearFilters} className="clear-filters-modern">
            <i className="fas fa-times"></i>
            Limpiar
          </button>
        </div>
      </div>

      <div className="filter-group-modern">
        <div 
          className="filter-section-header-modern"
          onClick={() => toggleSection('price')}
        >
          <h4>Precio</h4>
          <span className="arrow">{openSections.price ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</span>
        </div>
        {openSections.price && (
          <div className="filter-options-modern">
            {priceRanges.map(range => (
              <label key={range.value} className="filter-option-modern">
                <input
                  type="radio"
                  name="priceRange"
                  value={range.value}
                  checked={filters.priceRange === range.value}
                  onChange={(e) => onFilterChange('priceRange', e.target.value)}
                />
                <span className="checkmark"></span>
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-group-modern">
        <div 
          className="filter-section-header-modern"
          onClick={() => toggleSection('brand')}
        >
          <h4>Marca</h4>
          <span className="arrow">{openSections.brand ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</span>
        </div>
        {openSections.brand && (
          <div className="filter-options-modern">
            {brands.map(brand => (
              <label key={brand.value} className="filter-option-modern">
                <input
                  type="radio"
                  name="brand"
                  value={brand.value}
                  checked={filters.brand === brand.value}
                  onChange={(e) => onFilterChange('brand', e.target.value)}
                />
                <span className="checkmark"></span>
                <span>{brand.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-group-modern">
        <div 
          className="filter-section-header-modern"
          onClick={() => toggleSection('capacity')}
        >
          <h4>Capacidad (BTU)</h4>
          <span className="arrow">{openSections.capacity ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</span>
        </div>
        {openSections.capacity && (
          <div className="filter-options-modern">
            {capacities.map(capacity => (
              <label key={capacity.value} className="filter-option-modern">
                <input
                  type="radio"
                  name="capacity"
                  value={capacity.value}
                  checked={filters.capacity === capacity.value}
                  onChange={(e) => onFilterChange('capacity', e.target.value)}
                />
                <span className="checkmark"></span>
                <span>{capacity.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-group-modern">
        <div 
          className="filter-section-header-modern"
          onClick={() => toggleSection('availability')}
        >
          <h4>Disponibilidad</h4>
          <span className="arrow">{openSections.availability ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</span>
        </div>
        {openSections.availability && (
          <div className="filter-options-modern">
            <label className="filter-option-modern checkbox">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => onFilterChange('inStock', e.target.checked)}
              />
              <span className="checkmark"></span>
              <span>En stock</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;