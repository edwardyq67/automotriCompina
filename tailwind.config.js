/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fef2f2',
          '100': '#ffe2e1',
          '200': '#ffcac9',
          '300': '#fea5a3',
          '400': '#fb726e',
          '500': '#f34540',
          '600': '#d7231e',
          '700': '#bd1c18',
          '800': '#9c1c18',
          '900': '#811e1b',
          '950': '#460b09',
      },
        secondary:{
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#111111',
      },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
      container: {
        center: true,
        padding: {
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "100%",
          md: "728px",
          lg: "1024px",
          xl: "1500px",
        },
      }
    },
  },
  plugins: [],
}

