module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    /**
     * ESlint base rules
     * Some must be disabled as @typescript-eslint can report incorrect errors
     **/
    'no-unused-vars': 'off',
    'no-invalid-this': 'off',
    'no-duplicate-imports': 'off',
    'no-var': 'error',
    'no-param-reassign': 'error',
    'prefer-const': 'error',
    'max-lines-per-function': 'error',
    'max-nested-callbacks': ['error', {max: 5}]
  }
}
