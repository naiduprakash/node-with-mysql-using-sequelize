var env = require('../utils/env.utils');

module.exports = {
  /**
   * --------------------------------------------------------------------------
   * JWT Authenticarion Secret
   * --------------------------------------------------------------------------
   */

  secret: env('APP_NAME', '5O6TmgUaEV6hV40mC8ilqvdCjtGc1wWd'),

  /**
   * --------------------------------------------------------------------------
   * JWT time to live
   * --------------------------------------------------------------------------
   * Specify the length of time (in minutes) that the token will be valid for.
   */

  ttl: 60 * 24 //  one day
};
