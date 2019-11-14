'use strict';
/**
 * @description
 * Configure the sequenze parameter and the plug-in starts to call and load
 * @author Taylor
 * @time 2019-11-11
 * @address wuhan
 * @github 2237221210@qq.com
 */

module.exports = app => {
  // modify sequelize config
  app.config.sequelize = app.config.sequelizePlus;
  // load sequelize loader
  require('./lib/index.js')(app);
};

