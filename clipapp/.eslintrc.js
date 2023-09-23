module.exports = {
  root: true,
  extends: '@react-native',
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      parser: 'flow',
    },
  ],
};

// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

// module.exports = {
//   root: true,
//   extends: [
//     "eslint:recommended",
//     "plugin:import/errors",
//     "plugin:react/recommended",
//     "plugin:jsx-a11y/recommended",
//     "plugin:react-hooks/recommended",
//     "prettier"
//   ],
//   rules: {
//     "react/prop-types": 0,
//     "react/react-in-jsx-scope": 0
//   },
//   plugins: ["react", "import", "jsx-a11y"],
//   parser: "@babel/eslint-parser",
//   parserOptions: {
//     "requireConfigFile": false,
//     "ecmaVersion": 2021,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   env: {
//     "es6": true,
//     "browser": true,
//     "node": true
//   },
//   settings: {
//     "react": {
//       "version": "detect"
//     }
//   }
// }
