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
        'hero-pattern': "url('/abstract-nature-leaf.jpg')",
      },
      colors: {
        'white': '#000000',
        'black': '#ffffff',
        'mint': '#97B38F',
        'beige': '#D1BFAA',
        'gray-dark': '#273444',
        'gray': '#8492a6',
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
