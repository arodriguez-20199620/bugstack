/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      height: {
        'full-screen': 'calc(100vh - 50px)',
      },
      colors: {
        'dark-gunmetal': '#222831',// nuevo
        'metallic-blue': '#30475E',// nuevo
        'sunset-orange': '#F05454',// nuevo
        'light-gray': '#DDDDDD', // nuevo
      },
    },
  },
  plugins: [],
}
