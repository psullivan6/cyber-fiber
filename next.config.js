// next.config.js
const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['three']
});