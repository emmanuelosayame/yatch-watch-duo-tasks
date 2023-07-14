/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sfProText: ["SF Pro Text", "sans-serif"],
        paytoneOne: ["Paytone One"],
      },
      animation: {
        progressBarRotate: "progressBarRotate 2s ease",
      },
      backgroundImage: {
        "img-bg": "url('/public/img-bg.png')",
      },
      colors: {
        "deepSeablue": "#00005C",
        "cgray": "#1F2426",
        "sky-blue": "#8BCCE1",
        "sky-blue": "#e8f5f9",
        "deep-sea-blue": "#00005c",
        "gray-60": "#73717f",
        "success": "#00ac31",
        "gray-20": "#a2a1ad",
      },
      keyframes: {
        progressBarRotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "100%": {
            transform: "rotate(90deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
