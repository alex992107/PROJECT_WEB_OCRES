var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Ici page de test');
});

module.exports = router;