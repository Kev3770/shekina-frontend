import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import { useProducts } from './hooks/useProducts';
import { CartProvider } from './context/CartContext';

function App() {
  const { setSearchQuery } = useProducts();

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar onSearchChange={setSearchQuery} />
        <Cart />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;