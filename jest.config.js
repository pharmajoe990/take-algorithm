// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/lib/',
  ],
  roots: [
    'src/',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
