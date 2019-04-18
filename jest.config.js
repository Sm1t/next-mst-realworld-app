module.exports = {
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
