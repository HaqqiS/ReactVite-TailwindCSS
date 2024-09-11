import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

// module.exports = {
//   // Konfigurasi lainnya...
//   rules: {
//     // Aturan lainnya...
//     'react/react-in-jsx-scope': 'off', // Mengabaikan peringatan impor React
//   },
// };