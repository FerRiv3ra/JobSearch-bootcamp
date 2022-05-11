const User = require('../models/User');

class AuthUserService {
  async auth(email) {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return {
          status: 400,
          msg: 'Invalid email or password',
        };
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthUserService;
