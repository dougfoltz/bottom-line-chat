module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-inter)'] },
      colors: {
        brand: {
          25:  "#f7faff",
          50:  "#eef4ff",
          100: "#dbe7ff",
          200: "#b8d0ff",
          300: "#8fb4ff",
          400: "#5f8ef7",
          500: "#3b6fe6",
          600: "#2f5ac0",
          700: "#244a9b",
          800: "#1c3a79",
          900: "#142c5b"
        }
      },
      boxShadow: {
        card: "0 12px 40px rgba(23, 37, 84, 0.12)",
        soft: "0 6px 20px rgba(23,37,84,0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
}
