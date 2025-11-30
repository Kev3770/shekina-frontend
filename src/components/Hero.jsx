import { Sparkles, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 gradient-shekina"></div>
      
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-terracota rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="text-center md:text-left space-y-6 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft">
              <Sparkles size={16} className="text-accent-gold" />
              <span className="text-sm font-sans text-gray-700">Nueva colección disponible</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl font-serif text-gray-800 leading-tight">
              Shekina
              <span className="block text-accent-terracota">creadas para brillar</span>
            </h1>

            {/* Descripción */}
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-lg">
              Aquí el maquillaje no es solo un producto… es la sensación de mirarte y decir:
              “Así me gusta verme.”
              <br />
              Elegimos cada detalle con amor, delicadeza  y glamour,
              para que cuando pruebes algo de aquí sientas esa confianza , esa emoción bonita…
              esa magia que no te da cualquier lugar.
              <br />
              Shekina: donde tu belleza se siente, no solo se ve. 💗
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToCatalog}
                className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4"
              >
                <Sparkles size={20} />
                <span>Ver Catálogo</span>
              </button>
              
              <a 
                href="https://wa.me/573113524429?text=Hola! Me gustaría conocer más sobre sus productos de belleza"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-serif text-accent-terracota">60+</div>
                <div className="text-sm text-gray-600 font-sans">Productos</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent-terracota">7</div>
                <div className="text-sm text-gray-600 font-sans">Categorías</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent-terracota">100%</div>
                <div className="text-sm text-gray-600 font-sans">Calidad</div>
              </div>
            </div>
          </div>

          {/* Imagen decorativa */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              {/* Círculo decorativo grande */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-white/50 backdrop-blur-sm rounded-full shadow-card"></div>
              
              {/* Imagen principal */}
              <div className="relative z-20 rounded-card overflow-hidden shadow-hover">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80"
                  alt="Productos de maquillaje"
                  className="w-full h-96 object-cover"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-card shadow-hover z-30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-sans text-gray-600">Envíos a todo</div>
                    <div className="text-lg font-serif text-gray-800">Colombia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;