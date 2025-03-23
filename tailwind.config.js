/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        default: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1320px",
        '2xl': "1320px",
      },
    },
    extend: {
      colors: {
        Main: "#F0ECE9",
        Grey: "#727272",
        BrownDark: "#1D110A",
        Accent: "#A76F53",
        Brown: "#5B242A",
        Dark: "#1F150F",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      maxWidth: {
        'image': '1440px',
      },
    },
  },
  plugins: [],
}

