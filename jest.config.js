const path = require('path');

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/pages/_*.js',
    '!**/*.test.js',
    '!**/*.spec.js',
  ], // https://jestjs.io/docs/en/configuration#collectcoveragefrom-array
  coverageDirectory: 'coverage-jest', // to avoid clashing with Cypress coverage report (https://github.com/bahmutov/cypress-and-jest#jest-init)
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'),
  ],
  setupFilesAfterEnv: [
    'jest-styled-components',
    'jest-axe/extend-expect',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/node_modules/',
  ],
};
