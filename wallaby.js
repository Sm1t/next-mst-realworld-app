module.exports = wallaby => ({
  files: ['src/**/*.js', 'src/**/*.snap', '!src/**/*.test.js'],

  tests: ['src/**/*.test.js'],

  compilers: {
    'src/**/*.js': wallaby.compilers.babel(),
  },

  testFramework: 'jest',

  env: {
    type: 'node',
  },
});
