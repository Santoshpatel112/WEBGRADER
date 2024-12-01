/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html",
//     "./src/**/*.{js,html}",
// ],
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ringA: "ringA 2s linear infinite",
        ringB: "ringB 2s linear infinite",
        ringC: "ringC 2s linear infinite",
        ringD: "ringD 2s linear infinite",
      },
      keyframes: {
        ringA: {
          "0%, 4%": { "stroke-dasharray": "0 660", "stroke-width": "20", "stroke-dashoffset": "-330" },
          "12%": { "stroke-dasharray": "60 600", "stroke-width": "30", "stroke-dashoffset": "-335" },
          "32%": { "stroke-dasharray": "60 600", "stroke-width": "30", "stroke-dashoffset": "-595" },
          "40%, 54%": { "stroke-dasharray": "0 660", "stroke-width": "20", "stroke-dashoffset": "-660" },
          "62%": { "stroke-dasharray": "60 600", "stroke-width": "30", "stroke-dashoffset": "-665" },
          "82%": { "stroke-dasharray": "60 600", "stroke-width": "30", "stroke-dashoffset": "-925" },
          "90%, 100%": { "stroke-dasharray": "0 660", "stroke-width": "20", "stroke-dashoffset": "-990" },
        },
        ringB: {
          "0%, 12%": { "stroke-dasharray": "0 220", "stroke-width": "20", "stroke-dashoffset": "-110" },
          "20%": { "stroke-dasharray": "20 200", "stroke-width": "30", "stroke-dashoffset": "-115" },
          "40%": { "stroke-dasharray": "20 200", "stroke-width": "30", "stroke-dashoffset": "-195" },
          "48%, 62%": { "stroke-dasharray": "0 220", "stroke-width": "20", "stroke-dashoffset": "-220" },
          "70%": { "stroke-dasharray": "20 200", "stroke-width": "30", "stroke-dashoffset": "-225" },
          "90%": { "stroke-dasharray": "20 200", "stroke-width": "30", "stroke-dashoffset": "-305" },
          "98%, 100%": { "stroke-dasharray": "0 220", "stroke-width": "20", "stroke-dashoffset": "-330" },
        },
        ringC: {
          "0%": { "stroke-dasharray": "0 440", "stroke-width": "20", "stroke-dashoffset": "0" },
          "8%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-5" },
          "28%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-175" },
          "36%, 58%": { "stroke-dasharray": "0 440", "stroke-width": "20", "stroke-dashoffset": "-220" },
          "66%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-225" },
          "86%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-395" },
          "94%, 100%": { "stroke-dasharray": "0 440", "stroke-width": "20", "stroke-dashoffset": "-440" },
        },
        ringD: {
          "0%, 8%": { "stroke-dasharray": "0 440", "stroke-width": "20", "stroke-dashoffset": "0" },
          "16%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-5" },
          "36%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-175" },
          "44%, 50%": { "stroke-dasharray": "0 440", "stroke-width": "20", "stroke-dashoffset": "-220" },
          "58%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-225" },
          "78%": { "stroke-dasharray": "40 400", "stroke-width": "30", "stroke-dashoffset": "-395" },
          "86%, 100%": { "stroke-dasharray": "0 440", "stroke-width": "20", "stroke-dashoffset": "-440" },
        },
      },
    },
  },
  plugins: [],
};
 

