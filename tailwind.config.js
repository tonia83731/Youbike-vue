/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: {
        white: '#FFFFFF',
        dark: '#323232',
        red: '#830707',
      },
      'light-green': '#B5CC22',
      'olive-green': '#677510',

      gray: {
        default: '#F6F6F6',
        border: '#EBEBEB',
        'table-border': '#AEAEAE',
        input: '#F3F3F3'
      }
    },
    screens: {
      'small-screen': '450px',
      mobile: '768px',
      tablet: '900px',
      desktop: '1080px'
    },
    extend: {}
  },
  plugins: []
}
