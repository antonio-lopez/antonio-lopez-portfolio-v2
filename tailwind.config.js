module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // primary colors: blue 200-500
        lightBg: '#fafafa',
        darkBg: '#1a202c',
        darkAccent: '#2d3748',
      },
      fontFamily: {
        'sans-serif': ['Inter'],
      },
    },
  },
  plugins: [],
};
