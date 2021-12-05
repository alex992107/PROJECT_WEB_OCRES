var mongoose = require("mongoose");

//parametres utilisateurs
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
mongoose.model("User", UserSchema);

module.exports = mongoose.model("User");
