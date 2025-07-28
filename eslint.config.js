// eslint.config.js
import react from '@eslint/js';
import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  react.configs.recommended,
  {
    files: ['**/*.jsx'],
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn'
    }
  }
];
