import { Link } from 'react-router-dom';
import { Sparkles, Heart, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import { products } from '../data/products';

const Home = () => {
  // Solo productos destacados (máximo 6)
  const featuredProducts = products.filter(product => product.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-primary-50">
      {/* ===== HERO SECTION ===== */}
      <Hero />

      {/* ===== PRODUCTOS DESTACADOS ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 rounded-full mb-4">
            <Sparkles size={16} className="text-accent-terracota" />
            <span className="text-sm font-sans text-gray-700">Lo más destacado</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">
            Productos Destacados
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección especial de productos que están causando sensación
          </p>
        </div>

        {/* Grid de productos destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón ver más */}
        <div className="text-center">
          <Link 
            to="/catalogo"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base"
          >
            <span>Ver Catálogo Completo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <section className="bg-white py-16 md:py-24 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nos preocupamos por ofrecerte la mejor experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Característica 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Heart className="text-accent-terracota" size={32} />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-3">Productos con Amor</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada producto es seleccionado con cuidado pensando en tu belleza natural
              </p>
            </div>

            {/* Característica 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-gold/30 to-accent-gold/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Shield className="text-accent-terracota" size={32} />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-3">Calidad Garantizada</h3>
              <p className="text-gray-600 leading-relaxed">
                Solo trabajamos con marcas reconocidas y productos de alta calidad
              </p>
            </div>

            {/* Característica 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Truck className="text-accent-terracota" size={32} />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-3">Envíos Rápidos</h3>
              <p className="text-gray-600 leading-relaxed">
                Coordinamos la entrega contigo para que recibas tus productos pronto
              </p>
            </div>

            {/* Característica 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-gold/30 to-accent-gold/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Sparkles className="text-accent-terracota" size={32} />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-3">Asesoría Personalizada</h3>
              <p className="text-gray-600 leading-relaxed">
                Te ayudamos a elegir los productos perfectos para ti por WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-gradient-shekina py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
            <Sparkles size={16} className="text-accent-terracota" />
            <span className="text-sm font-sans text-gray-700">Estamos para ayudarte</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">
            ¿Tienes alguna pregunta?
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            Contáctanos por WhatsApp y con gusto te atenderemos. 
            Resolvemos tus dudas sobre productos, disponibilidad y envíos.
          </p>
          
          <a 
            href="https://wa.me/573113834058?text=Hola! Me gustaría conocer más sobre sus productos" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary text-base px-8 py-4 shadow-hover"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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