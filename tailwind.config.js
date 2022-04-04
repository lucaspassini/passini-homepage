module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#272822',
        light: '#F8F8F3'
      },
      fontFamily: {
        inter: ['Inter', 'sans serif'],
        firacode: ['Fira Code', 'monospace']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
