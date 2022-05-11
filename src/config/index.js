const config = {
  port: process.env.PORT,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dbName: process.env.DB_DBNAME,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
