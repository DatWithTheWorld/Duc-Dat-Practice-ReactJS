/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsc,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary-font": ["Helvetica", "Arial"],
      },
      backgroundImage: {
        buttonDlBlack:
          "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      },
    },
  },
  plugins: [],
};
