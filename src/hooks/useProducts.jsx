import { useState, useMemo } from 'react';
import { products } from '../data/products';
import { categories } from '../data/categories';

/**
 * Hook personalizado para manejar lógica de productos
 * Maneja filtrado, búsqueda y estadísticas
 */
export const useProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Productos filtrados por categoría y búsqueda
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.category && product.category.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Productos destacados
  const featuredProducts = useMemo(() => {
    return products.filter(product => product.featured);
  }, []);

  // Productos por categoría
  const getProductsByCategory = (categoryId) => {
    if (categoryId === 'all') return products;
    return products.filter(product => product.category === categoryId);
  };

  // Buscar productos
  const searchProducts = (query) => {
    if (!query.trim()) return products;
    
    const lowerQuery = query.toLowerCase().trim();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  };

  // Obtener producto por ID
  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  // Obtener producto por slug
  const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug);
  };

  // Estadísticas
  const stats = useMemo(() => {
    return {
      total: products.length,
      featured: featuredProducts.length,
      categories: categories.length - 1, // -1 para excluir 'all'
      byCategory: categories.reduce((acc, cat) => {
        if (cat.id === 'all') return acc;
        acc[cat.id] = products.filter(p => p.category === cat.id).length;
        return acc;
      }, {})
    };
  }, [featuredProducts.length]);

  // Resetear filtros
  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return {
    // State
    activeCategory,
    searchQuery,
    
    // Setters
    setActiveCategory,
    setSearchQuery,
    
    // Data
    products: filteredProducts,
    allProducts: products,
    featuredProducts,
    categories,
    stats,
    
    // Methods
    getProductsByCategory,
    searchProducts,
    getProductById,
    getProductBySlug,
    resetFilters,
    
    // Computed
    hasResults: filteredProducts.length > 0,
    isFiltered: activeCategory !== 'all' || searchQuery.trim() !== ''
  };
};