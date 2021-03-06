'use strict';

/**
 *
 * @description egg-sequelize-plus default config
 * @member Config #sequelize
 * @author Taylor
 * @time 2019-11-11
 * @address wuhan
 * @github 2237221210@qq.com
 */
exports.sequelize = {
  dialect: 'mysql',
  database: '',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',

  // support customize your own Squelize
  // Sequelize: require('sequelize'), // v5 or v3

  // support multi datasources by config.sequelize.datasources
  // datasources: [
  //   {
  //     delegate: 'model', // lood to `app[delegate]`
  //     baseDir: 'model', // models in `app/${model}`
  //     // other sequelize configurations
  //   },
  //   {
  //     delegate: 'sequelize', // lood to `app[delegate]`
  //     baseDir: 'sequelize', // models in `app/${model}`
  //     // other sequelize configurations
  //   },
  // ],
};
