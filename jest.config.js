module.exports = {
  moduleFileExtensions: ['js'],

  // A preset that is used as a base for Jest's configuration
  // preset: null,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
