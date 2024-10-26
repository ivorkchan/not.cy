import { fixupPluginRules } from "@eslint/compat";
import {
  browser,
  common,
  edge,
  next,
  node,
  prettier,
  react,
  typescript,
} from "eslint-config-neon";
import pluginMdx from "eslint-plugin-mdx";
import pluginTailwind from "eslint-plugin-tailwindcss"
import merge from "lodash.merge";

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
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
      "package-lock.json",
      "package.json",
      "patches",
      "pnpm-lock.yaml",
      "public",
    ],
  },
  {
    plugins: {
      mdx: fixupPluginRules(pluginMdx),
      tailwind: fixupPluginRules(pluginTailwind)
    },
  },
  ...[
    ...common,
    ...browser,
    ...node,
    ...typescript,
    ...react,
    ...next,
    ...edge,
    ...prettier,
  ].map((config) =>
    merge(
      config,
      {
        files: ["**/*.{ts,tsx}"],
        settings: {
          react: {
            version: "detect",
          },
        },
        languageOptions: {
          parserOptions: {
            project: "./tsconfig.json",
          },
        },
      },
      {
        rules: {
          "import-x/order": "off",
          "react-refresh/only-export-components": "off",
        },
      },
    ),
  ),
];

export default config;
