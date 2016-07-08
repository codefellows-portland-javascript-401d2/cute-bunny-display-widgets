const bodyParser = require('body-parser');
const express = require('express');
const middlewares = require('../lib/middlewares');
const token = require('../lib/token');
const UserModel = require('../models/user.model');

const jsonParser = bodyParser.json();
const router = express.Router();

router
  .post('/signup', jsonParser, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    delete req.body.password;

    if (!username) {
      return res
        .status(400)
        .json({
          status: 'error',
          result: 'The username field is required.'
        });
    }

    if (!password) {
      return res
        .status(400)
        .json({
          status: 'error',
          result: 'The password field is required.'
        });
    }

    UserModel
      .findOne({
        username
      })
      .then(user => {
        if (user) {
          return res
            .status(500)
            .json({
              status: 'error',
              result: 'The username already exists.'
            });
        }

        user = new UserModel(req.body);
        user.generateHash(password);
        return user
          .save()
          .then(user => token.sign(user))
          .then(token => res.json({token}));
      })
      .catch(err => {
        res
          .status(500)
          .json({
            status: 'error',
            result: 'Server error',
            error: err
          });
      });
  })
  .post('/signin', jsonParser, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    delete req.body;

    User
      .findOne({
        username
      })
      .then(user => {
        if (!user) {
          return res
            .status(400)
            .json({
              status: 'error',
              result: `${username} does not exist.`
            });
        }

        if (!user.compareHash(password)) {
          return res
            .status(400)
            .json({
              status: 'error',
              result: 'The username and password doesn\'t match.'
            });
        }

        token
          .sign(user)
          .then(token => res.json({token}));
      })
      .catch(err => {
        res
          .status(500)
          .json({
            status: 'error',
            result: 'Server error',
            error: err
          });
      });
  })
  .get('/verify', middlewares.validateToken, (req, res) => {
    res
      .status(200)
      .send({
        status: 'success',
        result: true
      });
  });

module.exports = router;
