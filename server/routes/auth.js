const router = require('express').Router();
const jsonparser = require('body-parser').json();
const User = require('../models/user');
const token = require('../lib/token');

router.post('/signup', jsonparser, (req, res) => {
  const {username, password} = req.body;
  delete req.body.password;

  User.findOne({username})
  .then( obj => {
    if (obj){
      return res.status(500).json({reason: 'That username already exists'});
    }
    const user = new User(req.body);
    user.generateHash(password);
    return user.save()
    .then(newUser => token.sign(newUser))
    .then(token => res.json(token));
  })
  .catch( err => {
    res.status(500).json({reason: 'Database failure', msg: err});
  });
});

router.post('/signin', jsonparser, (req, res) => {
  const {username, password} = req.body;
  delete req.body;
  User.findOne({username})
    .then( user => {
      if (!user){
        res.status(400).json({reason: 'Authentication failed'});
      }
      if (!user.authenticateHash(password)){
        res.status(400).json({reason: 'Authentication failed'});
      }
      token.sign(user).then( token => res.json({ token }));
    })
    .catch( err => {
      res.status(500).json({reason: 'Database failure', msg: err});
    });
});

module.exports = router;
