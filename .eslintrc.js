module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/dist/**', '**/cdk.out/**', 'fresko.config.ts'],
};
