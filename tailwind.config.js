/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ["Bubblegum Sans"],
        opensans: ["Open Sans"],
        tiny: ["Tiny5"],
        ubuntu: ["Ubuntu"],
        roboto: ["Roboto"],
      }
    },
  },
  plugins: [],
};
