import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
        'xxl': '1440px', // Custom breakpoint for extra-extra-large screens
        '3xl': '1600px', // Custom breakpoint for even larger screens
      },
    },
  },
  plugins: [],
} satisfies Config

