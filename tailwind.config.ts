import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background.svg')",
      },
      colors: {
        'olive': '#abb194',
        'olive-dark': '#85987d',
        'beige': '#faf2e9',
        'bottle-green': '#003b31',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Marmelad', 'sans-serif'],
        serif: ['Marmelad', 'serif'],
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        beat: 'beat 0.5s infinite',
        'slide-down': 'slide-down 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
