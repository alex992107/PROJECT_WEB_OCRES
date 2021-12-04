/* GET home page. */
const application = require('./../app')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
var router = express.Router();
const database = require('./db')
const userRouter = require('./router')

const apiPort = 3001
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});

database.db.on('error', console.error.bind(console, 'MongoDB connection error:'))
application.app.get('/', (req, res) => {
    res.send('Hello World!')
})
application.app.use('/api', movieRouter)

application.app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


module.exports = router;
