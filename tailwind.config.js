/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsc,tsx}"],
  theme: {
<<<<<<< Updated upstream
    extend: {},
=======
    extend: {
      fontFamily: {
        "primary-font": ["Helvetica", "Arial"],
      },
      backgroundImage: {
        buttonDlBlack:
          "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
        bgNavBlack: 'linear-gradient(113deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 110.84%)',
      },
      fontSize:{
        '0.625rem': '0.625rem',
        '0.875rem': '0.875rem',
        '0.75rem': '0.75rem',
      },
      colors:{
        footerTextColor: '#A0AEC0',
        highlightTextFooter : "#38B2AC"
      }
    },
>>>>>>> Stashed changes
  },
  plugins: [],
};
