const { response } = require('express');
const UserService = require('../services/users');
const bcrypt = require('bcrypt');

const userService = new UserService();

const getUsers = async (req, res = response) => {
  const users = await userService.getAll();

  res.json(users);
};

const getUser = async (req, res = response) => {
  const { id } = req.params;

  const user = await userService.getOne(id);

  res.json(user);
};

const createUser = async (req, res = response) => {
  const { email, password, ...body } = req.body;

  body.email = email.toLowerCase();

  const salt = bcrypt.genSaltSync();
  body.password = bcrypt.hashSync(password, salt);

  const user = await userService.create(body);

  res.status(201).json(user);
};

const editUser = async (req, res = response) => {
  const { _id, email, password, ...body } = req.body;
  const { id } = req.params;

  if (email) {
    body.email = email.toLowerCase();
  }

  if (password) {
    const salt = bcrypt.genSaltSync();
    body.password = bcrypt.hashSync(password, salt);
  }

  const user = await userService.edit(id, body);

  res.json(user);
};

const deleteUser = async (req, res = response) => {
  const { id } = req.params;

  const user = await userService.delete(id);

  res.json(user);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
};
