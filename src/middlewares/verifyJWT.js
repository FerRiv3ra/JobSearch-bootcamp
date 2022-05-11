const { response } = require('express');
const { request } = require('express');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const User = require('../models/User');

const validateJWT = async (req = request, res = response, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const { id } = jwt.verify(token, jwtSecret);

      const user = await User.findById(id).select('-password');

      if (!user) {
        return res.status(401).json({
          msg: 'Invalid token',
        });
      }

      req.user = user;

      next();
    } catch (error) {
      return res.status(401).json({
        msg: 'Invalid token',
      });
    }
  } else {
    return res.status(400).json({
      msg: 'There is no token in the request',
    });
  }
};

module.exports = validateJWT;
