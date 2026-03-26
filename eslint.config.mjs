import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import { reactRefresh } from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ),
    ),
    plugins: {
      "react-refresh": reactRefresh.plugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["vite.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  globalIgnores([
    "**/dist",
    "**/eslint.config.mjs",
    "**/vite.config.ts",
    "**/vite-env.d.ts",
  ]),
]);
