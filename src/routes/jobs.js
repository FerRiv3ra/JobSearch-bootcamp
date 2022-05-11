const { Router } = require('express');
const { check } = require('express-validator');
const {
  getAllJobs,
  getAllByCategory,
  postJob,
  editJob,
  deleteJob,
} = require('../controllers/jobs');
const { validCategory, validJob } = require('../helpers/validations');
const { validateFields } = require('../middlewares/validateFields');
const validMinimumRole = require('../middlewares/validMinimumRole');
const validateJWT = require('../middlewares/verifyJWT');

const router = Router();

router.get('/', getAllJobs);

router.get(
  '/:category',
  [check('category').custom(validCategory), validateFields],
  getAllByCategory
);

router.post(
  '/',
  [
    validateJWT,
    validMinimumRole,
    check('category', 'Category is required').not().isEmpty(),
    check('category').custom(validCategory),
    check('country', 'Country code is required').not().isEmpty(),
    check('country', 'The country code is not valid').isLength({
      min: 2,
      max: 2,
    }),
    check('details', 'Detail about job is required').not().isEmpty(),
    check('title', 'Title is required').not().isEmpty(),
    validateFields,
  ],
  postJob
);

router.put(
  '/:id',
  [
    validateJWT,
    validMinimumRole,
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(validJob),
    validateFields,
  ],
  editJob
);

router.delete(
  '/:id',
  [
    validateJWT,
    validMinimumRole,
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(validJob),
    validateFields,
  ],
  deleteJob
);

module.exports = router;
