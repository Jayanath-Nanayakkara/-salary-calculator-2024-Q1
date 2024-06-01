// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        42.5: "42.5rem",
      },
      height: {
        38.5: "38.5rem",
      },
      inset: {
        8.875: "8.875rem",
        8: "8rem",
      },
      colors: {
        calColor: "var(--cal-bg-color)",
        textBlue: "#0052EA",
        textSecondary: "#757575",
        iconColor: "#212121",
        border01: "#E0E0E0",
      },
      typography: {
        "b-large": {
          css: {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
            fontFamily: "Inter",
            textAlign: "left",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        "custom-14": "14px",
        h4: "20px",
      },
      lineHeight: {
        "custom-20": "20px",
        h4: "32px",
      },
      letterSpacing: {
        "custom-02": "0.2px",
      },
      letterSpacing: {
        h4: "-0.02px",
      },
    },
  },
  plugins: [],
};
