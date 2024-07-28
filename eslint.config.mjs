import typescriptEslint from "typescript-eslint";
import eslintJs from "@eslint/js";

export default [
  eslintJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    ignores: [
      "node_modules/**",
      "packages/core/build/**",
      "packages/core/**/*.d.ts",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-namespace": "off",
      "no-console": "warn",
      "no-duplicate-imports": "warn",
      "no-undef": "off",
    },
  },
];
