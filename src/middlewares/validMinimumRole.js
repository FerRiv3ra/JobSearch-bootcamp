const { request, response } = require('express');

const validMinimumRole = (req = request, res = response, next) => {
  const { role, name } = req.user;

  if (!role) {
    return res.status(500).json({
      msg: 'Please, valid token before',
    });
  }

  if (role !== 'admin' || role !== 'employer') {
    return res.status(401).json({
      msg: `${name} has insufficient permissions`,
    });
  }

  next();
};

module.exports = validMinimumRole;
