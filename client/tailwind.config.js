module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        beat: 'beat 1s ease-out infinite',
        fall: 'fall 3s infinite'
      },
      keyframes:{
        beat:{
          '0%, 100%': { transform: 'scale(1)' },
          '25%' : { transform: 'scale(1.5)' }
        },
        fall:{
          '0%': {transform: 'translate-y-0'},
          '100%':{transform: '-translate-y-4'}
        }
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
      borderColor: ['hover', 'focus'],
      transform: ['hover']
    }
  },
  plugins: [],
}
