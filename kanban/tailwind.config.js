/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#001117",
        columnBackgroundColor: "#161C22",
      },
    },
  },
  plugins: [],
};
