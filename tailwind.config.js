const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "'PingFang SC'", "var(--font-cn)", ...fontFamily.sans],
        serif: [
          "var(--font-serif)",
          "KaiTi",
          "STKaiti",
          "'Kaiti SC'",
          "'PingFang SC'",
          "var(--font-cn)",
          ...fontFamily.serif,
        ],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      typography: {
        neutral: {
          css: {
            "--tw-prose-code": colors.neutral[700],
            "--tw-prose-pre-code": colors.neutral[700],
            "--tw-prose-pre-bg": colors.neutral[100],
            "--tw-prose-th-borders": colors.neutral[200],
            "--tw-prose-td-borders": colors.neutral[200],
            "--tw-prose-invert-code": colors.neutral[300],
            "--tw-prose-invert-pre-code": colors.neutral[300],
            "--tw-prose-invert-pre-bg": colors.neutral[800],
            "--tw-prose-invert-th-borders": colors.neutral[700],
            "--tw-prose-invert-td-borders": colors.neutral[700],
          },
        },
        DEFAULT: {
          css: {
            hr: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
              opacity: 0,
            },
            a: {
              color: "var(--tw-prose-body)",
              fontWeight: 400,
              textDecorationColor: "var(--tw-prose-hr)",
              textUnderlineOffset: "4px",
              transition: "150ms",
              "&:hover": {
                textDecorationColor: "var(--tw-prose-links)",
              },
            },
            h1: {
              fontSize: em(32, 16),
              marginBottom: em(32, 32),
              lineHeight: round(36 / 32),
            },
            table: {
              fontSize: em(16, 16),
              lineHeight: round(28 / 16),
            },
            "thead th": {
              paddingRight: em(12, 16),
              paddingBottom: em(12, 16),
              paddingLeft: em(12, 16),
            },
            "tbody td, tfoot td": {
              paddingTop: em(12, 16),
              paddingRight: em(12, 16),
              paddingBottom: em(12, 16),
              paddingLeft: em(12, 16),
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
            blockquote: {
              fontWeight: 400,
              quotes: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
