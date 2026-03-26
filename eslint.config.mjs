import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
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
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ),
    ),
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  globalIgnores(["**/dist", "**/eslint.config.mjs", "**/vite.config.js"]),
]);
