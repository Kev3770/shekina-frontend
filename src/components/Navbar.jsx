import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, ShoppingBag, Home as HomeIcon, Package, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import logoShekina from "../assets/logo-shekina.svg";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount, setIsCartOpen } = useCart();
  const { favoritesCount, setIsFavoritesOpen } = useFavorites();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/catalogo?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/573113524429?text=Hola! Me gustaría conocer más sobre sus productos',
      '_blank'
    );
  };

  const closeMenu = () => setIsMenuOpen(false);
  const isInCatalog = location.pathname === '/catalogo';

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoShekina} alt="Shekina Logo" className="w-6 h-6" />
            <div>
              <h1 className="font-serif text-2xl text-gray-800 tracking-wide">SHEKINA</h1>
              <p className="text-xs text-gray-500 tracking-widest">CREADAS PARA BRILLAR</p>
            </div>
          </Link>

          {/* Search Desktop */}
          {!isInCatalog && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full pl-12 pr-4 py-3 bg-primary-50 border-2 border-transparent rounded-soft focus:outline-none focus:border-primary-200 focus:bg-white transition-all"
                />
              </form>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {/* NavLinks */}
            <div className="flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-soft ${
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
                  `flex items-center gap-2 px-4 py-2 rounded-soft ${
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

            {/* Divider */}
            <div className="w-px h-8 bg-primary-200"></div>

            {/* FAVORITOS */}
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative p-3 hover:bg-primary-50 rounded-full transition-colors group"
            >
              <Heart size={22} className="text-gray-700 group-hover:text-accent-terracota transition-colors" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-terracota text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* CARRITO */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-primary-50 rounded-full transition-colors group"
            >
              <ShoppingBag size={22} className="text-gray-700 group-hover:text-accent-terracota transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-terracota text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary flex items-center gap-2 px-6 py-2.5"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        {!isInCatalog && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full pl-12 pr-4 py-3 bg-primary-50 rounded-soft"
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-1">

            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50"
            >
              <HomeIcon size={20} /> Inicio
            </NavLink>

            <NavLink
              to="/catalogo"
              onClick={closeMenu}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50"
            >
              <Package size={20} /> Catálogo
            </NavLink>

            <div className="h-px bg-primary-200 my-3"></div>

            {/* FAVORITOS móvil */}
            <button
              onClick={() => {
                setIsFavoritesOpen(true);
                closeMenu();
              }}
              className="flex items-center w-full gap-3 p-3 hover:bg-primary-50 rounded-lg"
            >
              <Heart size={20} /> Favoritos
              {favoritesCount > 0 && (
                <span className="ml-auto bg-accent-terracota text-white px-2 py-1 rounded-full text-xs">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* CARRITO móvil */}
            <button
              onClick={() => {
                setIsCartOpen(true);
                closeMenu();
              }}
              className="flex items-center w-full gap-3 p-3 hover:bg-primary-50 rounded-lg"
            >
              <ShoppingBag size={20} /> Mi Carrito
              {itemCount > 0 && (
                <span className="ml-auto bg-accent-terracota text-white px-2 py-1 rounded-full text-xs">
                  {itemCount}
                </span>
              )}
            </button>

            {/* WhatsApp móvil */}
            <button
              onClick={() => {
                handleWhatsAppClick();
                closeMenu();
              }}
              className="w-full btn-primary flex items-center justify-center gap-2 mt-4"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
