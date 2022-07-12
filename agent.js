'use strict';
/**
 * @description
 * Create database through the connection of config, and realize dynamic adding database
 * @author Rong姐姐好可爱
 * @time 2019-11-11
 * @address wuhan
 */
const mysql = require('mysql2');
module.exports = agent => {
  const { host, port, username, password, database } = agent.config.sequelizePlus;
  const sql = 'CREATE DATABASE IF NOT EXISTS ' + database + ' default charset utf8 COLLATE utf8_general_ci';
  // build a connection with database
  const connection = mysql.createConnection({ host, port, user: username, password });
  // open connection
  connection.connect();
  // execute sql to create a database
  connection.query(sql, err => {
    if (err) {
      // create failed
      agent.coreLogger.error('[egg-sequelize-plus] DataBase create failed ，check egg-sequelize-plus config carefully ', err);
    }
    agent.coreLogger.info('[egg-sequelize-plus] DataBase create success , the name is ' + database);
    agent.coreLogger.info('[egg-sequelize-plus] build connection successed ,please begin use it to operate DataBase ');
    // close connection with database
    connection.end();
  });
};

