/** @format */

const mongoose = require("mongoose");
require("dotenv").config();
const DatabaseConnection = (message, server) => {
  main().catch((err) => console.log(err));

  async function main() {
    await mongoose.connect(process.env.DATABASE);

    console.log(message);
    server();
  }
};

module.exports = DatabaseConnection;
