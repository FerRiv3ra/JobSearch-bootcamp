const { response } = require('express');
const CategoryService = require('../services/categories');

const categoryService = new CategoryService();

const getAllCategories = async (req, res = response) => {
  const categories = await categoryService.getAll();

  res.json(categories);
};

const createCategory = async (req, res = response) => {
  const data = req.body;

  const category = await categoryService.addCategory(data);

  res.status(201).json(category);
};

module.exports = { getAllCategories, createCategory };
