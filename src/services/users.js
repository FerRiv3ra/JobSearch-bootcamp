const User = require('../models/User');

class UserService {
  async getAll() {
    try {
      const users = await User.find({ state: true });
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async edit(id, data) {
    try {
      const user = await User.findByIdAndUpdate(id, data, {
        returnOriginal: false,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const user = await User.findByIdAndUpdate(id, { state: false });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;
