import app from "./app";
const { conn } = require("./database");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

conn
  .sync({
    // force: true,
    // alter: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server on port", PORT);
    });
  });
