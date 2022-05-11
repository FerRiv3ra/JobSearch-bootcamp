const { Router } = require('express');
const { check } = require('express-validator');
const {
  getAllCategories,
  createCategory,
} = require('../controllers/categories');
const { existsCategory } = require('../helpers/validations');
const isAdminRole = require('../middlewares/isAdminRole');
const { validateFields } = require('../middlewares/validateFields');
const validateJWT = require('../middlewares/verifyJWT');

const router = Router();

router.get('/', getAllCategories);

router.post(
  '/',
  [
    validateJWT,
    isAdminRole,
    check('category', 'Category name is required').not().isEmpty(),
    check('category').custom(existsCategory),
    validateFields,
  ],
  createCategory
);

module.exports = router;
