
const { body } = require('express-validator');

const loginValidations = [

    body('email').isEmail().withMessage('Invalid email.'),

    body('password')
        .notEmpty().withMessage('Password does not empty.')
        .isLength({min: 6}).withMessage('Password should be at least 6 characters.'),
];

module.exports = loginValidations;