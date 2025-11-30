import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

const Favorites = () => {
  const navigate = useNavigate();
  const {
    favorites,
    removeFromFavorites,
    clearFavorites,
    favoritesCount,
    isFavoritesOpen,
    setIsFavoritesOpen,
  } = useFavorites();

  const { addToCart, formatPrice } = useCart();

  if (!isFavoritesOpen) return null;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleViewProduct = (slug) => {
    setIsFavoritesOpen(false);
    navigate(`/producto/${slug}`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => setIsFavoritesOpen(false)}
      ></div>

      {/* Panel de favoritos */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col animate-slideIn">
        {/* Header */}
        <div className="p-6 border-b border-primary-100 bg-gradient-shekina">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Heart className="text-accent-terracota fill-accent-terracota" size={24} />
              <h2 className="text-2xl font-serif text-gray-800">Mis Favoritos</h2>
            </div>
            <button
              onClick={() => setIsFavoritesOpen(false)}
              className="p-2 hover:bg-primary-100 rounded-full transition-colors"
              aria-label="Cerrar favoritos"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-sm text-gray-600">
            {favoritesCount} {favoritesCount === 1 ? "producto guardado" : "productos guardados"}
          </p>
        </div>

        {/* Productos favoritos */}
        <div className="flex-1 overflow-y-auto p-6">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <Heart size={40} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-serif text-gray-800 mb-2">
                Sin favoritos aún
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Guarda tus productos favoritos con el ícono de corazón
              </p>
              <button 
                onClick={() => setIsFavoritesOpen(false)} 
                className="btn-primary"
              >
                Ver Catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-primary-50 rounded-card p-4 relative group"
                >
                  {/* Botón eliminar */}
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-soft opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>

                  <div 
                    className="flex gap-4 cursor-pointer"
                    onClick={() => handleViewProduct(item.slug)}
                  >
                    {/* Imagen */}
                    <div className="w-20 h-20 bg-white rounded-soft overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-gray-800 mb-1 line-clamp-2 text-sm hover:text-accent-terracota transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-accent-terracota font-medium text-lg mb-2">
                        {formatPrice(item.price)}
                      </p>

                      {/* Colores si existen */}
                      {item.colors && item.colors.length > 0 && item.colors[0] !== 'transparent' && (
                        <div className="flex gap-1 mb-2">
                          {item.colors.slice(0, 3).map((color, idx) => (
                            <div
                              key={idx}
                              className="w-5 h-5 rounded-full border border-gray-200"
                              style={{ backgroundColor: color }}
                              title={`Color ${idx + 1}`}
                            />
                          ))}
                          {item.colors.length > 3 && (
                            <span className="text-xs text-gray-500 ml-1">
                              +{item.colors.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Botón agregar al carrito */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item);
                        }}
                        className="w-full bg-white hover:bg-primary-100 text-gray-800 px-3 py-2 rounded-soft font-sans text-xs font-medium transition-all flex items-center justify-center gap-1 border border-primary-200"
                      >
                        <ShoppingBag size={14} />
                        <span>Agregar al carrito</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Botón limpiar favoritos */}
              {favorites.length > 0 && (
                <button
                  onClick={clearFavorites}
                  className="w-full text-sm text-red-500 hover:text-red-600 transition-colors py-2 font-medium"
                >
                  Limpiar todos los favoritos
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="border-t border-primary-100 p-6 bg-white space-y-3">
            <div className="bg-primary-50 rounded-soft p-4">
              <div className="flex gap-2 items-start">
                <Heart size={20} className="text-accent-terracota flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-1">
                    💡 Tip
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Agrega tus productos favoritos al carrito para hacer tu pedido por WhatsApp
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsFavoritesOpen(false);
                navigate('/catalogo');
              }}
              className="w-full btn-secondary py-3 text-sm"
            >
              Seguir explorando
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;