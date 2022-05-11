const Categories = require('../models/Categories');
const Jobs = require('../models/Jobs');
const Role = require('../models/role');
const User = require('../models/User');

const validRole = async (role = '') => {
  // Validar que se ingrese un rol válido
  const existRole = await Role.findOne({ role });
  if (!existRole) throw new Error(`The role ${role} is not valid`);
};

const validEmail = async (email = '') => {
  // Validar que el correo no este registrado
  const existEmail = await User.findOne({ email });
  if (existEmail) throw new Error(`The email ${email} is alredy registered`);
};

const validUserById = async (id) => {
  // Validar que el usuario exista
  const exisUserById = await User.findById(id);
  if (!exisUserById || !exisUserById.state)
    throw new Error(`The ID ${id} do not exists`);
};

const validCategory = async (category) => {
  const existCategory = await Categories.findOne({ category });

  if (!existCategory) throw new Error(`The category ${category} is not valid`);
};

const existsCategory = async (category) => {
  const existCategory = await Categories.findOne({ category });

  if (existCategory)
    throw new Error(`The category ${category} is alredy registered`);
};

const validJob = async (id) => {
  const existJob = await Jobs.findById(id);

  if (!existJob) throw new Error(`The job with ID ${id} do not exists`);
};

module.exports = {
  validRole,
  validEmail,
  validUserById,
  validCategory,
  existsCategory,
  validJob,
};
