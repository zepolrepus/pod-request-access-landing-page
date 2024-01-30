/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        'aquamarine': 
        { DEFAULT: '#54e6af', 100: '#083725', 200: '#106e4a', 300: '#19a56f', 400: '#21dc94', 500: '#54e6af', 600: '#78ebbf', 700: '#9af0cf', 800: '#bcf5df', 900: '#ddfaef' }, 
        'space_cadet': 
        { DEFAULT: '#2c344b', 100: '#090a0f', 200: '#11141e', 300: '#1a1f2c', 400: '#23293b', 500: '#2c344b', 600: '#48557b', 700: '#6b7aa8', 800: '#9ca6c5', 900: '#ced3e2' }, 
        'rich_black': 
        { DEFAULT: '#121725', 100: '#040508', 200: '#07090f', 300: '#0b0e17', 400: '#0f131e', 500: '#121725', 600: '#303d63', 700: '#4d63a0', 800: '#8495c4', 900: '#c2cae1' }, 'ultra_violet': 
        { DEFAULT: '#5a668a', 100: '#12151c', 200: '#242938', 300: '#363e53', 400: '#49526f', 500: '#5a668a', 600: '#7783a6', 700: '#99a2bd', 800: '#bbc1d3', 900: '#dde0e9' }, 
        'periwinkle': 
        { DEFAULT: '#c2cbe5', 100: '#19223b', 200: '#334477', 300: '#4c66b2', 400: '#8798cc', 500: '#c2cbe5', 600: '#ced5ea', 700: '#dbe0ef', 800: '#e7eaf5', 900: '#f3f5fa' } 
      },
      backgroundImage: {
        'desktop': "url('/assets/desktop/image-host.jpg')",
        'tablet': "url('/assets/tablet/image-host.jpg')",
        'mobile': "url('/assets/mobile/image-host.jpg')"
      }
    },
  },
  plugins: [],
}

