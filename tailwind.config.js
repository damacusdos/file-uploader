/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        16: "0px 4px 16px rgba(234, 226, 253, 1)",
      },
    },
  },
  plugins: [],
};
