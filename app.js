'use strict';
/**
 * @description
 * @author Rong姐姐好可爱
 * @time 2019-11-11
 * @address wuhan
 */

module.exports = app => {
  app.config.sequelize = app.config.sequelizePlus;
  require('./lib/index.js')(app);
};

