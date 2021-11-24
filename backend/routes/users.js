var express = require('express');
var router = express.Router();
var _ = require('underscore');

/* GET users listing. */
let users =[
  {user:"Clément",
  id:"0"},
  {user:"Alexandre",
  id:"1"},
];

//Afficher 
router.get('/',(req,res) =>{
  res.status(200).json({users});
})

//Afficher avec une ID
router.get('/:id',(req,res) =>{
  const {id} = req.params;
  const user = _.find(users,["id", id]);
  res.status(200).json({
    message:"User found !",user
  });
})

//Add un USER
router.put('/', (req, res) => {
  const {user} = req.body;
  const id = _.uniqueId();
  users.push({user,id});
  res.json({
    message: 'Jus added',id,
    user : {user, id}
  });
});

//Update la liste
router.post('/:id', (req,res) => {
  const {id} = req.params;
  const {user} = req.body;
  const userToUpdate = _.find(users, ["id",id]);
  userToUpdate.user = user;
  res.json({
    message: 'Just update'+{id}+'with'+{user}
  });
});


module.exports = router;
