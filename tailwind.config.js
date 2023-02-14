/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-background": "linear-gradient(to left, #f7ba2b 0%, #ea5358 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
