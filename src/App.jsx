import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { FavoritesProvider, useFavorites } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Toast from './components/Toast';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';

// Componente para scroll al inicio
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantáneo al inicio sin animación
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { toastMessage: cartToast, showToast: showCartToast, setShowToast: setShowCartToast } = useCart();
  const { toastMessage: favToast, showToast: showFavToast, setShowToast: setShowFavToast } = useFavorites();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <Cart />
      <Favorites />
      
      {/* Toast del carrito */}
      <Toast 
        message={cartToast}
        isVisible={showCartToast}
        onClose={() => setShowCartToast(false)}
      />
      
      {/* Toast de favoritos */}
      <Toast 
        message={favToast}
        isVisible={showFavToast}
        onClose={() => setShowFavToast(false)}
      />
      
      <main className="flex-1 animate-softFadeIn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/producto/:slug" element={<ProductDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          <AppContent />
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;