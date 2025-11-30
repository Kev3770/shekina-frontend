import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Cargar favoritos del localStorage al iniciar
  useEffect(() => {
    const savedFavorites = localStorage.getItem('shekina_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('shekina_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Agregar o quitar de favoritos
  const toggleFavorite = (product) => {
    const isFavorite = favorites.some(fav => fav.id === product.id);
    
    if (isFavorite) {
      // Remover de favoritos
      setFavorites(favorites.filter(fav => fav.id !== product.id));
      showToastMessage('Eliminado de favoritos');
    } else {
      // Agregar a favoritos
      setFavorites([...favorites, product]);
      showToastMessage('¡Agregado a favoritos! 💖');
    }
  };

  // Verificar si un producto está en favoritos
  const isFavorite = (productId) => {
    return favorites.some(fav => fav.id === productId);
  };

  // Remover de favoritos
  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(fav => fav.id !== productId));
    showToastMessage('Eliminado de favoritos');
  };

  // Limpiar todos los favoritos
  const clearFavorites = () => {
    setFavorites([]);
    showToastMessage('Favoritos limpiados');
  };

  // Mostrar mensaje toast
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Contador de favoritos
  const favoritesCount = favorites.length;

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    removeFromFavorites,
    clearFavorites,
    favoritesCount,
    isFavoritesOpen,
    setIsFavoritesOpen,
    showToast,
    setShowToast,
    toastMessage
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;