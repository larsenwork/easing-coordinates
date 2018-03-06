module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },

  plugins: [
    "prettier"
  ],

  extends: [
    "prettier",
    "prettier/standard"
  ],

  // https://github.com/prettier/eslint-plugin-prettier
  rules: {
    "max-len": "off",
    "prettier/prettier": ["error",
      {
        singleQuote: true,
        trailingComma: "es5",
        printWidth: 80,
        semi: false
      }
    ]
  }
}
