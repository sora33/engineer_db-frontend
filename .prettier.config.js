/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,

  // @ianvs/prettier-plugin-sort-imports
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    require("prettier-plugin-tailwindcss"),
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.4",
};
