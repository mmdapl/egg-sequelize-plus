'use strict';
/**
 * @description
 * Configure the sequenze parameter and the plug-in starts to call and load
 * @author Taylor
 * @time 2019-11-11
 * @address wuhan
 */

module.exports = app => {
  app.config.sequelize = app.config.sequelizePlus;
  require('./lib/index.js')(app);
};

