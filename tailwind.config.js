/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navtext: "#a3a3a3",
        lime: "#DCFF50",
        limebtn: "#eaff96",
      },
      screens: {
        tab: { max: "1024px" },
        mob:{max: "500px"},
      },
    },
  },
  plugins: [],
};
