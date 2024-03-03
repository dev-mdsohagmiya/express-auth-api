/** @format */
const app = require("./app");
const DatabaseConnection = require("./database/db");
require("dotenv").config();

//database connection and server run
DatabaseConnection("database Connected", () => {
  app.listen(process.env.PORT || 5050, () => {
    console.log("server is running at 5000");
  });
});
