/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bluealicious: "#0000D6",
        drunkendragonfly: "#32D583",
        gainsboro:"#D9D9D9",
        flintstone:"#667085",
        reservedblue:"#D0D5DD",
        blackriverfalls:"#344054",
        nightlyactivities:"#7F56D9",
        springtimerain:"#F2F4F7",
        sugarcrystral:"#F9F5FF",
        dragonlordpurple:"#6941C6",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
