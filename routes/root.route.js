/** @format */
const { rootController } = require("../controller");
const rootRouter = require("express").Router();

rootRouter.get("/", rootController);

module.exports = rootRouter;
