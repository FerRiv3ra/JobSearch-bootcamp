const { response } = require('express');
const bcrypt = require('bcrypt');
const AuthUserService = require('../services/auth');
const generateJWT = require('../helpers/generateJWT');

const authUserService = new AuthUserService();

const authUser = async (req, res = response) => {
  const { email, password } = req.body;

  const user = await authUserService.auth(email);

  try {
    if (user.msg) {
      const { status, msg } = user;
      return res.status(status).json({ msg });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const token = await generateJWT(user._id);

    res.json({
      token,
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { authUser };
