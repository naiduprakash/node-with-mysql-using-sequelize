var cloneData = require('../utils/clone-data.utils');

var appConfig = require('./app.config');
var databaseConfig = require('./database.config');
var jwtConfig = require('./jwt.config');
var mailConfig = require('./mail.config');

var config = {
  app: appConfig,
  database: databaseConfig,
  jwt: jwtConfig,
  mail: mailConfig
};

function get(keyPath) {
  if (keyPath) {
    if (typeof keyPath === 'string') {
      let keyPathArr = keyPath.split('.');
      if (keyPathArr.length) {
        let value = config;
        keyPathArr.forEach(currentValue => {
          if (typeof value !== 'undefined') {
            value = value[currentValue];
          }
        });

        return cloneData(value);
      }
    }
    throw new Error('Config Error : Key must be in string format');
  } else {
    return cloneData(config);
  }
}
module.exports = {
  get: get
};
