const router = require('express').Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user');
const token = require('../lib/token-check');
const authValidate = require('../lib/auth-validate');

router.post('/signup', jsonParser, (req, res) => {
  const {username, password} = req.body;
  delete req.body.password;
	
  if (!username) {
    return res.status(400).json({
      message: 'Username Required'
    });
  }

  if (!password) {
    return res.status(400).json({
      message: 'Password Required'
    });
  }

  User.findOne({username})
    .then(existing => {
      if (existing) {
        return res.status(500).json({
          message: 'Username Not Available'
        });
      }
			
      const user = new User(req.body);
      user.generateHash(password);
      return user.save()
        .then(user => token.sign(user))
        .then(token => res.json({token}));
        
    })
		.catch(err => {
      res.status(500).json({
        message: 'Server Error: ' + err
      });
		});
});

router.post('/login', jsonParser, (req, res) => {
  const {username, password} = req.body;
  delete req.body;

  if (!username) {
    return res.status(400).json({
      message: 'Username Required'
    });
  }

  if (!password) {
    return res.status(400).json({
      message: 'Password Required'
    });
  }

  User.findOne({username})
    .then(user => {
      
      if (!user) {
        return res.status(400).json({
          message: 'No User Found'
        });
      }

			
      if (!user.compareHash(password)) {
        return res.status(400).json({
          message: 'Invalid Username and/or Password'
        });
      }
      
      token.sign(user).then(token => res.json({token}));
    })
		.catch(err => {
      res.status(500).json({
        message: 'Server Error: ' + err
      });
		});
	
});

router.get('/verify', authValidate, (req, res) => {
  res.status(200).send({success: true});
});

module.exports = router;