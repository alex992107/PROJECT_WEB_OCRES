var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./user/UserController");
app.use("/users", UserController);
// arriver sur localhost:5000
app.get("/", (req, res) => {
  res.send("Welcome to User API !");
});

module.exports = app;
