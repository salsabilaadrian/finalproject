const { check, validationResult } = require('express-validator');

const rules = [
    check('name')
        .isLength({ min: 3, max: 50 }).withMessage("Name lenght must be minimal 3 and maximal 50 character!"),
    check('email')
        .notEmpty().withMessage('Email must be filled!')
        .isEmail().withMessage('Must be input an email!')
        .isLength({ min: 10 }).withMessage('Email length minimal must be 10!'),
    check('password')
        .notEmpty().withMessage('Password doesnt empty!')
        .isLength({ min: 6 }).withMessage('Password lenght must be 6!'),
    check('address')
        .notEmpty().withMessage('Address must be filled!'),
    check('phone')
        .notEmpty().withMessage('Phone number must be filled!'),
];

const validate = [
    rules,
    (req, res, next) => {
        const errorFormatter = ({ msg }) => {
            return `${msg}`
        }

        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.json({ errors: result.array() })
        }
        next();
    }
];

module.exports = validate