/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta SHEKINA - Feminidad Moderna
        primary: {
          50: '#FDF6F0',   // Crema cálido
          100: '#F5D2C4',  // Durazno suave
          200: '#EAC7CE',  // Rosa empolvado
          300: '#E7D8CE',  // Beige rosado
          400: '#C9A0A9',  // Mauve suave
          500: '#DCC9AA',  // Oro champaña (acento principal)
          600: '#CE7A67',  // Terracota rosado (acento alternativo)
        },
        accent: {
          gold: '#DCC9AA',
          terracota: '#CE7A67',
        },
        neutral: {
          cream: '#FDF6F0',
          beige: '#E7D8CE',
        }
      },
      fontFamily: {
        // Tipografía elegante
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Tamaños pensados para feminidad
        'display': '3.5rem',   // Títulos grandes
        'heading': '2.5rem',   // Encabezados
        'subheading': '1.5rem', // Subtítulos
        'body': '1rem',        // Texto normal
        'small': '0.875rem',   // Texto pequeño
        'tiny': '0.75rem',     // Etiquetas
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'soft': '12px',  // Bordes suaves
        'card': '16px',  // Tarjetas de producto
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(202, 160, 169, 0.15)',  // Sombra suave femenina
        'card': '0 8px 30px rgba(202, 160, 169, 0.12)',  // Sombra de tarjeta
        'hover': '0 12px 40px rgba(202, 160, 169, 0.2)', // Hover estado
      },
    },
  },
  plugins: [],
}