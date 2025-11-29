// ============================================
// PRODUCTOS - SHEKINA
// Base de datos REAL del inventario
// ============================================

export const products = [
  // ===== LABIOS =====
  {
    id: 1,
    name: 'Labial Beltbelt Gato',
    slug: 'labial-beltbelt-gato',
    category: 'lips',
    price: 10000,
    costPrice: 5500,
    description: 'Labial cremoso con diseño adorable de gato. Textura suave y pigmentación duradera.',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500',
    colors: ['#EAC7CE', '#CE7A67', '#C9A0A9'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 2,
    name: 'Labial en Barra Retráctil',
    slug: 'labial-barra-retractil',
    category: 'lips',
    price: 12500,
    costPrice: 5500,
    description: 'Labial retráctil de fácil aplicación. Acabado cremoso y confortable.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    colors: ['#CE7A67', '#B8664E', '#F5D2C4'],
    inStock: true,
    featured: false,
    stock: 2
  },
  {
    id: 3,
    name: 'Labial 2 en 1 con Delineador',
    slug: 'labial-delineador-2en1',
    category: 'lips',
    price: 6000,
    costPrice: 4900,
    description: 'Labial innovador con delineador integrado. Precisión y color en un solo producto.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500',
    colors: ['#CE7A67', '#C9A0A9'],
    inStock: true,
    featured: false,
    stock: 2
  },
  {
    id: 4,
    name: 'Tinta Gloss con Moño',
    slug: 'tinta-gloss-mono',
    category: 'lips',
    price: 12000,
    costPrice: 7400,
    description: 'Tinta gloss de larga duración con acabado brillante. Empaque delicado con moño.',
    image: 'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 5,
    name: 'Tinta de Labios Melody & Curumi',
    slug: 'tinta-melody-curumi',
    category: 'lips',
    price: 5000,
    costPrice: 3500,
    description: 'Tinta labial de alta pigmentación. Acabado mate aterciopelado.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    colors: ['#CE7A67', '#C9A0A9', '#EAC7CE'],
    inStock: true,
    featured: false,
    stock: 3
  },
  {
    id: 6,
    name: 'Tinta Labios con Corbatín',
    slug: 'tinta-corbatin',
    category: 'lips',
    price: 6000,
    costPrice: 3200,
    description: 'Tinta labial con diseño elegante de corbatín. Larga duración y acabado satinado.',
    image: 'https://images.unsplash.com/photo-1631730486572-226c5c3e6e10?w=500',
    colors: ['#CE7A67', '#B8664E'],
    inStock: true,
    featured: false,
    stock: 3
  },
  {
    id: 7,
    name: 'Gloss Gege Bear',
    slug: 'gloss-gege-bear',
    category: 'lips',
    price: 10000,
    costPrice: 6200,
    description: 'Gloss hidratante con diseño de osito. Brillo natural sin efecto pegajoso.',
    image: 'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=500',
    colors: ['transparent', '#EAC7CE'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 8,
    name: 'Bloom Lip BloomSheel con Moño',
    slug: 'bloom-lip-bloomsheel',
    category: 'lips',
    price: 14000,
    costPrice: 10500,
    description: 'Labial premium de la línea BloomSheel. Textura cremosa y acabado radiante.',
    image: 'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 9,
    name: 'Hidratante Labial Oso Polar',
    slug: 'hidratante-oso-polar',
    category: 'lips',
    price: 3500,
    costPrice: 2800,
    description: 'Bálsamo hidratante con diseño de oso polar. Protección y suavidad para tus labios.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    colors: ['transparent'],
    inStock: true,
    featured: false,
    stock: 2
  },
  {
    id: 10,
    name: 'Labial Llavero Fresita',
    slug: 'labial-llavero-fresita',
    category: 'lips',
    price: 5000,
    costPrice: 3700,
    description: 'Mini labial portable con diseño de fresita. Ideal para llevar en el bolso.',
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?w=500',
    colors: ['#CE7A67', '#EAC7CE'],
    inStock: true,
    featured: false,
    stock: 3
  },
  {
    id: 11,
    name: 'Lip Gloss Kevin & Coco',
    slug: 'lip-gloss-kevin-coco',
    category: 'lips',
    price: 5000,
    costPrice: 3500,
    description: 'Gloss labial de la marca Kevin & Coco. Brillo intenso y acabado jugoso.',
    image: 'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=500',
    colors: ['#EAC7CE', '#F5D2C4'],
    inStock: true,
    featured: false,
    stock: 3
  },
  {
    id: 12,
    name: 'Labial Duo Kevin & Coco',
    slug: 'labial-duo-kevin-coco',
    category: 'lips',
    price: 10000,
    costPrice: 6400,
    description: 'Pack dual de labiales. Dos tonos complementarios en un solo producto.',
    image: 'https://images.unsplash.com/photo-1625254205330-f363c88e81bc?w=500',
    colors: ['#CE7A67', '#C9A0A9'],
    inStock: true,
    featured: false,
    stock: 1
  },

  // ===== OJOS =====
  {
    id: 13,
    name: 'Paleta de Sombras Corazones',
    slug: 'paleta-sombras-corazones',
    category: 'eyes',
    price: 12000,
    costPrice: 8200,
    description: 'Paleta de sombras y rubor con diseño de corazones. Tonos suaves y románticos.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#C9A0A9', '#CE7A67'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 14,
    name: 'Paleta de Sombras Oso',
    slug: 'paleta-sombras-oso',
    category: 'eyes',
    price: 13500,
    costPrice: 8200,
    description: 'Paleta con diseño adorable de oso. Sombras pigmentadas de larga duración.',
    image: 'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#C9A0A9'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 15,
    name: 'Paleta Osito Rosa Kevin & Coco',
    slug: 'paleta-osito-rosa-kevin-coco',
    category: 'eyes',
    price: 13500,
    costPrice: 8100,
    description: 'Paleta premium de Kevin & Coco con diseño de osito. Tonos nude y rosados.',
    image: 'https://images.unsplash.com/photo-1606499121446-e7cb20aa9def?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#C9A0A9', '#CE7A67'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 16,
    name: 'Paleta Girl Magic Kevin & Coco',
    slug: 'paleta-girl-magic-kevin-coco',
    category: 'eyes',
    price: 22500,
    costPrice: 14400,
    description: 'Paleta completa Girl Magic. Sombras versátiles para cualquier ocasión.',
    image: 'https://images.unsplash.com/photo-1610887260188-09d179b6d798?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#C9A0A9', '#CE7A67', '#DCC9AA'],
    inStock: true,
    featured: true,
    stock: 1
  },

  // ===== ROSTRO =====
  {
    id: 17,
    name: 'Iluminador en Polvo Blin Blin',
    slug: 'iluminador-polvo-blin-blin',
    category: 'face',
    price: 11000,
    costPrice: 7400,
    description: 'Iluminador en polvo con relieve. Brillo natural y radiante para tu rostro.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=500',
    colors: ['#DCC9AA', '#F5D2C4'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 18,
    name: 'Rubor en Polvo con Borla',
    slug: 'rubor-polvo-borla',
    category: 'face',
    price: 12000,
    costPrice: 9200,
    description: 'Rubor en polvo con borla y espejo. Color natural y fácil aplicación.',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500',
    colors: ['#EAC7CE', '#CE7A67'],
    inStock: true,
    featured: false,
    stock: 1
  },
  {
    id: 19,
    name: 'Iluminador Jeringa Kevin & Coco',
    slug: 'iluminador-jeringa-kevin-coco',
    category: 'face',
    price: 10000,
    costPrice: 7800,
    description: 'Iluminador líquido en formato jeringa. Precisión y brillo intenso.',
    image: 'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=500',
    colors: ['#DCC9AA'],
    inStock: true,
    featured: false,
    stock: 1
  },
  {
    id: 20,
    name: 'Iluminador en Barra Kevin & Coco',
    slug: 'iluminador-barra-kevin-coco',
    category: 'face',
    price: 6800,
    costPrice: 4700,
    description: 'Iluminador en barra de fácil aplicación. Brillo portátil y práctico.',
    image: 'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=500',
    colors: ['#DCC9AA', '#F5D2C4'],
    inStock: true,
    featured: false,
    stock: 2
  },
  {
    id: 21,
    name: 'Polvo Suelto Capubini Rosado',
    slug: 'polvo-suelto-capubini',
    category: 'face',
    price: 10000,
    costPrice: 7100,
    description: 'Polvo suelto translúcido con tono rosado. Acabado mate y suave.',
    image: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=500',
    colors: ['#F5D2C4'],
    inStock: true,
    featured: false,
    stock: 1
  },
  {
    id: 22,
    name: 'Polvo Mini Rosa BloomSheel',
    slug: 'polvo-mini-rosa-bloomsheel',
    category: 'face',
    price: 25000,
    costPrice: 20200,
    description: 'Polvo compacto premium BloomSheel. Cobertura ligera y acabado perfecto.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    colors: ['#F5D2C4', '#E7D8CE'],
    inStock: true,
    featured: true,
    stock: 1
  },
  {
    id: 23,
    name: 'Corrector BloomSheel',
    slug: 'corrector-bloomsheel',
    category: 'face',
    price: 20000,
    costPrice: 15100,
    description: 'Corrector de alta cobertura. Disimula ojeras e imperfecciones.',
    image: 'https://images.unsplash.com/photo-1631730486572-226c5c3e6e10?w=500',
    colors: ['#F5D2C4', '#E7D8CE', '#EAC7CE'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 24,
    name: 'Base Líquida BloomSheel',
    slug: 'base-liquida-bloomsheel',
    category: 'face',
    price: 32500,
    costPrice: 24600,
    description: 'Base líquida de cobertura media. Acabado natural y luminoso.',
    image: 'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=500',
    colors: ['#F5D2C4', '#E7D8CE', '#EAC7CE'],
    inStock: true,
    featured: true,
    stock: 2
  },

  // ===== SKINCARE =====
  {
    id: 25,
    name: 'Crema Corporal',
    slug: 'crema-corporal',
    category: 'skincare',
    price: 6000,
    costPrice: 4600,
    description: 'Crema corporal hidratante con aroma suave. Nutrición para tu piel.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    colors: [],
    inStock: true,
    featured: false,
    stock: 2
  },
  {
    id: 26,
    name: 'Kit Facial Mini de Arroz',
    slug: 'kit-facial-arroz',
    category: 'skincare',
    price: 23800,
    costPrice: 17500,
    description: 'Kit de cuidado facial con extracto de arroz. Limpieza profunda y nutrición.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    colors: [],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 27,
    name: 'Papel Absorbente Facial',
    slug: 'papel-absorbente',
    category: 'skincare',
    price: 5000,
    costPrice: 3500,
    description: 'Papeles absorbentes para controlar el brillo. Prácticos y efectivos.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
    colors: [],
    inStock: true,
    featured: false,
    stock: 2
  },

  // ===== HERRAMIENTAS =====
  {
    id: 28,
    name: 'Esponjilla Rubiface',
    slug: 'esponjilla-rubiface',
    category: 'tools',
    price: 3800,
    costPrice: 2800,
    description: 'Esponja para maquillaje de alta calidad. Acabado perfecto y profesional.',
    image: 'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=500',
    colors: ['#EAC7CE'],
    inStock: true,
    featured: false,
    stock: 3
  },
  {
    id: 29,
    name: 'Set Mini Esponjas x3 Rubiface',
    slug: 'set-mini-esponjas-rubiface',
    category: 'tools',
    price: 3000,
    costPrice: 2500,
    description: 'Set de 3 mini esponjas. Perfectas para detalles y zonas pequeñas.',
    image: 'https://images.unsplash.com/photo-1596465704512-b6a0c5db01b8?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67'],
    inStock: true,
    featured: false,
    stock: 3
  },
  {
    id: 30,
    name: 'Quesitos Rubiface',
    slug: 'quesitos-rubiface',
    category: 'tools',
    price: 10000,
    costPrice: 4000,
    description: 'Esponjas con forma de quesito. Diseño adorable y funcional.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500',
    colors: ['#F5D2C4'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 31,
    name: 'Kit Completo de Brochas Kiss Lover',
    slug: 'kit-brochas-kiss-lover',
    category: 'tools',
    price: 15000,
    costPrice: 10800,
    description: 'Set completo de brochas profesionales. Todo lo que necesitas para tu maquillaje.',
    image: 'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=500',
    colors: [],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 32,
    name: 'Mini Brocha Rubiface',
    slug: 'mini-brocha-rubiface',
    category: 'tools',
    price: 6000,
    costPrice: 4500,
    description: 'Brocha mini para detalles. Cerdas suaves y precisas.',
    image: 'https://images.unsplash.com/photo-1596465704512-b6a0c5db01b8?w=500',
    colors: [],
    inStock: true,
    featured: false,
    stock: 1
  },
  {
    id: 33,
    name: 'Kit de Brochas x5 Rubiface',
    slug: 'kit-brochas-x5-rubiface',
    category: 'tools',
    price: 12500,
    costPrice: 10000,
    description: 'Set de 5 brochas esenciales. Calidad profesional a precio accesible.',
    image: 'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=500',
    colors: [],
    inStock: true,
    featured: false,
    stock: 1
  },
  {
    id: 34,
    name: 'Balaca Sanrio',
    slug: 'balaca-sanrio',
    category: 'tools',
    price: 5000,
    costPrice: 4000,
    description: 'Balaca con diseño Sanrio. Perfecta para tu rutina de skincare.',
    image: 'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=500',
    colors: ['#EAC7CE', '#F5D2C4'],
    inStock: true,
    featured: false,
    stock: 2
  },
  {
    id: 35,
    name: 'Gorro de Satén',
    slug: 'gorro-saten',
    category: 'tools',
    price: 10000,
    costPrice: 6800,
    description: 'Gorro de satén para proteger tu cabello mientras duermes.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    colors: ['#EAC7CE', '#F5D2C4'],
    inStock: true,
    featured: false,
    stock: 2
  },

  // ===== KITS Y COMBOS =====
  {
    id: 36,
    name: 'Kit x2 BloomSheel',
    slug: 'kit-x2-bloomsheel',
    category: 'combos',
    price: 20000,
    costPrice: 14300,
    description: 'Combo especial BloomSheel. Dos productos premium a precio especial.',
    image: 'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=500',
    colors: [],
    inStock: true,
    featured: true,
    stock: 3
  },
  {
    id: 37,
    name: 'Kit Rubor + Iluminador Kevin & Coco',
    slug: 'kit-rubor-iluminador-kevin-coco',
    category: 'combos',
    price: 20000,
    costPrice: 12500,
    description: 'Combo perfecto: rubor + iluminador. Look completo y radiante.',
    image: 'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=500',
    colors: ['#EAC7CE', '#DCC9AA'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 38,
    name: 'Kit Labios Kevin & Coco x5',
    slug: 'kit-labios-kevin-coco-x5',
    category: 'combos',
    price: 20000,
    costPrice: 14300,
    description: 'Set de 5 labiales Kevin & Coco. Variedad de colores para cada ocasión.',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67', '#C9A0A9'],
    inStock: true,
    featured: true,
    stock: 2
  },
  {
    id: 39,
    name: 'Kit x10 Labial Crema Kevin & Coco',
    slug: 'kit-x10-labial-crema-kevin-coco',
    category: 'combos',
    price: 50000,
    costPrice: 26100,
    description: 'Mega kit de 10 labiales crema. La colección completa de tonos.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67', '#C9A0A9', '#DCC9AA'],
    inStock: true,
    featured: true,
    stock: 1
  }
];

// Funciones helper
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};