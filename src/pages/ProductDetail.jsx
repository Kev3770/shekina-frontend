import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Package, 
  Shield, 
  Truck,
  Check,
  AlertCircle,
  Star,
  ZoomIn
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = {
  lips: 'Labios',
  eyes: 'Ojos',
  face: 'Rostro',
  skincare: 'Skincare',
  tools: 'Herramientas',
  combos: 'Kits y Combos'
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  // Buscar producto por slug
  const product = products.find(p => p.slug === slug);

  // Galería de imágenes (en producción vendrían del producto)
  const productImages = product ? [
    product.image,
    product.image, // Ángulo 2
    product.image, // Ángulo 3
    product.image, // Ángulo 4
  ] : [];

  // Productos relacionados (misma categoría, excluyendo el actual)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];

  // Productos que también podrían gustar (otras categorías)
  const suggestedProducts = product
    ? products
        .filter(p => p.id !== product.id && !relatedProducts.find(rp => rp.id === p.id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
    : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Si no encuentra el producto
  if (!product) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center px-6">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-gray-800 mb-2">
            Producto no encontrado
          </h2>
          <p className="text-gray-600 mb-6">
            El producto que buscas no existe o fue removido
          </p>
          <Link 
            to="/catalogo"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            <span>Ver Catálogo</span>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `${product.description} - ${formatPrice(product.price)}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error al compartir:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto:\n\n` +
      `📦 ${product.name}\n` +
      `💰 Precio: ${formatPrice(product.price)}\n` +
      `📊 Cantidad: ${quantity}\n\n` +
      `🔗 Link: ${window.location.href}`
    );
    window.open(`https://wa.me/573113834058?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-accent-terracota transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-accent-terracota transition-colors">
              Catálogo
            </Link>
            <span>/</span>
            <span className="text-gray-400">{categories[product.category]}</span>
            <span>/</span>
            <span className="text-gray-800 line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-accent-terracota transition-colors mb-8 font-sans group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* GALERÍA DE IMÁGENES */}
          <div className="space-y-4">
            {/* Imagen principal */}
            <div className="relative bg-white rounded-soft shadow-soft overflow-hidden aspect-square group">
              <img
                src={productImages[selectedImage]}
                alt={`${product.name} - Vista ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Botón zoom */}
              <button
                onClick={() => setShowZoom(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn size={20} className="text-gray-700" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.featured && (
                  <span className="bg-accent-terracota text-white text-xs font-sans px-3 py-1 rounded-full shadow-lg">
                    ⭐ Destacado
                  </span>
                )}
                {product.stock <= 2 && product.inStock && (
                  <span className="bg-amber-500 text-white text-xs font-sans px-3 py-1 rounded-full shadow-lg">
                    ⚡ Últimas {product.stock} unidades
                  </span>
                )}
              </div>
            </div>
            
            {/* Thumbnails - Múltiples ángulos */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`
                    aspect-square bg-white rounded-soft shadow-soft overflow-hidden
                    transition-all duration-300
                    ${selectedImage === idx 
                      ? 'ring-2 ring-accent-terracota scale-95' 
                      : 'hover:scale-95 opacity-70 hover:opacity-100'
                    }
                  `}
                >
                  <img
                    src={img}
                    alt={`Vista ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* INFORMACIÓN DEL PRODUCTO */}
          <div className="space-y-6">
            {/* Categoría */}
            <Link 
              to={`/catalogo?categoria=${product.category}`}
              className="inline-block px-4 py-2 bg-primary-200 text-accent-terracota text-sm font-sans rounded-full hover:bg-primary-300 transition-colors"
            >
              {categories[product.category]}
            </Link>

            {/* Nombre */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              {product.name}
            </h1>

            {/* Rating simulado */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(48 reseñas)</span>
            </div>

            {/* Precio */}
            <div className="flex items-baseline gap-4 py-4 border-y border-primary-100">
              <span className="text-4xl md:text-5xl font-serif text-accent-terracota">
                {formatPrice(product.price)}
              </span>
              {product.featured && (
                <div className="flex flex-col">
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.price * 1.2)}
                  </span>
                  <span className="text-xs text-green-600 font-medium">
                    Ahorra {Math.round(((product.price * 1.2 - product.price) / (product.price * 1.2)) * 100)}%
                  </span>
                </div>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 py-2">
              {product.inStock ? (
                <>
                  <Check className="text-green-600" size={20} />
                  <span className="text-green-600 font-sans text-sm font-medium">
                    Disponible ({product.stock} en stock)
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="text-red-600" size={20} />
                  <span className="text-red-600 font-sans text-sm font-medium">
                    Agotado temporalmente
                  </span>
                </>
              )}
            </div>

            {/* Descripción */}
            <div className="space-y-2">
              <h3 className="font-sans font-semibold text-gray-800 text-lg">
                Descripción
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Colores */}
            {product.colors.length > 0 && product.colors[0] !== 'transparent' && (
              <div className="space-y-3">
                <h3 className="font-sans font-semibold text-gray-800">
                  Colores disponibles
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      className={`
                        w-14 h-14 rounded-full border-2 transition-all duration-300
                        ${selectedColor === idx 
                          ? 'border-accent-terracota scale-110 shadow-lg ring-4 ring-accent-terracota/20' 
                          : 'border-gray-300 hover:scale-105 hover:border-gray-400'
                        }
                      `}
                      style={{ backgroundColor: color }}
                      aria-label={`Color ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Cantidad */}
            <div className="space-y-3">
              <h3 className="font-sans font-semibold text-gray-800">
                Cantidad
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-12 h-12 rounded-soft bg-white border-2 border-primary-200 text-gray-800 font-sans font-bold text-xl hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  -
                </button>
                <span className="text-3xl font-sans font-medium text-gray-800 w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                  className="w-12 h-12 rounded-soft bg-white border-2 border-primary-200 text-gray-800 font-sans font-bold text-xl hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleWhatsAppContact}
                disabled={!product.inStock}
                className="flex-1 btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart size={22} />
                <span className="font-medium">Comprar por WhatsApp</span>
              </button>
              
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`
                  w-16 h-16 rounded-soft border-2 transition-all duration-300
                  ${isFavorite 
                    ? 'bg-accent-terracota border-accent-terracota text-white scale-95' 
                    : 'bg-white border-primary-200 text-gray-600 hover:border-accent-terracota hover:scale-95'
                  }
                `}
                aria-label="Agregar a favoritos"
              >
                <Heart 
                  size={26} 
                  className="mx-auto"
                  fill={isFavorite ? 'currentColor' : 'none'}
                />
              </button>

              <button
                onClick={handleShare}
                className="w-16 h-16 rounded-soft bg-white border-2 border-primary-200 text-gray-600 hover:border-accent-terracota hover:scale-95 transition-all"
                aria-label="Compartir"
              >
                <Share2 size={26} className="mx-auto" />
              </button>
            </div>

            {/* Beneficios */}
            <div className="bg-gradient-shekina rounded-soft p-6 space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <Package className="text-accent-terracota flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-sans font-semibold text-gray-800">Producto 100% Original</h4>
                  <p className="text-sm text-gray-600">Garantía de autenticidad en todos nuestros productos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="text-accent-terracota flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-sans font-semibold text-gray-800">Envío Personalizado</h4>
                  <p className="text-sm text-gray-600">Coordinamos contigo para entrega rápida y segura</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="text-accent-terracota flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-sans font-semibold text-gray-800">Atención Personalizada</h4>
                  <p className="text-sm text-gray-600">Te asesoramos por WhatsApp en lo que necesites</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTOS SIMILARES */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                Productos Similares
              </h2>
              <Link 
                to={`/catalogo?categoria=${product.category}`}
                className="text-accent-terracota hover:text-accent-terracota/80 font-sans text-sm font-medium transition-colors flex items-center gap-1"
              >
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}

        {/* TAMBIÉN TE PODRÍA GUSTAR */}
        {suggestedProducts.length > 0 && (
          <section className="mb-16 pt-12 border-t border-primary-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                También te podría gustar
              </h2>
              <Link 
                to="/catalogo"
                className="text-accent-terracota hover:text-accent-terracota/80 font-sans text-sm font-medium transition-colors flex items-center gap-1"
              >
                Ver catálogo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((sugProduct) => (
                <ProductCard key={sugProduct.id} product={sugProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Modal de Zoom */}
      {showZoom && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowZoom(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setShowZoom(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={productImages[selectedImage]}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;