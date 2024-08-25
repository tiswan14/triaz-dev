module.exports = {
  content: [
    './index.html',
    './tentangkami.html',
    './fiturungulan.html',
    './kontak.html',
    './src/**/*.js',
  ], // Tanda kutip penutup yang hilang sudah ditambahkan
  theme: {
    extend: {
      colors: {
        primary: '#EAE9E6',
        secondary: '#1B1B1B',
        triatry: '#E74522',
        lightf: '#FFFFFF',
        nav: '#1B1B1B',
        bg2: '#DDDDDD',
      },
      fontFamily: {
        delta: ['Dela Gothic One', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'product-ti': "url('img/product-ti.png')",
      },
    },
  },
  plugins: [],
};
