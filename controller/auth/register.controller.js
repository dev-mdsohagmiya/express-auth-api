/** @format */

const { registerSchema } = require("../../model/auth");

const registerController = (req, res) => {
  const { email, name, password } = req.body;
  const newUser = new registerSchema({
    name: name,
    email: email,
    password: password,
  });

  newUser.save().then((result) => {
    res.status(201).json({ message: "User created successfully" });
  });
};

module.exports = registerController;
