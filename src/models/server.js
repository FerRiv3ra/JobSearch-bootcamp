const express = require('express');
const { connection } = require('../config/db');
const { port } = require('../config/index');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();

    this.paths = {
      auth: '/api/auth',
      users: '/api/users',
    };

    this.dbConnection();

    this.middlewares();

    this.routes();
  }

  async dbConnection() {
    await connection();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.users, require('../routes/users'));
  }

  listen() {
    this.app.listen(port, () => {
      console.log('App corriendo en el puerto ' + port);
    });
  }
}

module.exports = Server;
