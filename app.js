'use strict';
/**
 * @description 插件启动调用加载
 * @author Taylor 
 * @time 2019-11-11
 * @address wuhan
 * @github 2237221210@qq.com
 */
const mysql=require('mysql2');
module.exports = app => {
  // 创建数据库
  console.log('sequelize-plus',app.config.sequelizePlus);
   const { host, port, username, password, database } = app.config.sequelizePlus;
   new Promise((resolve, reject) => {
   // 建立连接
     const connection = mysql.createConnection({ host, port, user:username, password });
     // 创建数据库
     const sql = 'CREATE DATABASE IF NOT EXISTS ' + database + ' default charset utf8 COLLATE utf8_general_ci';
     connection.connect();
     connection.query(sql, err => {
       console.log(err);
       if (err) {
       // 创建失败
         reject(err);
       }
       resolve();
       // 关闭连接
       connection.end();
     });
   }).then(() => {
     // 创建成功
     app.logger.info('DataBase create success , the name is ' + database);
     app.logger.info('egg-sequelize-pluse build conection successed ,please begin use it to operate DataBase ');
    
     // 参数转换
     app.config.sequelize=app.config.sequelizePlus;
     // 加载连接
      require('./lib/index.js')(app);
   }).catch(error=>{
     // 出现异常
    app.logger.error('DataBase create failed ，check sequelize-plus config carefully ', error);
   });

};

