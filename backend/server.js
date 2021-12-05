var app = require("./app");
//connexion sur le port 5000
var port = process.env.PORT || 5000;

var server = app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
