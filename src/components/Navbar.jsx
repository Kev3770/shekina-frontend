import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, ShoppingBag, Home as HomeIcon, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logoShekina from "../assets/logo-shekina.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirigir al catálogo con query param (opcional para futuro)
      window.location.href = `/catalogo?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573113834058?text=Hola! Me gustaría conocer más sobre sus productos', '_blank');
  };

  // Cerrar menú al cambiar de ruta
  const closeMenu = () => setIsMenuOpen(false);

  // Verificar si estamos en la ruta del catálogo
  const isInCatalog = location.pathname === '/catalogo';

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="">
              <img src={logoShekina} alt="Shekina Logo" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-2xl text-gray-800 tracking-wide">SHEKINA</h1>
              <p className="text-xs text-gray-500 font-sans tracking-widest">CREADAS PARA BRILLAR</p>
            </div>
          </Link>

          {/* Barra de búsqueda (Desktop) - Solo visible si NO estamos en catálogo */}
          {!isInCatalog && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full pl-12 pr-4 py-3 bg-primary-50 border-2 border-transparent rounded-soft focus:outline-none focus:border-primary-200 focus:bg-white transition-all duration-300 font-sans text-sm"
                />
              </form>
            </div>
          )}

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {/* Links de navegación */}
            <div className="flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-soft font-sans font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-100 text-accent-terracota'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-accent-terracota'
                  }`
                }
              >
                <HomeIcon size={18} />
                <span>Inicio</span>
              </NavLink>

              <NavLink
                to="/catalogo"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-soft font-sans font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-100 text-accent-terracota'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-accent-terracota'
                  }`
                }
              >
                <Package size={18} />
                <span>Catálogo</span>
              </NavLink>
            </div>

            {/* Divisor */}
            <div className="w-px h-8 bg-primary-200"></div>

            {/* Botón de Carrito */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-primary-50 rounded-full transition-colors duration-300 group"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={22} className="text-gray-700 group-hover:text-accent-terracota transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-terracota text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Botón WhatsApp */}
            <button 
              onClick={handleWhatsAppClick}
              className="btn-primary flex items-center gap-2 px-6 py-2.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Búsqueda móvil - Solo si NO estamos en catálogo */}
        {!isInCatalog && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full pl-12 pr-4 py-3 bg-primary-50 border-2 border-transparent rounded-soft focus:outline-none focus:border-primary-200 focus:bg-white transition-all font-sans text-sm"
              />
            </form>
          </div>
        )}
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary-100 bg-white">
          <div className="px-6 py-4 space-y-1">
            {/* Links de navegación */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors font-sans font-medium ${
                  isActive
                    ? 'bg-primary-100 text-accent-terracota'
                    : 'hover:bg-primary-50 text-gray-700'
                }`
              }
            >
              <HomeIcon size={20} />
              <span>Inicio</span>
            </NavLink>

            <NavLink
              to="/catalogo"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors font-sans font-medium ${
                  isActive
                    ? 'bg-primary-100 text-accent-terracota'
                    : 'hover:bg-primary-50 text-gray-700'
                }`
              }
            >
              <Package size={20} />
              <span>Catálogo</span>
            </NavLink>

            {/* Divisor */}
            <div className="h-px bg-primary-200 my-3"></div>

            {/* Carrito */}
            <button 
              onClick={() => {
                setIsCartOpen(true);
                closeMenu();
              }}
              className="w-full flex items-center gap-3 p-3 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="font-sans font-medium">Mi Carrito</span>
              {itemCount > 0 && (
                <span className="ml-auto bg-accent-terracota text-white px-2 py-1 rounded-full text-xs font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {/* WhatsApp */}
            <button 
              onClick={() => {
                handleWhatsAppClick();
                closeMenu();
              }}
              className="w-full btn-primary flex items-center justify-center gap-2 mt-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;