/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        laser: '#FF3158',
        laserLight: '#FF7788',
        laserDark: '#CA003D',
        portal: '#222222',
        newMoon: '#333333',
        lens: '#444444',
        tangent: '#6D6D6D',
        cosine: '#999999',
        sine: '#B5B4B3',
        mirror: '#DADADA',
        moonrock: '#F5F4F3'
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
