module.exports = {
  extends: ["./node_modules/@blitzjs/next/eslint"],
  rules: {
    "react/no-unknown-property": [2, { ignore: ["jsx", "global"] }],
  },
}
