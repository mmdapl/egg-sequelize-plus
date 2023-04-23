'use strict';

/**
 *
 * @author mmdapl
 * @time 2019-11-11
 * @address wuhan
 */
exports.sequelizePlus = {
  dialect: 'mysql',
  // connectUri: 'mysql://root@123456@localhost:3306/sequelize_plus',
  // database: '',
  // host: 'localhost',
  // port: 3306,
  // username: 'root',
  // password: '123456',

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
  // benchmark: true,
  // define: {
  //   freezeTableName: false,
  //   underscored: true,
  // },
};
