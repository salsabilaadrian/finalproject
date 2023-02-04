const { check, validationResult } = require('express-validator');

const rules = [
    check('adminid')
        .notEmpty().withMessage('AdminId must be fiiled!'),
    check('namebook')
        .isLength({ min: 3, max: 50 }).withMessage("Name lenght must be minimal 3 and maximal 50 character !"),
    check('descbook')
        .notEmpty().withMessage('Description must be filled!'),
    check('pricebook')
        .notEmpty().withMessage('Price must be filled!')
        .isInt({ min: 20000 }).withMessage('Minimal price is 20000 !')
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