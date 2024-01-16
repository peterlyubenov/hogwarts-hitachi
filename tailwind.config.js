/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#75af64",
        primaryHover: "#629254",
      },
    },
  },
  plugins: [],
};
