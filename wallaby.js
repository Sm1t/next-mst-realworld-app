module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    'src/**/*.snap',
    '!src/**/*.test.js',
    'setupTests.js',
  ],

  tests: ['src/**/*.test.js'],

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },

  testFramework: 'jest',

  env: {
    type: 'node',
  },
});
