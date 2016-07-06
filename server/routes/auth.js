const router = require('express').Router();
const jsonparser = require('body-parser').json();
const User = require('../models/user');
const token = require('../lib/token');

router.post('/signup', jsonparser, (req, res, next) => {
  const {username, password} = req.body;
  delete req.body.password;

  User.findOne({username})
  .then( obj => {
    if (obj){
      res.status(500).json({error: 'That username already exists'});
    }
    const user = new User(req.body);
    user.generateHash(password);
    return user.save()
    .then(newUser => token.sign(newUser))
    .then(token => res.json(token));
  })
  .catch( err => {
    next({code: 500, error: 'Database failure', msg: err});
  });
});

router.post('/signin', jsonparser, (req, res, next) => {
  const {username, password} = req.body;
  delete req.body;
  User.findOne({username})
    .then( user => {
      if (!user){
        res.status(400).json({error: 'Authentication failed'});
      }
      if (!user.authenticateHash(password)){
        res.status(400).json({error: 'Authentication failed'});
      }
      token.sign(user).then( token => res.json({ token }));
    })
    .catch( err => {
      next({code: 500, error: 'Database failure', msg: err});
    });
});

module.exports = router;
