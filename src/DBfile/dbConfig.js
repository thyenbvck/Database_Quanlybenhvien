const config = {
<<<<<<< HEAD
  server: "localhost",
  database: "assignment",
  user: "sa",
  password: "1011",
=======
  server: "Quan",
  database: "assignment2",
  user: "MyUser",
  password: "quangamingvn123",
>>>>>>> 0f6bd993ee2af824388bdbed13f2861a8c9c71f1
  driver: "ODBC Driver 17 for SQL Server",
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 1433,
};

config.connectionString = `Driver=${config.driver};Server=${config.server};Database=${config.database};UID=${config.user};PWD=${config.password};`;

module.exports = config;
