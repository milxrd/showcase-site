import type { Config } from "tailwindcss";

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
      },
      animation: {
        beat: 'beat 0.5s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
