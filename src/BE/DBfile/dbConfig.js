const config = {
  server: "localhost",
  database: "assignment",
  user: "sa",
  password: "1011",
  driver: "ODBC Driver 17 for SQL Server",
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 1433,
};

config.connectionString = `Driver=${config.driver};Server=${config.server};Database=${config.database};UID=${config.user};PWD=${config.password};`;

module.exports = config;
