/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: {
        white: '#FFFFFF',
        dark: '#323232'
      },
      'light-green': '#B5CC22',
      'olive-green': '#677510',
      gray: {
        border: '#EBEBEB',
        'table-border': '#AEAEAE',
        input: '#F3F3F3'
      },
    },
    screens: {
      mobile: '768px',
      desktop: '1080px',
    },
    extend: {}
  },
  plugins: []
}
