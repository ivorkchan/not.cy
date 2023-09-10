const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Arial",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Helvetica Neue'",
          "Helvetica",
          "'Segoe UI'",
          "'Noto Sans'",
          "'Source Sans Pro'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "var(--font-hei)",
          "'Microsoft YaHei'",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
          "emoji",
          "math",
        ],
        serif: [
          "ui-serif",
          "-apple-system-ui-serif",
          "var(--font-serif)",
          "'Noto Serif'",
          "'Source Serif Pro'",
          "serif",
          "var(--font-kai-punc)",
          "var(--font-kai)",
          "KaiTi",
          "STKaiti",
          "fangsong",
        ],
        mono: [
          "ui-monospace",
          "-apple-system-monospace",
          "var(--font-mono)",
          "'Sarasa Mono SC'",
          "'Sarasa Mono TC'",
          "'Sarasa Mono HC'",
          "monospace",
        ],
      },
      typography: {
        neutral: {
          css: {
            "--tw-prose-code": colors.neutral[700],
            "--tw-prose-pre-code": colors.neutral[700],
            "--tw-prose-pre-bg": colors.neutral[100],
            "--tw-prose-th-borders": colors.neutral[200],
            "--tw-prose-td-borders": colors.neutral[200],
            "--tw-prose-captions": colors.neutral[400],
            "--tw-prose-invert-code": colors.neutral[300],
            "--tw-prose-invert-pre-code": colors.neutral[300],
            "--tw-prose-invert-pre-bg": colors.neutral[800],
            "--tw-prose-invert-th-borders": colors.neutral[700],
            "--tw-prose-invert-td-borders": colors.neutral[700],
            "--tw-prose-invert-captions": colors.neutral[500],
          },
        },
        DEFAULT: {
          css: {
            maxWidth: "var(--prose-width)",
            hr: {
              opacity: 0,
            },
            h1: {
              fontSize: "2rem",
              marginTop: "0",
              marginBottom: "4rem",
              lineHeight: "2.5rem",
              fontWeight: "900",
            },
            h2: {
              fontSize: "1.5rem",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              lineHeight: "2rem",
              fontWeight: "800",
            },
            h3: {
              fontSize: "1.125rem",
              marginTop: "2rem",
              marginBottom: "1.25rem",
              lineHeight: "1.5rem",
              fontWeight: "700",
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
            table: {
              fontSize: "1rem",
              lineHeight: "1.75rem",
            },
            "thead th": {
              paddingRight: "0.75rem",
              paddingBottom: "0.75rem",
              paddingLeft: "0.75rem",
            },
            "tbody td, tfoot td": {
              paddingTop: "0.75rem",
              paddingRight: "0.75rem",
              paddingBottom: "0.75rem",
              paddingLeft: "0.75rem",
            },
            code: {
              color: "var(--tw-prose-code)",
              background: "var(--tw-prose-pre-bg)",
              fontWeight: 400,
              padding: "2px 4px",
              borderRadius: "4px",
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
