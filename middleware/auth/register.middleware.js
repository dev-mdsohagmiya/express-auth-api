/** @format */

const { registerSchema } = require("../../model/auth");

const registerMiddleware = (req, res, next) => {
  const { email } = req.body;

  registerSchema.find({ email: email }).then((result) => {
    if (result[0]) {
      res.status(409).json({ message: "User already exists" });
    } else {
      next();
    }
  });
};

module.exports = registerMiddleware;
