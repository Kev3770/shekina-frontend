import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Sparkles, TrendingUp, Package } from 'lucide-react';

const Home = () => {
  const {
    products,
    featuredProducts,
    activeCategory,
    setActiveCategory,
    searchQuery,
    stats
  } = useProducts();

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 rounded-full mb-4">
            <Sparkles size={16} className="text-accent-terracota" />
            <span className="text-sm font-sans text-gray-700">Lo más destacado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección especial de productos que están causando sensación
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="text-accent-terracota" size={24} />
              </div>
              <div className="text-3xl font-serif text-gray-800 mb-1">{stats.total}</div>
              <div className="text-sm text-gray-600">Productos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-accent-terracota" size={24} />
              </div>
              <div className="text-3xl font-serif text-gray-800 mb-1">{stats.featured}</div>
              <div className="text-sm text-gray-600">Destacados</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="text-accent-terracota" size={24} />
              </div>
              <div className="text-3xl font-serif text-gray-800 mb-1">{stats.categories}</div>
              <div className="text-sm text-gray-600">Categorías</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-terracota" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-3xl font-serif text-gray-800 mb-1">100%</div>
              <div className="text-sm text-gray-600">Calidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Catálogo Completo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora toda nuestra colección de productos de belleza
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                {searchQuery ? (
                  <>Mostrando {products.length} resultados para "{searchQuery}"</>
                ) : (
                  <>Mostrando {products.length} productos</>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-serif text-gray-800 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? 'Intenta con otros términos de búsqueda'
                : 'No hay productos en esta categoría'
              }
            </p>
            <button 
              onClick={() => {
                setActiveCategory('all');
              }}
              className="btn-primary"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-shekina py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contáctanos por WhatsApp y con gusto te atenderemos
          </p>
          <a 
            href="https://wa.me/573001234567" 
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

export default Home;