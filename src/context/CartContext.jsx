import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Cargar carrito del localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('shekina-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar con debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('shekina-cart', JSON.stringify(cart));
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    
    // ✅ Mostrar toast en lugar de abrir carrito
    setToastMessage(`${product.name} agregado al carrito`);
    setShowToast(true);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    let message = 'Hola quiero realizar este pedido\n\n';
    message += ' *Lista de productos:*\n\n';
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio unitario: ${formatPrice(item.price)}\n`;
      message += `   • Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += ` *TOTAL: ${formatPrice(total)}*\n\n`;
    message += ' Me gustaría confirmar la disponibilidad y coordinar el pago.';
    
    return message;
  };

  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/573113524429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        sendToWhatsApp,
        formatPrice,
        // ✅ Toast state
        toastMessage,
        showToast,
        setShowToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};