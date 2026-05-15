/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'museum': {
          bg: '#0F1419',
          'bg-secondary': '#182025',
          fg: '#F0EDE8',
          'fg-muted': '#B5A99A',
        },
        'artifact': {
          bronze: '#5B6B4D',
          'ru-blue': '#5BA3C4',
          'dh-gold': '#C9A04E',
          cinnabar: '#A85A4D',
          jade: '#DCE3D8',
        }
      },
      fontFamily: {
        'heading-zh': ['Noto Serif SC', 'serif'],
        'body-zh': ['Noto Sans SC', 'sans-serif'],
        'heading-en': ['Cormorant Garamond', 'serif'],
        'body-en': ['Inter', 'sans-serif'],
        'calligraphy': ['ZCOOL XiaoWei', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
