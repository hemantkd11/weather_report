/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px", // Define your small screen breakpoint
        // Add other breakpoints if necessary
      },
      fontSize: {
        Header: "40px",
        subheader: "30px",
        "body-text": "18px",
        temp: "5rem",
        mobile: "30px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        allsidesame: "0 0 10px white",
      },
      keyframes: {
        drift: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        drift: "drift 7000ms infinite linear",
        "drift-slow": "drift 5000ms infinite linear",
        "drift-slower": "drift 7000ms infinite linear",
      },
    },
  },
  plugins: [],
};
