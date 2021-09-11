const express = require("express");
const app = express();
app.set("view engine", "ejs");
require("dotenv").config();

app.get("/", (req, res) => {
  res.render("homepage");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
