import { MessageCircle, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, formatPrice } = useCart();

  const formatPriceLocal = (price) => {
    return formatPrice(price);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWhatsAppClick = () => {
    const message = `Hola! Me interesa este producto:
    
*${product.name}*
Precio: ${formatPriceLocal(product.price)}

¿Está disponible?`;
    
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card group overflow-hidden">
      {/* Imagen del producto */}
      <div className="relative overflow-hidden bg-primary-50 aspect-square">
        {/* Badge de descuento */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-accent-terracota text-white px-3 py-1 rounded-full text-xs font-medium z-10">
            -{discount}%
          </div>
        )}

        {/* Badge de destacado */}
        {product.featured && (
          <div className="absolute top-3 right-3 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-medium z-10 shadow-soft">
            ✨ Destacado
          </div>
        )}

        {/* Imagen */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-primary-100 animate-pulse"></div>
        )}

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Botones de acción (aparecen al hover) */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-white hover:bg-primary-50 text-gray-800 px-4 py-3 rounded-soft font-sans text-sm font-medium transition-all duration-300 shadow-hover flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            <span>Agregar</span>
          </button>
          
          <button 
            onClick={handleWhatsAppClick}
            className="flex-1 btn-primary px-4 py-3 flex items-center justify-center gap-2 shadow-hover"
          >
            <MessageCircle size={16} />
            <span>Consultar</span>
          </button>
        </div>
      </div>

      {/* Información del producto */}
      <div className="p-5">
        {/* Colores disponibles */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mb-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                title={color}
              ></div>
            ))}
            {product.colors.length > 4 && (
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                +{product.colors.length - 4}
              </div>
            )}
          </div>
        )}

        {/* Nombre */}
        <h3 className="text-base font-serif text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Precios */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-serif text-accent-terracota font-medium">
            {formatPriceLocal(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPriceLocal(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock y botón de WhatsApp */}
        <div className="flex items-center justify-between">
          <span className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? `Disponible (${product.stock})` : 'Agotado'}
          </span>
          
          {/* Indicador de stock bajo */}
          {product.inStock && product.stock <= 2 && (
            <span className="text-xs text-orange-600 font-medium">
              ¡Últimas unidades!
            </span>
          )}
        </div>

        {/* Botones de acción mobile (visible siempre en móvil) */}
        <div className="md:hidden flex gap-2 mt-4">
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-white border-2 border-primary-200 hover:bg-primary-50 text-gray-800 px-4 py-3 rounded-soft font-sans text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            <span>Agregar</span>
          </button>
          
          <button 
            onClick={handleWhatsAppClick}
            className="flex-1 btn-primary px-4 py-3 flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;