// @ts-check

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import browser from "eslint-config-neon/flat/browser.js"
import common from "eslint-config-neon/flat/common.js"
import edge from "eslint-config-neon/flat/edge.js"
import next from "eslint-config-neon/flat/next.js"
import node from "eslint-config-neon/flat/node.js"
import prettier from "eslint-config-neon/flat/prettier.js"
import react from "eslint-config-neon/flat/react.js"
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
