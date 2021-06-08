const path = require('path');

module.exports = {
  clearMocks: true,
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'),
  ],
  setupFilesAfterEnv: ['jest-styled-components', 'jest-axe/extend-expect'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/node_modules/',
  ],
};
