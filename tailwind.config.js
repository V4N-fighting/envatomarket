/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./*.{html,js}"],
  theme: {
    colors: {
    '--color-primary': '#343434',
    '--color-secondary': '#666666',
    '--color-opa': '#999999',

    '--bs-primary': '#84a014',
    '--bs-preview-btn': '#82b440',
    '--bs-white': '#fff',
    '--bs-preview-header': '#262626',
    '--bs-topbar': '#343434',
    '--bs-slider-btn': '#f8c400',
    '--bs-banner-item': '#f4faec',
    '--bs-border-slider': '#fac400',
    '--product-color': '#d15a4b',
    '--star-hollow': '#b9b9b9',

    '--footer-bottom-color': '#959595',
    },
    spacing: {
      'preview-height': '54px',
      'topbar-height': '40px',
      'add-to-wishlist': 'calc(100% - 100px)',
      'input-newletter': 'calc(100% - 205px)',
    },
    extend: {},
  },
  plugins: [],
}
