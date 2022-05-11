const { Router } = require('express');
const { check } = require('express-validator');
const {
  getUsers,
  createUser,
  editUser,
  getUser,
  deleteUser,
} = require('../controllers/users');
const {
  validUserById,
  validRole,
  validEmail,
} = require('../helpers/validations');
const { validateFields } = require('../middlewares/validateFields');
const isAdminRole = require('../middlewares/isAdminRole');
const validateJWT = require('../middlewares/verifyJWT');

const router = Router();

router.get('/', [validateJWT, isAdminRole], getUsers);

router.get(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(validUserById),
    validateFields,
  ],
  getUser
);

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Is not valid email').isEmail(),
    check('email').custom(validEmail),
    check('role', 'Role is required').not().isEmpty(),
    check('role').custom(validRole),
    validateFields,
  ],
  createUser
);

router.put(
  '/:id',
  [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(validUserById),
    validateFields,
  ],
  editUser
);

router.delete(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(validUserById),
    validateFields,
  ],
  deleteUser
);

module.exports = router;
