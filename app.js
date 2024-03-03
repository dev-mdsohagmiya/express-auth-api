/** @format */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rootRouter = require("./routes/root.route");
const authRouter = require("./routes/auth.route");
const { registerSchema } = require("./model/auth");

const app = express();
app.use(
  express.urlencoded({ extended: true }),
  express.json(),
  cors(),
  morgan("dev")
);

// root router
app.use(rootRouter);

// auth routes
app.use("/auth", authRouter);

module.exports = app;
