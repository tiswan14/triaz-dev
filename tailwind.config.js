module.exports = {
  content: ['./index.html', './tentangkami.html', './src/**/*.js'], // Tanda kutip penutup yang hilang sudah ditambahkan
  theme: {
    extend: {
      colors: {
        primary: '#EAE9E6',
        secondary: '#1B1B1B',
        triatry: '#E74522',
        lightf: '#FFFFFF',
        nav: '#1B1B1B',
      },
      fontFamily: {
        delta: ['Dela Gothic One', 'sans-serif'],
      },
      backgroundImage: {
        'h-product': "url('./img/hero-tentangkami.png')"
      },
      
    },
  },
  plugins: [],
};
