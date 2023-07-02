const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "var(--font-cn)", ...fontFamily.sans],
        serif: ["var(--font-spectral)", "var(--font-cn)", ...fontFamily.serif],
        mono: ["var(--font-fira-code)", ...fontFamily.mono],
      },
      typography: {
        neutral: {
          css: {
            "--tw-prose-code": colors.neutral[700],
            "--tw-prose-pre-code": colors.neutral[700],
            "--tw-prose-pre-bg": colors.neutral[100],
            "--tw-prose-invert-code": colors.neutral[300],
            "--tw-prose-invert-pre-code": colors.neutral[300],
            "--tw-prose-invert-pre-bg": colors.neutral[800],
          },
        },
        DEFAULT: {
          css: {
            a: {
              fontWeight: "400",
              color: "var(--tw-prose-body)",
              textDecorationColor: "var(--tw-prose-hr)",
              textDecorationThickness: "1px",
              textUnderlineOffset: "4px",
              transition: "150ms",
              "&:hover": {
                textDecorationColor: "var(--tw-prose-links)",
              },
            },
            code: {
              fontWeight: 400,
              color: "var(--tw-prose-code)",
              background: "var(--tw-prose-pre-bg)",
              borderRadius: "4px",
              padding: "2px 4px",
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
