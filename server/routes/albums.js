const router = require('express').Router();
const Album = require('../models/album');
const jsonBody = require('body-parser').json();

module.exports = router

  .get('/', (req, res, next) => {
    Album.find()
      .then( data => res.send(data) )
      .catch( err => {
        next({code: 500, error: 'Database failure', msg: err});
      });
  })
  .post('/', jsonBody, (req, res, next) => {
    new Album(req.body).save()
    .then( data => res.send(data) )
    .catch( err => {
      next({code: 500, error: 'Database failure', msg: err});
    });
  })
  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then( data => res.send(data) )
      .catch( err => {
        next({code: 500, error: 'Database failure', msg: err});
      });
  });
