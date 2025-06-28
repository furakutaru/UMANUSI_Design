/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,css,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,css,mdx}",
    "./**/*.{js,jsx,ts,tsx,css,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(16px)' },
        },
      },
      animation: {
        'bounce-arrow': 'bounce-arrow 1.2s infinite',
      },
    },
  },
  plugins: [],
} 