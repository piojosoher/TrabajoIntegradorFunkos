const { body } = require('express-validator');

const registerValidations = [

    body('name').notEmpty().withMessage('Name does not empty.'),
    body('lastName').notEmpty().withMessage('Last Name does not empty.'),
    body('email').isEmail().withMessage('Invalid email.'),
    body('password')
        .notEmpty().withMessage('Password does not empty.')
        .isLength({min: 6}).withMessage('Password should be at least 6 characters.'),
    body('confirmPassword').custom((value, {req}) => (value === req.body.password)).withMessage('Passwords do not match.'),
    body('terms').notEmpty().withMessage('Terms does not empty.')
  ];
  
  module.exports = registerValidations;