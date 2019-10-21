module.exports = function env(key, defaults) {
  return typeof process.env[key] === 'undefined' ? defaults : process.env[key];
};
