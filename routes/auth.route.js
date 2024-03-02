/** @format */
const { registerController } = require("../controller/auth");
const authRouter = require("express").Router();

authRouter.get("/register", registerController);

module.exports = authRouter;
