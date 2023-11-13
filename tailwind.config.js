/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      backgroundClip: ["text"],
    },
  },
  plugins: [],
};
