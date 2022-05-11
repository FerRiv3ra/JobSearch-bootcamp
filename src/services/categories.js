const Category = require('../models/Categories');

class CategoryService {
  async getAll() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      console.log(error);
    }
  }

  async addCategory(data) {
    try {
      const category = await Category.create(data);
      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CategoryService;
