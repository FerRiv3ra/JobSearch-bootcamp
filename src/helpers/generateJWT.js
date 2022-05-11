const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const generateJWT = (id = '') => {
  return new Promise((res, rej) => {
    const payload = { id };

    jwt.sign(payload, jwtSecret, { expiresIn: '7d' }, (err, token) => {
      if (err) {
        console.log(err);
        rej('Sorry the token cannot be generated');
      } else {
        res(token);
      }
    });
  });
};

module.exports = generateJWT;
