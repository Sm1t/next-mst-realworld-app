module.exports = wallaby => ({
  files: ['models/**/*.js'],

  tests: ['models/**/*.test.js'],


  compilers: {
    'models/**/*.js': wallaby.compilers.babel(),
  },

  testFramework: 'jest',

  env: {
    type: 'node',
    runner: 'node',
  },
});
