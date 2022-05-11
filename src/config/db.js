const mongoose = require('mongoose');
const { user, pass, host, dbName } = require('./index');

const connection = async () => {
  await mongoose.connect(`mongodb+srv://${user}:${pass}@${host}/${dbName}`);
  console.log('DB Online');
};

module.exports = { connection };
