/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1F4E79',
        'secondary-blue': '#2F6E9E',
        'steel-grey': '#B5B5B5',
        'accent-green': '#10B981',
        'light-bg': '#F7F9FC',
        'primary-text': '#1E1E1E',
        'footer-dark': '#0B1F33',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
