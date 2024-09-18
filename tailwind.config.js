/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
        opacity: "opacity",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      backgroundImage: {
        "animated-gradient":
          "linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 5s ease infinite",
      },
    },
  },
  plugins: [],
};
