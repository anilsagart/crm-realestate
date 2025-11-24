/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matteblue: {
          halfwhite: "#f9f9f9",
          50: "#f3f5fa",
          100: "#d9e0ee",
          200: "#bbc9de",
          300: "#9daecb",
          500: "#5f769b",
          700: "#3c4d6d",
          900: "#252d3b",
          background: "#f3f5fa", // page background
          card: "#d9e0ee", // cards, containers
          input: "#d9e0ee", // input fields
          hover: "#bbc9de", // hover states
          tag: "#bbc9de", // badges, tags
          section: "#9daecb", // light sections
          soft: "#9daecb", // muted boxes
          button: "#5f769b", // primary buttons
          nav: "#3c4d6d", // navbars
          heading: "#3c4d6d", // main text/heading
          text: "#2e3c52", // general text
          subheading: "#4b5970", // small/secondary headings
          footer: "#252d3b", // footer background
          dark: "#252d3b", // deep areas / dark mode
          border: "#cdd4e2", // light border (optional)
          accent: "#5f769b", // default brand accent
          highlightsAccent: "#344da1",
          highlightsTint: "#9db1e2",
          productSuite: "#265f61",
          productSense: "#334155",
          productStudio: "#6b3fa0",
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        just: ['"JUST Sans"', "sans-serif"],
        justOutline: ['"JUST Sans Outline"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

