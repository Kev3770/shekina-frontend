import { useState } from 'react';
import { Search, Package, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { useProducts } from '../hooks/useProducts';

const Catalog = () => {
  const {
    products,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    hasResults,
    isFiltered,
    resetFilters,
    stats
  } = useProducts();

  const [localSearch, setLocalSearch] = useState('');

  // Manejar búsqueda con delay
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    
    // Debounce simple
    const timeoutId = setTimeout(() => {
      setSearchQuery(value);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  // Limpiar búsqueda
  const clearSearch = () => {
    setLocalSearch('');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* ===== HEADER DEL CATÁLOGO ===== */}
      <section className="bg-gradient-shekina border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Catálogo Completo
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explora nuestra colección completa de productos de belleza
            </p>
          </div>

          {/* Barra de búsqueda */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={localSearch}
                onChange={handleSearchChange}
                placeholder="Buscar productos por nombre o descripción..."
                className="w-full pl-12 pr-12 py-4 bg-white border-2 border-primary-200 rounded-soft focus:outline-none focus:border-accent-terracota transition-all duration-300 font-sans text-base shadow-soft"
              />
              {localSearch && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-50 rounded-full transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Filtros de categoría */}
        <div className="mb-8">
          <CategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Información de resultados */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">
              {searchQuery ? (
                <>
                  Mostrando <span className="font-medium text-gray-800">{products.length}</span> resultados 
                  para "<span className="font-medium text-accent-terracota">{searchQuery}</span>"
                </>
              ) : (
                <>
                  Mostrando <span className="font-medium text-gray-800">{products.length}</span> productos
                  {activeCategory !== 'all' && (
                    <span> en <span className="font-medium text-accent-terracota">
                      {activeCategory}
                    </span></span>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Botón resetear filtros */}
          {isFiltered && (
            <button
              onClick={resetFilters}
              className="text-sm text-accent-terracota hover:text-accent-terracota/80 font-medium transition-colors flex items-center gap-2"
            >
              <X size={16} />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {/* Grid de productos */}
        {hasResults ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          // Estado vacío
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={40} className="text-gray-400" />
            </div>
            
            <h3 className="text-2xl font-serif text-gray-800 mb-3">
              No se encontraron productos
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchQuery 
                ? `No hay productos que coincidan con "${searchQuery}". Intenta con otros términos de búsqueda.`
                : 'No hay productos en esta categoría actualmente.'
              }
            </p>

            <button 
              onClick={resetFilters}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Ver todos los productos</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* ===== ESTADÍSTICAS RÁPIDAS ===== */}
      {hasResults && (
        <section className="bg-white py-12 border-t border-primary-100 mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-serif text-accent-terracota mb-1">
                  {stats.total}
                </div>
                <div className="text-sm text-gray-600">Productos Totales</div>
              </div>
              
              <div>
                <div className="text-3xl font-serif text-accent-terracota mb-1">
                  {stats.featured}
                </div>
                <div className="text-sm text-gray-600">Destacados</div>
              </div>
              
              <div>
                <div className="text-3xl font-serif text-accent-terracota mb-1">
                  {stats.categories}
                </div>
                <div className="text-sm text-gray-600">Categorías</div>
              </div>
              
              <div>
                <div className="text-3xl font-serif text-accent-terracota mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Calidad</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA CONTACTO ===== */}
      <section className="bg-gradient-shekina py-16 border-t border-primary-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contáctanos por WhatsApp y te ayudaremos a encontrar el producto perfecto
          </p>
          <a 
            href="https://wa.me/573113834058?text=Hola! Estoy buscando un producto específico" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary text-base px-8 py-4"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Contáctanos por WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Catalog;