import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    isCartOpen,
    setIsCartOpen,
    formatPrice
  } = useCart();

  const sendToWhatsApp = () => {
    const phone = "573113834058"; 

    const message = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} - ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("%0A");

    const totalMessage = `%0A%0ATotal: ${formatPrice(total)}`;

    const url = `https://wa.me/${phone}?text=Hola!%20Quiero%20hacer%20este%20pedido:%0A${message}${totalMessage}`;

    window.open(url, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Panel del carrito */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="p-6 border-b border-primary-100 bg-gradient-shekina">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-accent-terracota" size={24} />
              <h2 className="text-2xl font-serif text-gray-800">Mi Carrito</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-primary-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-sm text-gray-600">
            {itemCount} {itemCount === 1 ? "producto" : "productos"}
          </p>
        </div>

        {/* Productos */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={40} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-serif text-gray-800 mb-2">Tu carrito está vacío</h3>
              <p className="text-sm text-gray-600 mb-6">Agrega productos para comenzar tu pedido</p>
              <button onClick={() => setIsCartOpen(false)} className="btn-primary">
                Ver Catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-primary-50 rounded-card p-4 relative group">
                  {/* Botón eliminar */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-soft opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>

                  <div className="flex gap-4">
                    {/* Imagen */}
                    <div className="w-20 h-20 bg-white rounded-soft overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h4 className="font-serif text-gray-800 mb-1 line-clamp-2 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-accent-terracota font-medium text-sm mb-2">
                        {formatPrice(item.price)}
                      </p>

                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <p className="font-serif text-gray-800 font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Botón limpiar carrito */}
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-red-500 hover:text-red-600 transition-colors py-2"
                >
                  Vaciar carrito
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer con total */}
        {cart.length > 0 && (
          <div className="border-t border-primary-100 p-6 bg-white space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-sans text-gray-700">Total:</span>
              <span className="text-2xl font-serif text-accent-terracota font-medium">
                {formatPrice(total)}
              </span>
            </div>

            {/* Nota informativa */}
            <div className="bg-primary-50 rounded-soft p-4 mb-4">
              <div className="flex gap-2">
                <MessageCircle size={20} className="text-accent-terracota flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-1">¿Cómo funciona?</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Al hacer clic en "Enviar Pedido", serás redirigido a WhatsApp con la lista de
                    productos. Allí coordinaremos disponibilidad y método de pago.
                  </p>
                </div>
              </div>
            </div>

            {/* Botón de enviar a WhatsApp */}
            <button
              onClick={sendToWhatsApp}
              className="w-full btn-primary flex items-center justify-center gap-2 text-base py-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Enviar Pedido por WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
