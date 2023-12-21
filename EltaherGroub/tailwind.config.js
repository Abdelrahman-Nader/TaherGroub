/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
      // 'gradientcolor': 'linear-gradient(150deg, #5b4516,#b4903a,#fffea6,#b4903a,#b4903a,#b4903a,#fffea6,#b4903a)',
      'textcolor': '#001D3D',
      'maincolor' : '#FFD60A',
      'secondcolor': '#FFC300',
      'textcolor2':'#001D3D',
      'lightecolor':'rgb(255, 255, 254)',
      'mainsecondcolor':'#629bd9f7',
      // 'gradientcolor':'linear-gradient(150deg, #5b4516,#b4903a,#fffea6,#b4903a,#b4903a,#b4903a,#fffea6,#b4903a)',


  }
    },
  },
  plugins: [],
}

