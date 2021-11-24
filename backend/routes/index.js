var express = require("express");
const app = express()
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});

module.exports = router;
