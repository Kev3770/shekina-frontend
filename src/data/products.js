// ============================================
// PRODUCTOS - SHEKINA (Con galería de imágenes)
// ============================================

export const products = [
  // ===== LABIOS =====
  {
    id: 1,
    name: 'Labial veltvet cat pink',
    slug: 'Labial-veltvet-cat-pink',
    category: 'lips',
    price: 10000,
    costPrice: 5500,
    description: 'Bálsamo hidratante con diseño adorable de fresa. Ideal para llevar como llavero. Textura suave y aroma delicioso.',
    image: 'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764480936/Imagen_de_WhatsApp_2025-11-29_a_las_23.25.27_471f5742_chngun.jpg',
    images: [
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764480936/Imagen_de_WhatsApp_2025-11-29_a_las_23.25.27_471f5742_chngun.jpg',
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764480936/Imagen_de_WhatsApp_2025-11-29_a_las_23.25.26_427c5149_pynhjr.jpg',
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764480937/Imagen_de_WhatsApp_2025-11-29_a_las_23.25.27_242f9e77_pqfppz.jpg',
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764481108/Imagen_de_WhatsApp_2025-11-29_a_las_23.25.27_cfa5656f_bzvpym.jpg'
    ],
    colors: ['#EAC7CE', '#CE7A67', '#C9A0A9'],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Bloom Lip Essence Bloomshell',
    slug: 'bloom-lip-essence-bloomshell',
    category: 'lips',
    price: 12500,
    costPrice: 5500,
    description: 'Esencia labial premium Bloomshell. Hidratación profunda con acabado glossy natural. Textura ligera y no pegajosa.',
    image: 'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764481455/Imagen_de_WhatsApp_2025-11-29_a_las_23.31.51_6d18a877_repbsw.jpg',
    images: [
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764481455/Imagen_de_WhatsApp_2025-11-29_a_las_23.31.51_6d18a877_repbsw.jpg',
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764481456/Imagen_de_WhatsApp_2025-11-29_a_las_23.31.51_d3ac9459_imvfby.jpg',
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764481457/Imagen_de_WhatsApp_2025-11-29_a_las_23.31.51_2e6afef3_jqefky.jpg',
      'https://res.cloudinary.com/dhtwrqrhb/image/upload/v1764481455/Imagen_de_WhatsApp_2025-11-29_a_las_23.31.51_3e9bf268_mu2r2x.jpg'
    ],
    colors: ['#CE7A67', '#B8664E', '#F5D2C4'],
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: 'Crema Corporal 50g Pink in Sweet',
    slug: 'crema-corporal-pink-sweet',
    category: 'skincare',
    price: 6000,
    costPrice: 4900,
    description: 'Crema corporal hidratante con fragancia dulce. Textura cremosa de rápida absorción. Ideal para piel seca.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
      'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=800'
    ],
    colors: [],
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: 'Hidratante de Labios Jelly Sweet Pola AYLR',
    slug: 'hidratante-labios-jelly-sweet',
    category: 'lips',
    price: 12000,
    costPrice: 7400,
    description: 'Hidratante labial con textura jelly única. Acabado glossy con efecto voluminizador. Disponible en tonos dulces.',
    image: 'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=500',
    images: [
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800'
    ],
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67'],
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: 'Iluminador en Barra KYC',
    slug: 'iluminador-barra-kyc',
    category: 'face',
    price: 5000,
    costPrice: 3500,
    description: 'Iluminador en barra stick para aplicación precisa. Acabado natural luminoso. Fácil de difuminar.',
    image: 'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=500',
    images: [
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800',
      'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=800',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800'
    ],
    colors: ['#DCC9AA', '#F5D2C4'],
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: 'Iluminador Líquido Aplicador Jeringa Kevin & Coco',
    slug: 'iluminador-liquido-jeringa-kc',
    category: 'face',
    price: 6000,
    costPrice: 3200,
    description: 'Iluminador líquido en formato jeringa. Control preciso de la cantidad. Brillo intenso y duradero.',
    image: 'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=500',
    images: [
      'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800'
    ],
    colors: ['#DCC9AA'],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: 'Kit Facial Mini de Arroz x5 Productos Bioaqua',
    slug: 'kit-facial-arroz-bioaqua',
    category: 'skincare',
    price: 10000,
    costPrice: 6200,
    description: 'Kit completo de skincare con extracto de arroz. Incluye 5 productos para rutina completa. Ilumina y nutre la piel.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
      'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=800'
    ],
    colors: [],
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: 'Kit Labios 2 Lapiz +3 Labial Mate',
    slug: 'kit-labios-lapiz-mate',
    category: 'combos',
    price: 14000,
    costPrice: 10500,
    description: 'Combo completo para labios: 2 lápices delineadores + 3 labiales mate. Tonos coordinados para looks completos.',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500',
    images: [
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800'
    ],
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67'],
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: 'Kit Rubor e Iluminador más Brocha KYK',
    slug: 'kit-rubor-iluminador-brocha-kyk',
    category: 'combos',
    price: 3500,
    costPrice: 2800,
    description: 'Kit esencial de rostro: rubor + iluminador + brocha kabuki. Todo lo necesario para un look radiante.',
    image: 'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=500',
    images: [
      'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800',
      'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800',
      'https://images.unsplash.com/photo-1614256683979-ee7e0a420109?w=800'
    ],
    colors: ['#EAC7CE', '#DCC9AA'],
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: 'Kit x2 Gloss con Color + Tinta Bloom Gioia Bloom',
    slug: 'kit-gloss-tinta-bloom-gioia',
    category: 'combos',
    price: 5000,
    costPrice: 3700,
    description: 'Combo de labiales: 2 gloss con color + tinta de larga duración. Acabados versátiles para cualquier ocasión.',
    image: 'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=500',
    images: [
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800'
    ],
    colors: ['#EAC7CE', '#F5D2C4', '#CE7A67'],
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: 'Labial Cremoso Matte Super Star en Barra Retráctil',
    slug: 'labial-cremoso-matte-superstar',
    category: 'lips',
    price: 5000,
    costPrice: 3500,
    description: 'Labial retráctil mate con acabado cremoso. Pigmentación intensa y cobertura completa. Larga duración.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800'
    ],
    colors: ['#CE7A67', '#C9A0A9', '#B8664E'],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: 'Labial Velvet Happy Cat Pink Coco',
    slug: 'labial-velvet-happy-cat',
    category: 'lips',
    price: 10000,
    costPrice: 6400,
    description: 'Labial mate aterciopelado con diseño de gato. Textura suave que no reseca. Acabado profesional.',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500',
    images: [
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800'
    ],
    colors: ['#EAC7CE', '#FFB6C1'],
    inStock: true,
    featured: false
  },
  {
    id: 13,
    name: 'Lip Gloss con Color Essence Gege Bear',
    slug: 'lip-gloss-essence-gege-bear',
    category: 'lips',
    price: 12000,
    costPrice: 8200,
    description: 'Gloss con color de la línea Gege Bear. Brillo intenso con hidratación. Textura no pegajosa.',
    image: 'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=500',
    images: [
      'https://images.unsplash.com/photo-1625254203038-794a4b9962e0?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800'
    ],
    colors: ['#FFB6C1', '#FFC0CB', '#EAC7CE'],
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Paleta de Sombras Bear Kevin y Coco',
    slug: 'paleta-sombras-bear-kevin-coco',
    category: 'eyes',
    price: 13500,
    costPrice: 8200,
    description: 'Paleta de sombras con diseño de osito. 9 tonos combinables: mates y shimmer. Alta pigmentación.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
      'https://images.unsplash.com/photo-1610887260188-09d179b6d798?w=800',
      'https://images.unsplash.com/photo-1606499121446-e7cb20aa9def?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800'
    ],
    colors: ['#EAC7CE', '#F5D2C4', '#C9A0A9', '#CE7A67'],
    inStock: true,
    featured: true
  },
  {
    id: 15,
    name: 'Paleta de Sombras Kevin y Coco',
    slug: 'paleta-sombras-kevin-coco',
    category: 'eyes',
    price: 13500,
    costPrice: 8100,
    description: 'Paleta versátil Kevin & Coco. 12 tonos para looks diurnos y nocturnos. Fácil difuminado.',
    image: 'https://images.unsplash.com/photo-1610887260188-09d179b6d798?w=500',
    images: [
      'https://images.unsplash.com/photo-1610887260188-09d179b6d798?w=800',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
      'https://images.unsplash.com/photo-1606499121446-e7cb20aa9def?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800'
    ],
    colors: ['#EAC7CE', '#F5D2C4', '#C9A0A9', '#CE7A67'],
    inStock: true,
    featured: true
  },
  {
    id: 16,
    name: 'Tinta de Labios Melody y Kuromi Rimocco',
    slug: 'tinta-labios-melody-kuromi',
    category: 'lips',
    price: 22500,
    costPrice: 14400,
    description: 'Tinta labial edición especial Melody & Kuromi. Acabado mate de larga duración. No transfiere.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800'
    ],
    colors: ['#CE7A67', '#C9A0A9', '#EAC7CE'],
    inStock: true,
    featured: true
  },
  {
    id: 17,
    name: 'Tinta Gloss Pink Monis Gagk',
    slug: 'tinta-gloss-pink-monis',
    category: 'lips',
    price: 11000,
    costPrice: 7400,
    description: 'Tinta gloss con acabado brillante. Color intenso y duradero. Textura ligera y confortable.',
    image: 'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=500',
    images: [
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1583241800698-c57678dd2c86?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800'
    ],
    colors: ['#FFB6C1', '#EAC7CE', '#F5D2C4'],
    inStock: true,
    featured: true
  },
  {
    id: 18,
    name: 'Tinta para Labios Corbatín Tape Karité',
    slug: 'tinta-labios-corbatin-karite',
    category: 'lips',
    price: 12000,
    costPrice: 9200,
    description: 'Tinta labial con manteca de karité. Hidrata mientras colorea. Acabado satinado elegante.',
    image: 'https://images.unsplash.com/photo-1631730486572-226c5c3e6e10?w=500',
    images: [
      'https://images.unsplash.com/photo-1631730486572-226c5c3e6e10?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800'
    ],
    colors: ['#CE7A67', '#B8664E', '#C9A0A9'],
    inStock: true,
    featured: false
  },
  {
    id: 19,
    name: 'Labial en Barra Retráctil',
    slug: 'labial-barra-retractil-clasico',
    category: 'lips',
    price: 10000,
    costPrice: 7800,
    description: 'Labial retráctil clásico. Fácil aplicación y acabado cremoso. Disponible en múltiples tonos.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800',
      'https://images.unsplash.com/photo-1625254207152-7b71043b3f11?w=800',
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800'
    ],
    colors: ['#CE7A67', '#B8664E', '#F5D2C4'],
    inStock: true,
    featured: false
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