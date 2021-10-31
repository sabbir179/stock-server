const { check } = require("express-validator");

module.exports.userValidator = [
  check("name")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("can't be empty")
    .bail()
    .isString()
    .withMessage("should be string"),
  check(""),
];
