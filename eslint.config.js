// eslint.config.js
export default [
  {
    files: ['**/*.jsx'],
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
