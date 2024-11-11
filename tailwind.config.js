/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-a0": "#f9f9f9",
        "gray-t0": "#555555",
        "black-a0": "#2d2e32",
        // secondary: "#147efb",
        secondary: "#0470EC",
      },
    },
  },
  plugins: [],
};
