/** @format */
const { registerController } = require("../controller/auth");
const { registerMiddleware } = require("../middleware/auth");
const authRouter = require("express").Router();

authRouter.post("/register", registerMiddleware, registerController);

module.exports = authRouter;
