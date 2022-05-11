const { request, response } = require('express');

const validMinimumRole = (req = request, res = response, next) => {
  const { role, name } = req.user;
  const validRoles = ['admin', 'employer'];

  if (!role) {
    return res.status(500).json({
      msg: 'Please, valid token before',
    });
  }

  if (!validRoles.includes(role)) {
    return res.status(401).json({
      msg: `${name} has insufficient permissions`,
    });
  }

  next();
};

module.exports = validMinimumRole;
