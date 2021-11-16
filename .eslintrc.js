export default {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'vue/require-prop-types': 0,
    'vue/max-attributes-per-line': 0,
    'prettier/prettier': 0,
  },
}
