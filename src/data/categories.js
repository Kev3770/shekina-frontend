// ============================================
// CATEGORÍAS - SHEKINA
// Categorías de productos organizadas
// ============================================

export const categories = [
  {
    id: 'all',
    name: 'Todos',
    slug: 'todos',
    icon: '✨',
    color: '#EAC7CE'
  },
  {
    id: 'lips',
    name: 'Labios',
    slug: 'labios',
    icon: '💋',
    color: '#CE7A67',
    description: 'Labiales, glosses, tintas y bálsamos'
  },
  {
    id: 'eyes',
    name: 'Ojos',
    slug: 'ojos',
    icon: '👁️',
    color: '#C9A0A9',
    description: 'Paletas de sombras con diseños adorables'
  },
  {
    id: 'face',
    name: 'Rostro',
    slug: 'rostro',
    icon: '✨',
    color: '#F5D2C4',
    description: 'Bases, correctores, polvos, rubores e iluminadores'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    slug: 'cuidado-piel',
    icon: '🌸',
    color: '#DCC9AA',
    description: 'Cuidado facial y corporal'
  },
  {
    id: 'tools',
    name: 'Herramientas',
    slug: 'herramientas',
    icon: '🖌️',
    color: '#E7D8CE',
    description: 'Brochas, esponjas y accesorios'
  },
  {
    id: 'combos',
    name: 'Kits y Combos',
    slug: 'kits-combos',
    icon: '🎁',
    color: '#DCC9AA',
    description: 'Sets especiales con descuento'
  }
];

// Función helper para obtener categoría por slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

// Función helper para obtener categoría por id
export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};