/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        orange: {
          default: "#FF733B",
          90: "#FF814F",
          80: "#FF8F62",
          60: "#FFAB89",
          40: "#FFC7B1",
          20: "#FFE3D8"
        }
      },
      accent: {
        cyan: "#26C6DA",
        purple: "##BE63F9",
        green: "#1CE524",
        blue: "#1D5EF4",
        red: "#FF391A"
      },
      background: {
        merino: "#F4ECE0",
        maize: "#F4D3A1",
        graphite: "#241008"
      },
      typography: {
        asphalt: "#1A0C06",
        graphite: "#241008",
        flint: "#6B625E",
        hurricane: "#8A7F7B"
      }
    }
  },
  plugins: [],
}