const path = require('path');

module.exports = {
  clearMocks: true,
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
