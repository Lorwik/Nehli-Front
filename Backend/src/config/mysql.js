const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "mysql",
  });

  const dbConnectMySql = async() => {
    try {
      await sequelize.authenticate();
      console.log("MYSQL Conexión correcta.");
  
      // Sincronización de las tablas
      await sequelize.sync();
      console.log("Tablas sincronizadas correctamente.");
    } catch (error) {
      console.error("MYSQL Error de Conexión", error);
    }
  };

module.exports = { sequelize, dbConnectMySql };