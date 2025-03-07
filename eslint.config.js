import pluginJs from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["**/*.d.ts"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { parser: tsParser, globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules, // TypeScriptの推奨ルールを適用
    },
  },
  jsxA11y.flatConfigs.recommended,
  pluginJs.configs.recommended,
  // ...tseslint.configs.strict,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
