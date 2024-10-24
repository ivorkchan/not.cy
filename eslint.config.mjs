// @ts-check

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import {
  browser,
  common,
  edge,
  next,
  node,
  prettier,
  react
} from "eslint-config-neon"
import mdx from "eslint-plugin-mdx"
import tailwindcss from "eslint-plugin-tailwindcss"
import tslint from "typescript-eslint"

export default tslint.config(
  {
    ignores: [
      ".cache",
      ".contentlayer",
      ".next",
      "build",
      "cache",
      "dist",
      "node_modules",
      "package-lock.json",
      "package.json",
      "patches",
      "pnpm-lock.yaml",
      "public",
    ],
  },
  ...fixupConfigRules(common),
  ...fixupConfigRules(browser),
  ...fixupConfigRules(node),
  ...tslint.configs.recommended,
  ...fixupConfigRules(react),
  ...fixupConfigRules(next),
  ...fixupConfigRules(edge),
  ...fixupConfigRules(prettier),
  {
    plugins: {
      tailwindcss: fixupPluginRules(tailwindcss),
      mdx: fixupPluginRules(mdx),
    },
    rules: {
      "react/jsx-no-undef": "off",
    },
  }
)
