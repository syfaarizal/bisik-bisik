// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'soft-red': '#ff8585',
        'soft-red-light': '#ffe0e0',
        'soft-red-dark': '#e63946',
        'charcoal': '#1f2937',
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(#cbd5e1 1px, transparent 1px)",
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      }
    },
  },
  plugins: [],
}