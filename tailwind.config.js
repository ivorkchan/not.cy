const colors = require("tailwindcss/colors")

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
      colors: {
        muted: "rgb(var(--muted))",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "'HYXinRenWenSong 55W'",
          "FZNewShuSong-Z10",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
          "emoji",
          "math",
        ],
        serif: [
          "var(--font-serif)",
          "Charter",
          "'Iowan Old Style'",
          "var(--font-kai-punc)",
          "FZNewKai-Z03",
          "ui-serif",
          "serif",
          "fangsong",
        ],
        mono: ["var(--font-mono)", "monospace"],
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
              fontSize: "2.125rem",
              marginTop: "0",
              marginBottom: "4rem",
              lineHeight: "3rem",
              fontWeight: "900",
            },
            h2: {
              fontSize: "1.75rem",
              marginTop: "4rem",
              marginBottom: "2rem",
              lineHeight: "2rem",
              fontWeight: "800",
            },
            h3: {
              fontSize: "1.25rem",
              marginTop: "4rem",
              marginBottom: "2rem",
              lineHeight: "1.5rem",
              fontWeight: "800",
            },
            a: {
              color: "var(--tw-prose-body)",
              fontWeight: "inherit",
              textDecorationColor: "var(--tw-prose-hr)",
              textDecorationThickness: "1px",
              textDecorationSkipInk: "auto",
              textUnderlinePosition: "from-font",
              textUnderlineOffset: "from-font",
              transition: "200ms",
              "&:hover": {
                textDecorationColor: "var(--tw-prose-body)",
              },
            },
            strong: {
              color: "inherit",
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
              fontWeight: "400",
              color: "var(--tw-prose-code)",
              backgroundColor: "var(--tw-prose-pre-bg)",
              padding: "1px 4px",
              borderRadius: "4px",
            },

            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            kbd: {
              fontWeight: "400",
              padding: "1px 4px",
              borderRadius: "4px",
              boxShadow:
                "0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 2px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)",
            },
            blockquote: {
              fontStyle: "normal",
              quotes: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
