const { request, response } = require('express');

const isAdminRole = (req = request, res = response, next) => {
  const { role, name } = req.user;

  if (!role) {
    return res.status(500).json({
      msg: 'Please, valid token before',
    });
  }

  if (role !== 'admin') {
    return res.status(401).json({
      msg: `${name} is not admin`,
    });
  }

  next();
};

module.exports = isAdminRole;
