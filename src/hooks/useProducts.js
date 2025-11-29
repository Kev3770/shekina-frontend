import { useState, useMemo } from 'react';
import { products, getProductsByCategory, getFeaturedProducts, searchProducts } from '../data/products';

export const useProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // featured, price-asc, price-desc, name

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filtrar por categoría
    if (activeCategory !== 'all') {
      result = getProductsByCategory(activeCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      result = searchProducts(searchQuery);
    }

    // Ordenar
    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  // Obtener productos destacados
  const featuredProducts = useMemo(() => {
    return getFeaturedProducts();
  }, []);

  // Obtener estadísticas
  const stats = useMemo(() => {
    return {
      total: products.length,
      inStock: products.filter(p => p.inStock).length,
      featured: products.filter(p => p.featured).length,
      categories: [...new Set(products.map(p => p.category))].length
    };
  }, []);

  return {
    products: filteredProducts,
    featuredProducts,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    stats
  };
};