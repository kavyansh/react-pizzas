/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontSize: {
      //   huge: ['503rem', { lineHeight: '1' }],
      // },
      // colors: {
      //   pizza: '#123456',
      // }, // extend will extend and not overwrite. outside extend will overwrite
      height: {
        screen: '100dvh',
      },
    },
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
  },
  plugins: [],
};
