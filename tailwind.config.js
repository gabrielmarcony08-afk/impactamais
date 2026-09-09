/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkblue: '#123B5D',
          blue: '#1976D2',
          green: '#18A558',
          yellow: '#FFC857',
          light: '#F4F7FA',
          text: '#17212B',
          softblue: '#E8F1FA',
          softgreen: '#E8F6EF',
        },
        ods: {
          magenta: '#DD1367',
          lightpink: '#FDF2F7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 10px 30px -10px rgba(25, 118, 210, 0.3)',
        'glow-green': '0 10px 30px -10px rgba(24, 165, 88, 0.3)',
        'glow-yellow': '0 10px 30px -10px rgba(255, 200, 87, 0.3)',
        'card-hover': '0 20px 40px -15px rgba(18, 59, 93, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
