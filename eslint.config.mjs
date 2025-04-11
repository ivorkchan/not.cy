import { FlatCompat } from "@eslint/eslintrc";
import * as mdx from "eslint-plugin-mdx";
import tailwind from "eslint-plugin-tailwindcss";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".cache",
      ".content-collections",
      ".next",
      "build",
      "cache",
      "dist",
      "node_modules",
      "next-env.d.ts",
      "package.json",
      "patches",
      "pnpm-lock.yaml",
      "public",
    ],
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "react/jsx-no-undef": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),
  { ...mdx.flat },
  ...tailwind.configs["flat/recommended"],
];

export default eslintConfig;
