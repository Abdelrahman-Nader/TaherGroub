/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
      gradientcolor: 'linear-gradient(150deg, #5b4516,#b4903a,#fffea6,#b4903a,#b4903a,#b4903a,#fffea6,#b4903a)',
      textcolor: '#001D3D',

  }
    },
  },
  plugins: [],
}

