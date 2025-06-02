import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginSecurity from "eslint-plugin-security"


export default defineConfig([
    globalIgnores([
        "dist/",
        "coverage/"
    ]),
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      plugins: { js, pluginSecurity },
      extends: ["js/recommended", "pluginSecurity/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
]);


