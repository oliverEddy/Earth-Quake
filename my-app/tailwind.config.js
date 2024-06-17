module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#5a9cbf',
        secondary: '#2a2a2a',
        highlight: '#f6ce04',
        background: '#f8f9fa',
        textLight: '#f8f0e3', // Light text color
        textGray: '#6c757d', // Soft gray for text
        darkGray: '#4a4a4a', // Darker gray for headings
      },
      screens: {
        'xl': '1340px', // Custom breakpoint at 1340px
      },
    },
  },
  plugins: [],
}
