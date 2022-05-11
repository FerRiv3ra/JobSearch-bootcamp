const { response } = require('express');
const countries = require('../helpers/countries');

const validCountry = (req, res = response, next) => {
  const { country } = req.body;

  if (!country) {
    return next();
  }

  if (country.length !== 2) {
    return res.status(400).json({
      msg: 'Country code is not valid',
    });
  }

  const valid = countries.filter((co) => co.code === country);

  console.log(valid);

  if (valid.length === 0) {
    return res.status(400).json({
      msg: 'Country code is not valid',
    });
  }

  req.body.country = valid[0].name_en;

  next();
};

module.exports = validCountry;
