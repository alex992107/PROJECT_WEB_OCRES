var express = require('express');
var router = express.Router();

/* GET users listing. */
let users =[
  {user:"Clément",
  id:"0"},
  {user:"Thibault",
  id:"1"},
  {user:"Alexis",
  id:"2"},
  {user:"Alexis",
  id:"3"},
];


router.get('/',(req,res) =>{
  res.status(200).json({users});
})

router.get('/:id',(req,res) =>{
  const {id} = req.params;
  const {user} = _.find(users,["id", id]);

  res.status(200).json({
    message:"User found !",user
  });
})


module.exports = router;
