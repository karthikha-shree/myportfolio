/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          bg: "#0f172a",
          surface: "#1e293b",
          primary: "#38bdf8",
          secondary: "#f472b6",
          accent: "#facc15",
          text: "#f1f5f9",
          subtext: "#94a3b8",
        },
        retro: {
          bg: "#fffaeb",
          surface: "#ffffff",
          primary: "#ff6b6b",
          secondary: "#4ecdc4",
          accent: "#1a535c",
          text: "#2d3436",
          subtext: "#636e72",
        },
      },
    },
  },
  plugins: [],
};
